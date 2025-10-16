import { IUser } from "@libs/shared";
import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
  getData(): { message: string; user: IUser } {
    const user: IUser = {
      name: "John Doe",
      id: 30,
      email: "john.doe@example.com",
    };
    return { message: "Hello API", user };
  }
}
