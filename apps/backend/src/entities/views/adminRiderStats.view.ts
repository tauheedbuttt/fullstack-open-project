import { JoinColumn, OneToOne, ViewColumn, ViewEntity } from "typeorm";
import { User } from "../user.entity";

@ViewEntity({
  name: "admin_riders_stats",
  materialized: true,
})
export class AdminRiderStatsView {
  @ViewColumn()
  riderId!: string;

  @OneToOne(() => User, (user) => user.adminRiderStats)
  @JoinColumn({ name: "riderId" })
  rider!: User;

  @ViewColumn()
  assignedHouses!: number;

  @ViewColumn()
  collectedAmount!: number;
}
