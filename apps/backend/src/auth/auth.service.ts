import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from "bcrypt";
import * as crypto from "crypto";
import { ILoginResponse, IUserRole, IUserStatus } from "shared";
import { DataSource, Repository } from "typeorm";
import { User } from "../entities/user.entity";
import { Forbidden, NotFound } from "../filters/exceptions";
import {
  ForgotDto,
  LoginDto,
  ResetPasswordDto,
  VerifyOtpDto,
} from "./auth.dto";

@Injectable()
export class AuthService {
  private userRepository: Repository<User>;

  constructor(private dataSource: DataSource, private jwtService: JwtService) {
    this.userRepository = this.dataSource.getRepository(User);
  }

  async login(role: IUserRole, body: LoginDto): Promise<ILoginResponse> {
    const user = await this.userRepository.findOne({
      where: { email: body.email, role, status: IUserStatus.ACTIVE },
    });
    if (!user) throw new Forbidden("Invalid credentials");

    // use bcrypt to compare passwords in a real application
    const comparison = await bcrypt.compare(body.password, user.password);
    if (!comparison) throw new Forbidden("Invalid credentials");

    const token = await this.jwtService.signAsync({
      iam: user.userId,
      role: user.role,
    });

    return { token, role: user.role };
  }

  async forgot(body: ForgotDto): Promise<{ message: string }> {
    const user = await this.userRepository.findOne({
      where: { email: body.email, status: IUserStatus.ACTIVE },
    });
    if (!user) throw new NotFound("User not found");

    // check if requested 5 minutes ago
    if (
      user.resetRequest &&
      new Date().getTime() - new Date(user.resetRequest).getTime() <
        5 * 60 * 1000
    ) {
      throw new Forbidden("Password reset already requested. Please wait.");
    }

    // generate reset token
    const expiryMinutes = parseInt(process.env.OTP_EXPIRY ?? "") || 15;
    const resetOtp = crypto
      .randomInt(0, 1000000)
      .toString()
      .padStart(6, "0")
      .toUpperCase();
    const resetOtpExpiry = new Date(Date.now() + expiryMinutes * 60 * 1000);

    user.resetOtp = resetOtp;
    user.resetOtpExpiry = resetOtpExpiry;
    user.resetRequest = new Date();

    await this.userRepository.save(user);

    // Send Email Here

    return { message: "Password reset OTP sent to email" };
  }

  async verifyOtp(body: VerifyOtpDto) {
    const user = await this.userRepository.findOne({
      where: { email: body.email, resetOtp: body.otp },
    });
    if (!user) throw new NotFound("Invalid OTP");

    // check if otp is expired
    if (user.resetOtpExpiry && new Date(user.resetOtpExpiry) < new Date()) {
      throw new Forbidden("OTP has expired");
    }

    return { message: "OTP verified successfully" };
  }

  async resetPassword(body: ResetPasswordDto) {
    const user = await this.userRepository.findOne({
      where: { email: body.email, resetOtp: body.otp },
    });
    if (!user) throw new NotFound("Invalid OTP");

    // check if otp is expired
    if (user.resetOtpExpiry && new Date(user.resetOtpExpiry) < new Date()) {
      throw new Forbidden("OTP has expired");
    }

    // hash the new password
    const hashedPassword = await bcrypt.hash(body.password, 10);
    user.password = hashedPassword;

    // clear reset otp fields
    user.resetOtp = null;
    user.resetOtpExpiry = null;
    user.resetRequest = null;

    await this.userRepository.save(user);

    return { message: "Password reset successfully" };
  }
}
