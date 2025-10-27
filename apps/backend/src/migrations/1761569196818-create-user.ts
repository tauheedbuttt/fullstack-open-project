import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUser1761569196818 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // user role enum
    await queryRunner.query(`
      CREATE TYPE "user_role_enum"
      AS ENUM(
        'Admin',
        'Rider',
        'Owner'
      );
    `);

    // order status enum
    await queryRunner.query(`
      CREATE TYPE "user_status_enum"
      AS ENUM(
        'Active',
        'Inactive'
      );
    `);

    // Create user table
    await queryRunner.query(`
      CREATE TABLE "user" (
        id SERIAL PRIMARY KEY,
        "userId" varchar,
        
        "name" varchar,
        "phone" varchar,
        "email" varchar,
        "cnic" varchar,
        "address" varchar,
        
        "password" varchar,
        "role" user_role_enum,
        "status" user_status_enum,
        
        "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
        "updatedAt" TIMESTAMP NOT NULL DEFAULT now()
      );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE user;`);
    await queryRunner.query(`DROP TYPE "user_role_enum";`);
    await queryRunner.query(`DROP TYPE "user_status_enum";`);
  }
}
