
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('visits')
export class Visit {

  @PrimaryGeneratedColumn() private id: number;
  // TODO: make migration for auto id.

  @Column({ type: 'varchar', length: 16, }) rfid: string;
  @Column({ type: 'char', length: 4, }) feederID: string;

  @Column({ type: 'bigint', precision: 20, nullable: true, }) visitTimestamp: number;

  @Column({ type: 'int', precision: 10, nullable: true, }) temperature: number;
  @Column({ type: 'int', precision: 10, nullable: true, }) mass: number;

  @Column({ type: 'varchar', length: 32, }) bandCombo: string;
}