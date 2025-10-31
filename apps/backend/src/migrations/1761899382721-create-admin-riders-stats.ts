import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateAdminRidersStats1761899382721 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE MATERIALIZED VIEW admin_riders_stats AS
            SELECT 
                r.id AS "riderId",
                COUNT(h.id)::int AS "assignedHouses",
                SUM(p.amount)::float AS "collectedAmount"
            FROM "user" r
            LEFT JOIN "house" h on h."riderId" = r.id
            LEFT JOIN payment p
                on p."riderId" = r.id 
                AND p.status = 'Completed'
            WHERE r.role = 'Rider'
            GROUP BY r.id;
            `);

    // Create unique index to support concurrent refresh
    await queryRunner.query(`
            CREATE UNIQUE INDEX admin_riders_stats_rider_id_idx 
            ON admin_riders_stats ("riderId");
            `);

    // refresh this view on house insert, or update of riderId
    await queryRunner.query(`
            CREATE OR REPLACE FUNCTION refresh_admin_riders_stats()
            RETURNS TRIGGER AS $$
            BEGIN
                REFRESH MATERIALIZED VIEW CONCURRENTLY admin_riders_stats;
                RETURN NEW;
            END;
            $$ LANGUAGE plpgsql;
        `);

    await queryRunner.query(`
            CREATE TRIGGER admin_riders_stats_trigger
            AFTER INSERT OR UPDATE OF "riderId" ON "house"
            FOR EACH ROW
            EXECUTE FUNCTION refresh_admin_riders_stats();
        `);

    // refresh the view whenever a payment row is inserted
    await queryRunner.query(`
            CREATE TRIGGER admin_riders_stats_payment_insert_trigger
            AFTER INSERT ON "payment"
            FOR EACH ROW
            EXECUTE FUNCTION refresh_admin_riders_stats();
        `);

    // refresh the view whenever a payment status changes
    await queryRunner.query(`
            CREATE TRIGGER admin_riders_stats_payment_update_trigger
            AFTER UPDATE OF "status" ON "payment"
            FOR EACH ROW
            WHEN (OLD.status IS DISTINCT FROM NEW.status)
            EXECUTE FUNCTION refresh_admin_riders_stats();
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            DROP TRIGGER IF EXISTS admin_riders_stats_payment_insert_trigger ON "payment";
        `);

    await queryRunner.query(`
            DROP TRIGGER IF EXISTS admin_riders_stats_payment_update_trigger ON "payment";
        `);

    await queryRunner.query(`
            DROP TRIGGER IF EXISTS admin_riders_stats_trigger ON "house";
        `);

    await queryRunner.query(`
            DROP FUNCTION IF EXISTS refresh_admin_riders_stats();
        `);

    await queryRunner.query(`
            DROP INDEX IF EXISTS admin_riders_stats_rider_id_idx;
        `);

    await queryRunner.query(`
            DROP MATERIALIZED VIEW IF EXISTS admin_riders_stats;
            `);
  }
}
