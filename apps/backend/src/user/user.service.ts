import { Injectable } from "@nestjs/common";
import { DataSource, ILike, Repository } from "typeorm";
import { User } from "../entities/user.entity";
import { IRidersResponse, IUserRole } from "shared";
import { RidersQueryDto } from "./user.dto";

@Injectable()
export class UserService {
  private userRepository: Repository<User>;

  constructor(dataSource: DataSource) {
    this.userRepository = dataSource.getRepository(User);
  }

  async getRiders(query: RidersQueryDto): Promise<IRidersResponse> {
    const filters = {
      role: IUserRole.RIDER,
      ...(query.status ? { status: query.status } : {}),
    };

    const riders = await this.userRepository.find({
      where: [
        { name: ILike(`%${query.search}%`) },
        { email: ILike(`%${query.search}%`) },
        { phone: ILike(`%${query.search}%`) },
      ].map((condition) => ({ ...condition, ...filters })),
    });

    return { riders };
  }
}
