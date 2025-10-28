import { IUserRole, IUserStatus } from "shared";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("user")
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "varchar" })
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

  @Column({ type: "varchar" })
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

  @Column({ type: "varchar" })
  resetOtp!: string | null;

  @Column({ type: "date" })
  resetOtpExpiry!: Date | null;

  @Column({ type: "date" })
  resetRequest!: Date | null;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
