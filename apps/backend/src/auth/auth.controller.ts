import { Body, Controller, Param, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { AuthService } from "./auth.service";
import { ForgotDto, LoginDto, LoginParamsDro } from "./auth.dto";

@Controller("auth")
@ApiTags("Authentication")
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post("/:role/login")
  async login(@Param() params: LoginParamsDro, @Body() body: LoginDto) {
    const { role } = params;
    return await this.authService.login(role, body);
  }

  @Post("/forgot")
  async forgot(@Body() body: ForgotDto) {
    return await this.authService.forgot(body);
  }
}
