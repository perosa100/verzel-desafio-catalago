import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToMany
} from 'typeorm'
import Class from './Class'

@Entity('module')
class Module {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  nome: string

  @CreateDateColumn()
  created_at: Date

  @ManyToMany(() => Class, (classe) => classe.modules)
  classe: Class[]
}

export default Module
