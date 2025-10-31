import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateSector1761895013315 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // Create sector table
    await queryRunner.query(`
            CREATE TABLE sector (
                id SERIAL PRIMARY KEY,
                "sectorId" varchar,
                
                "name" varchar,
                "fees" int,
                "description" text,
                
                "riderId" int,
                
                "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
                "updatedAt" TIMESTAMP NOT NULL DEFAULT now()
            );
        `);

    // create foreign key constraint with user table
    await queryRunner.query(`
            ALTER TABLE sector
            ADD CONSTRAINT "FK_sector_rider"
            FOREIGN KEY ("riderId") REFERENCES "user"(id)
            ON DELETE CASCADE
            ON UPDATE CASCADE;
        `);

    // Create a function to auto-generate sectorId for new inserts
    await queryRunner.query(`
      CREATE OR REPLACE FUNCTION generate_sector_id()
      RETURNS TRIGGER AS $$
      BEGIN
        -- Update the sectorId after insert when we have the ID
        UPDATE "sector" 
        SET "sectorId" = 'S-' || LPAD(NEW.id::text, 3, '0')
        WHERE id = NEW.id AND ("sectorId" IS NULL OR "sectorId" = '');
        
        RETURN NEW;
      END;
      $$ LANGUAGE plpgsql;
    `);

    // Create trigger to auto-generate sectorId after insert
    await queryRunner.query(`
      CREATE TRIGGER sector_id_trigger
      AFTER INSERT ON "sector"
      FOR EACH ROW
      EXECUTE FUNCTION generate_sector_id();
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE sector;`);
    await queryRunner.query(`DROP FUNCTION IF EXISTS generate_sector_id();`);
  }
}
