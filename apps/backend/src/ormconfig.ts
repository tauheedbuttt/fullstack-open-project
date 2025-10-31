import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { User } from "./entities/user.entity";
import { PopulateUserId1730419200000 } from "./migrations/1730419200000-populate-user-id";
import { CreateUser1761569196818 } from "./migrations/1761569196818-create-user";
import { AddOtpFields1761647706957 } from "./migrations/1761647706957-add-otp-fields";

const entities = [User];
const migrations = [
  CreateUser1761569196818,
  AddOtpFields1761647706957,
  PopulateUserId1730419200000,
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
