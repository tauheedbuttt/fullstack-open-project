import { Body, Controller, Param, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { AuthService } from "./auth.service";
import { LoginDto, LoginParamsDro } from "./auth.dto";

@Controller("auth")
@ApiTags("Authentication")
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post("/:role/login")
  async login(@Param() params: LoginParamsDro, @Body() body: LoginDto) {
    const { role } = params;
    return await this.authService.login(role, body);
  }
}
