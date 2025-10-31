import { MigrationInterface, QueryRunner } from "typeorm";

export class PopulateUserId1730419200000 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // Populate existing records with auto-generated userId values
    await queryRunner.query(`
      UPDATE "user" 
      SET "userId" = 'U-' || LPAD(id::text, 3, '0')
      WHERE "userId" IS NULL OR "userId" = '';
    `);

    // Add unique constraint and make userId NOT NULL
    await queryRunner.query(`
      ALTER TABLE "user" 
      ALTER COLUMN "userId" SET NOT NULL;
    `);

    await queryRunner.query(`
      ALTER TABLE "user" 
      ADD CONSTRAINT "UQ_user_userId" UNIQUE ("userId");
    `);

    // Create a function to auto-generate userId for new inserts
    await queryRunner.query(`
      CREATE OR REPLACE FUNCTION generate_user_id()
      RETURNS TRIGGER AS $$
      BEGIN
        -- Update the userId after insert when we have the ID
        UPDATE "user" 
        SET "userId" = 'U-' || LPAD(NEW.id::text, 3, '0')
        WHERE id = NEW.id AND ("userId" IS NULL OR "userId" = '');
        
        RETURN NEW;
      END;
      $$ LANGUAGE plpgsql;
    `);

    // Create trigger to auto-generate userId after insert
    await queryRunner.query(`
      CREATE TRIGGER user_id_trigger
      AFTER INSERT ON "user"
      FOR EACH ROW
      EXECUTE FUNCTION generate_user_id();
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Remove trigger and function
    await queryRunner.query(
      `DROP TRIGGER IF EXISTS user_id_trigger ON "user";`
    );
    await queryRunner.query(`DROP FUNCTION IF EXISTS generate_user_id();`);

    // Remove unique constraint
    await queryRunner.query(
      `ALTER TABLE "user" DROP CONSTRAINT IF EXISTS "UQ_user_userId";`
    );

    // Make userId nullable again
    await queryRunner.query(
      `ALTER TABLE "user" ALTER COLUMN "userId" DROP NOT NULL;`
    );

    // Clear userId values
    await queryRunner.query(`UPDATE "user" SET "userId" = NULL;`);
  }
}
