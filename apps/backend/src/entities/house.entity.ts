import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { User } from "./user.entity";
import { Sector } from "./sector.entity";
import { Payment } from "./payment.entity";

@Entity("house")
export class House {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "varchar", unique: true })
  houseId!: string;

  @Column({ type: "int" })
  fees!: number;

  @Column({ type: "varchar", nullable: false })
  house!: string;

  @Column({ type: "varchar", nullable: false })
  street!: string;

  @Column({ type: "varchar", nullable: false })
  address!: string;

  @Column({ type: "varchar" })
  plotSize!: string;

  @Column({ type: "int" })
  riderId!: number;

  @Column({ type: "int" })
  ownerId!: number;

  @Column({ type: "int" })
  sectorId!: number;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  @ManyToOne(() => User, (rider) => rider.riderHouses)
  @JoinColumn({ name: "riderId" })
  rider!: User;

  @ManyToOne(() => User, (owner) => owner.ownerHouses)
  @JoinColumn({ name: "ownerId" })
  owner!: User;

  @ManyToOne(() => Sector, (sector) => sector.houses)
  @JoinColumn({ name: "sectorId" })
  sector!: Sector;

  @OneToMany(() => Payment, (payment) => payment.house)
  payments!: Payment[];
}
