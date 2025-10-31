import { MigrationInterface, QueryRunner } from "typeorm";

export class CreatePayment1761898314920 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // payment status enum
    await queryRunner.query(`
      CREATE TYPE "payment_status_enum"
      AS ENUM(
        'Pending',
        'Completed'
      );
    `);

    // payment method enum
    await queryRunner.query(`
      CREATE TYPE "payment_method_enum"
      AS ENUM(
        'Cash',
        'Card',
        'Online'
      );
    `);

    // Create payment table
    await queryRunner.query(`
            CREATE TABLE payment (
                id SERIAL PRIMARY KEY,
                "paymentId" varchar,
                
                "amount" float NOT NULL,
                "paymentDate" date,
                "paymentTime" time,
                "reason" text,
                "status" payment_status_enum DEFAULT 'Pending',
                "paymentMethod" payment_method_enum,
                
                "riderId" int,
                "houseId" int,
                "ownerId" int,
                
                "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
                "updatedAt" TIMESTAMP NOT NULL DEFAULT now()
            );
        `);

    // relations
    await queryRunner.query(`
            ALTER TABLE payment
            ADD CONSTRAINT "FK_payment_house"
            FOREIGN KEY ("houseId") REFERENCES "house"(id)
            ON DELETE CASCADE
            ON UPDATE CASCADE;
        `);

    await queryRunner.query(`
            ALTER TABLE payment
            ADD CONSTRAINT "FK_payment_rider"
            FOREIGN KEY ("riderId") REFERENCES "user"(id)
            ON DELETE CASCADE
            ON UPDATE CASCADE;
        `);

    await queryRunner.query(`
            ALTER TABLE payment
            ADD CONSTRAINT "FK_payment_owner"
            FOREIGN KEY ("ownerId") REFERENCES "user"(id)
            ON DELETE CASCADE
            ON UPDATE CASCADE;
        `);

    // Create a function to auto-generate paymentId for new inserts
    await queryRunner.query(`
      CREATE OR REPLACE FUNCTION generate_payment_id()
      RETURNS TRIGGER AS $$
      BEGIN
        -- Update the paymentId after insert when we have the ID
        UPDATE "payment" 
        SET "paymentId" = 'P-' || LPAD(NEW.id::text, 3, '0')
        WHERE id = NEW.id AND ("paymentId" IS NULL OR "paymentId" = '');
        
        RETURN NEW;
      END;
      $$ LANGUAGE plpgsql;
    `);

    // Create trigger to auto-generate paymentId after insert
    await queryRunner.query(`
      CREATE TRIGGER payment_id_trigger
      AFTER INSERT ON "payment"
      FOR EACH ROW
      EXECUTE FUNCTION generate_payment_id();
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE payment;`);
    await queryRunner.query(`DROP TYPE IF EXISTS "payment_status_enum";`);
    await queryRunner.query(`DROP TYPE IF EXISTS "payment_method_enum";`);
    await queryRunner.query(`DROP FUNCTION IF EXISTS generate_payment_id();`);
  }
}
