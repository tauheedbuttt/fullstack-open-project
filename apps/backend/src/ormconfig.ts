import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { AdminRiderStatsView, Sector, User } from "./entities";
import { PopulateUserId1730419200000 } from "./migrations/1730419200000-populate-user-id";
import { CreateUser1761569196818 } from "./migrations/1761569196818-create-user";
import { AddOtpFields1761647706957 } from "./migrations/1761647706957-add-otp-fields";
import { CreateSector1761895013315 } from "./migrations/1761895013315-create-sector";
import { StoreSectors1761895759479 } from "./migrations/seeders/1761895759479-store-sectors";
import { CreateHouse1761895956017 } from "./migrations/1761895956017-create-house";
import { AutoGenerateHouseFields1761896669705 } from "./migrations/1761896669705-auto-generate-house-fields";
import { CreatePayment1761898314920 } from "./migrations/1761898314920-create-payment";
import { House } from "./entities/house.entity";
import { Payment } from "./entities/payment.entity";
import { CreateAdminRidersStats1761899382721 } from "./migrations/1761899382721-create-admin-riders-stats";

const entities = [User, Sector, AdminRiderStatsView, House, Payment];
const migrations = [
  CreateUser1761569196818,
  AddOtpFields1761647706957,
  PopulateUserId1730419200000,
  CreateSector1761895013315,
  StoreSectors1761895759479,
  CreateHouse1761895956017,
  AutoGenerateHouseFields1761896669705,
  CreatePayment1761898314920,
  CreateAdminRidersStats1761899382721,
];

export const getOrmConfig = (): TypeOrmModuleOptions => {
  return {
    type: "postgres",
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT ?? "5432", 10),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    migrationsTransactionMode: "each",
    schema: "public",
    entities,
    migrationsTableName: "migrations",
    migrationsRun: true,
    synchronize: false,
    migrations,
    logging: process.env.NODE_ENV === "development" ? "all" : ["error"],
    logger: "formatted-console",
  };
};
