import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToMany,
  JoinTable
} from 'typeorm'
import Module from './Module'

@Entity('class')
class Class {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  nome: string

  @Column()
  modulo: string

  @Column()
  dateClass: Date

  @CreateDateColumn()
  created_at: Date

  @ManyToMany(() => Module, (module) => module.classe)
  @JoinTable()
  modules: Module[]
}

export default Class
