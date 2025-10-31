import {
  CanActivate,
  ExecutionContext,
  Injectable,
  Logger,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Request } from "express";
import { Unauthorized } from "../filters/exceptions";
import { IJwtPayload, IUserStatus } from "shared";
import { DataSource, Repository } from "typeorm";
import { User } from "../entities/user.entity";

@Injectable()
export class AuthGuard implements CanActivate {
  private userRepository: Repository<User>;
  constructor(private jwtService: JwtService, private dataSource: DataSource) {
    this.userRepository = this.dataSource.getRepository(User);
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);
    if (!token) {
      throw new Unauthorized("No token provided");
    }
    try {
      const payload: IJwtPayload = await this.jwtService.verifyAsync(token, {
        secret: process.env.JWT_SECRET,
      });

      const user = await this.userRepository.findOne({
        where: { id: payload.uid, status: IUserStatus.ACTIVE },
      });
      if (!user) throw new Error("User not found");

      request.user = user;
    } catch {
      throw new Unauthorized("Invalid or expired token");
    }
    return true;
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(" ") ?? [];
    return type === "Bearer" ? token : undefined;
  }
}
