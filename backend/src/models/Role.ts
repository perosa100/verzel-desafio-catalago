import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToMany,
  JoinTable
} from 'typeorm'
import Permission from './Permission'

@Entity('roles')
class Role {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @Column()
  description: string

  @CreateDateColumn()
  created_at: Date

  @ManyToMany(() => Permission, {
    eager: true
  })
  @JoinTable()
  permission: Permission[]
}

export default Role
