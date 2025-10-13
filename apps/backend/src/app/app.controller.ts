import { Controller, Get } from "@nestjs/common";
import { AppService } from "./app.service";
import { IUser } from "@libs/shared";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    const user: IUser = {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
    };
    console.log("User:", user);
    return this.appService.getData();
  }
}
