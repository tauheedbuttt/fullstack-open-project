import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateHouse1761895956017 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // Create house table
    await queryRunner.query(`
            CREATE TABLE house (
                id SERIAL PRIMARY KEY,
                "houseId" varchar,
                
                "house" varchar NOT NULL,
                "street" varchar NOT NULL,
                "address" varchar,
                "plotSize" varchar,
                "notes" text,
                "fees" int NOT NULL,
                
                "riderId" int,
                "ownerId" int,
                "sectorId" int NOT NULL,
                
                "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
                "updatedAt" TIMESTAMP NOT NULL DEFAULT now()
            );
        `);

    // create foreign keys
    await queryRunner.query(`
            ALTER TABLE house
            ADD CONSTRAINT "FK_house_rider"
            FOREIGN KEY ("riderId") REFERENCES "user"(id)
            ON DELETE CASCADE
            ON UPDATE CASCADE;
        `);
    await queryRunner.query(`
            ALTER TABLE house
            ADD CONSTRAINT "FK_house_owner"
            FOREIGN KEY ("ownerId") REFERENCES "user"(id)
            ON DELETE CASCADE
            ON UPDATE CASCADE;
        `);
    await queryRunner.query(`
            ALTER TABLE house
            ADD CONSTRAINT "FK_house_sector"
            FOREIGN KEY ("sectorId") REFERENCES "sector"(id)
            ON DELETE CASCADE
            ON UPDATE CASCADE;
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE house;`);
  }
}
