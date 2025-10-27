import { Controller, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { AuthService } from "./auth.service";

@Controller("auth")
@ApiTags("Authentication")
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post("login")
  async login() {
    return await this.authService.login();
  }
}
