import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { User } from "./user.entity";
import { House } from "./house.entity";

@Entity("payment")
export class Payment {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "varchar", unique: true })
  paymentId!: string;

  @Column({ type: "int", nullable: false })
  amount!: number;

  @Column({ type: "date" })
  paymentDate!: string;

  @Column({ type: "time" })
  paymentTime!: string;

  @Column({ type: "text" })
  reason!: string;

  @Column({ type: "int" })
  riderId!: number;

  @Column({ type: "int" })
  ownerId!: number;

  @Column({ type: "int" })
  houseId!: number;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  @ManyToOne(() => User, (rider) => rider.riderPayments)
  @JoinColumn({ name: "riderId" })
  rider!: User;

  @ManyToOne(() => User, (owner) => owner.ownerPayments)
  @JoinColumn({ name: "ownerId" })
  owner!: User;

  @ManyToOne(() => House, (house) => house.payments)
  @JoinColumn({ name: "riderId" })
  house!: House;
}
