import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsEnum, IsNotEmpty, MinLength } from "class-validator";
import {
  IForgotRequest,
  ILoginRequest,
  IResetRequest,
  IUserRole,
  IVerifyOtpRequest,
} from "shared";

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

export class ForgotDto implements IForgotRequest {
  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  email!: string;
}

export class VerifyOtpDto extends ForgotDto implements IVerifyOtpRequest {
  @ApiProperty()
  @MinLength(6)
  @IsNotEmpty()
  otp!: string;
}

export class ResetPasswordDto extends VerifyOtpDto implements IResetRequest {
  @ApiProperty()
  @IsNotEmpty()
  password!: string;

  @ApiProperty()
  @IsNotEmpty()
  confirmPassword!: string;
}
