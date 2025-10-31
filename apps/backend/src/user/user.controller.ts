import { Controller, Get, Query, UseGuards } from "@nestjs/common";
import { ApiQuery, ApiTags } from "@nestjs/swagger";
import { RidersQueryDto } from "./user.dto";
import { UserService } from "./user.service";
import { IUserStatus } from "shared";
import { AuthGuard } from "../auth/auth.guard";

@Controller("user")
@ApiTags("User")
export class UserController {
  constructor(private userService: UserService) {}

  @UseGuards(AuthGuard)
  @Get("/riders")
  @ApiQuery({
    name: "search",
    required: false,
    description: "Search by name, email or phone",
  })
  @ApiQuery({
    name: "status",
    required: false,
    description: `Filter by user status ${Object.values(IUserStatus).join(
      ", "
    )}`,
  })
  async getRiders(@Query() query: RidersQueryDto) {
    return await this.userService.getRiders(query);
  }
}
