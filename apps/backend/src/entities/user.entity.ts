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

  @Column({ type: "varchar", nullable: true })
  userId!: string;

  @Column({ type: "varchar", nullable: true })
  name!: string;

  @Column({ type: "varchar", nullable: true })
  phone!: string;

  @Column({ type: "varchar", nullable: true })
  email!: string;

  @Column({ type: "varchar", nullable: true })
  cnic!: string;

  @Column({ type: "varchar", nullable: true })
  address!: string;

  @Column({ type: "varchar", nullable: true })
  password!: string;

  @Column({
    type: "enum",
    enum: IUserRole,
    enumName: "user_role_enum",
    nullable: true,
  })
  role!: IUserRole;

  @Column({
    type: "enum",
    enum: IUserStatus,
    enumName: "user_status_enum",
    nullable: true,
  })
  status!: IUserStatus;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
