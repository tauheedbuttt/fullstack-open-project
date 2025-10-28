import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsEnum, IsNotEmpty } from "class-validator";
import { ILoginRequest, IUserRole } from "shared";

export class LoginParamsDro {
  @ApiProperty()
  @IsEnum(IUserRole)
  @IsNotEmpty()
  role!: IUserRole;
}

export class LoginDto implements ILoginRequest {
  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  email!: string;

  @ApiProperty()
  @IsNotEmpty()
  password!: string;
}

export class ForgotDto {
  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  email!: string;
}
