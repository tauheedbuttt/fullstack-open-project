import { MigrationInterface, QueryRunner } from "typeorm";

export class AddOtpFields1761647706957 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE "user"
            ADD COLUMN "resetOtp" VARCHAR,
            ADD COLUMN "resetOtpExpiry" TIMESTAMP;    
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE "user"
            DROP COLUMN "resetOtp",
            DROP COLUMN "resetOtpExpiry";    
        `);
  }
}
