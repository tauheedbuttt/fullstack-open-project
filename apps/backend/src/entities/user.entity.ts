import { IUserRole, IUserStatus } from "shared";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  OneToOne,
} from "typeorm";
import { Sector } from "./sector.entity";
import { AdminRiderStatsView } from "./views/adminRiderStats.view";
import { Payment } from "./payment.entity";
import { House } from "./house.entity";

@Entity("user")
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "varchar", unique: true })
  userId!: string;

  @Column({ type: "varchar" })
  name!: string;

  @Column({ type: "varchar" })
  phone!: string;

  @Column({ type: "varchar" })
  email!: string;

  @Column({ type: "varchar" })
  cnic!: string;

  @Column({ type: "varchar" })
  address!: string;

  @Column({ type: "varchar", select: false })
  password!: string;

  @Column({
    type: "enum",
    enum: IUserRole,
    enumName: "user_role_enum",
  })
  role!: IUserRole;

  @Column({
    type: "enum",
    enum: IUserStatus,
    enumName: "user_status_enum",
  })
  status!: IUserStatus;

  @Column({ type: "varchar", select: false })
  resetOtp!: string | null;

  @Column({ type: "date", select: false })
  resetOtpExpiry!: Date | null;

  @Column({ type: "date", select: false })
  resetRequest!: Date | null;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  @OneToMany(() => Sector, (sector) => sector.rider)
  sectors!: Sector[];

  @OneToOne(() => AdminRiderStatsView, (stats) => stats.rider)
  adminRiderStats!: AdminRiderStatsView;

  @OneToMany(() => Payment, (payment) => payment.rider)
  riderPayments!: Payment[];

  @OneToMany(() => Payment, (payment) => payment.owner)
  ownerPayments!: Payment[];

  @OneToMany(() => House, (house) => house.rider)
  riderHouses!: House[];

  @OneToMany(() => House, (house) => house.owner)
  ownerHouses!: House[];
}
