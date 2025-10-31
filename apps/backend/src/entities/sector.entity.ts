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
import { House } from "./house.entity";

@Entity("sector")
export class Sector {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "varchar", unique: true })
  sectorId!: string;

  @Column({ type: "varchar" })
  name!: string;

  @Column({ type: "int" })
  fees!: number;

  @Column({ type: "text" })
  description!: string;

  @Column({ type: "int" })
  riderId!: number;

  @ManyToOne(() => User, (rider) => rider.sectors)
  @JoinColumn({ name: "riderId" })
  rider!: User;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  @OneToMany(() => House, (house) => house.sector)
  houses!: House[];
}
