import { Repository, EntityRepository } from 'typeorm'
import Module from '../models/Module'

@EntityRepository(Module)
class ModuleRepository extends Repository<Module> {}

export default ModuleRepository
