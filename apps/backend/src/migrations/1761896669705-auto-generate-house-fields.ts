import { MigrationInterface, QueryRunner } from "typeorm";

export class AutoGenerateHouseFields1761896669705
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    // auto generated address field (house + street + sector.name)
    await queryRunner.query(`
          CREATE OR REPLACE FUNCTION generate_full_address()
          RETURNS TRIGGER AS $$
          DECLARE
            sector_name varchar;
          BEGIN
            SELECT name INTO sector_name FROM sector WHERE id = NEW."sectorId";
            NEW.address = NEW.house || ', ' || NEW.street || ', ' || sector_name;
            RETURN NEW;
          END;
          $$ LANGUAGE plpgsql;
        `);

    // trigger on update of house
    await queryRunner.query(`
            CREATE TRIGGER full_address_trigger
            BEFORE INSERT OR UPDATE ON "house"
            FOR EACH ROW
            EXECUTE FUNCTION generate_full_address();
            `);

    // auto generated id sector.name-street-house eg. D-12/3-12-177
    await queryRunner.query(`
          CREATE OR REPLACE FUNCTION generate_house_id()
          RETURNS TRIGGER AS $$
          DECLARE
            sector_name varchar;
          BEGIN
            SELECT name INTO sector_name FROM sector WHERE id = NEW."sectorId";
            NEW."houseId" = sector_name || '-' || NEW.street || '-' || NEW.house;
            RETURN NEW;
          END;
          $$ LANGUAGE plpgsql;
        `);

    await queryRunner.query(`
          CREATE TRIGGER house_id_trigger
          BEFORE INSERT ON "house"
          FOR EACH ROW
          EXECUTE FUNCTION generate_house_id();
        `);

    // function to update house fields when sector name changes
    await queryRunner.query(`
          CREATE OR REPLACE FUNCTION update_houses_on_sector_change()
          RETURNS TRIGGER AS $$
          BEGIN
            -- Update address and houseId for all houses in the updated sector
            UPDATE "house" 
            SET 
              address = house || ', ' || street || ', ' || NEW.name,
              "houseId" = NEW.name || '-' || street || '-' || house
            WHERE "sectorId" = NEW.id;
            
            RETURN NEW;
          END;
          $$ LANGUAGE plpgsql;
        `);

    // trigger on sector name update
    await queryRunner.query(`
          CREATE TRIGGER sector_update_trigger
          AFTER UPDATE OF name ON "sector"
          FOR EACH ROW
          WHEN (OLD.name IS DISTINCT FROM NEW.name)
          EXECUTE FUNCTION update_houses_on_sector_change();
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `DROP TRIGGER IF EXISTS sector_update_trigger ON "sector";`
    );
    await queryRunner.query(`DROP FUNCTION IF EXISTS generate_full_address();`);
    await queryRunner.query(`DROP FUNCTION IF EXISTS generate_house_id();`);
    await queryRunner.query(
      `DROP FUNCTION IF EXISTS update_houses_on_sector_change();`
    );
  }
}
