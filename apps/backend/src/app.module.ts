import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { SwaggerModule } from "@nestjs/swagger";
import { AuthModule } from "./auth/auth.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { getOrmConfig } from "./ormconfig";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { UserModule } from "./user/user.module";

const services = [AppService, ConfigService];

@Module({
  imports: [
    ConfigModule,
    TypeOrmModule.forRoot(getOrmConfig()),
    SwaggerModule,
    AuthModule,
    AppModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: services,
  exports: services,
})
export class AppModule {}
