import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from "bcrypt";
import { ILoginResponse, IUserRole, IUserStatus } from "shared";
import { DataSource, Repository } from "typeorm";
import { User } from "../entities/user.entity";
import { Forbidden } from "../filters/exceptions";
import { LoginDto } from "./auth.dto";

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
    if (!user) throw new Forbidden("User not found");

    // use bcrypt to compare passwords in a real application
    const comparison = await bcrypt.compare(body.password, user.password);
    if (!comparison) throw new Forbidden("Invalid credentials");

    const token = await this.jwtService.signAsync({
      iam: user.userId,
      role: user.role,
    });

    return { token, role: user.role };
  }
}
