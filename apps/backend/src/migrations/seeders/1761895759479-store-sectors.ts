import { MigrationInterface, QueryRunner } from "typeorm";
import { BASE_SECTOR_FEE } from "shared";

export class StoreSectors1761895759479 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const sectors = [
      { name: "D-12/1", fees: BASE_SECTOR_FEE },
      { name: "D-12/2", fees: BASE_SECTOR_FEE },
      { name: "D-12/3", fees: BASE_SECTOR_FEE },
      { name: "D-12/4", fees: BASE_SECTOR_FEE },
    ];

    await queryRunner.query(`
            INSERT INTO "sector" (name, fees)
            VALUES ${sectors.map((s) => `('${s.name}', ${s.fees})`).join(", ")}
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM sector`);
  }
}
