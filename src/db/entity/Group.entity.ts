import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Student } from './Student.entity';

@Entity('Group')
export class Group {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @OneToMany(() => Student, student => student.group)
  students!: Student[];

  @Column()
  contacts!: string;
}
