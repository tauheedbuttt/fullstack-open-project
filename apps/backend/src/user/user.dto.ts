import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsOptional } from "class-validator";
import { IRidersQuery, IUserStatus } from "shared";

export class RidersQueryDto implements IRidersQuery {
  @ApiProperty()
  @IsOptional()
  search?: string;

  @ApiProperty({ enum: IUserStatus })
  @IsOptional()
  @IsEnum(IUserStatus)
  status?: IUserStatus;
}
