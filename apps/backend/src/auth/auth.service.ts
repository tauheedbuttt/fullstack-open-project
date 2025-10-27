import { Injectable } from "@nestjs/common";
import { DataSource } from "typeorm";

@Injectable()
export class AuthService {
  constructor(private dataSource: DataSource) {}

  async login() {
    return await this.dataSource.query("SELECT 1");
  }
}
