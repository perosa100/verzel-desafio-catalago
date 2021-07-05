import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'
import ModuleRepository from '../repositories/ModuleRepository'

class ModuleController {
  async create(request: Request, response: Response) {
    const moduleRepository = getCustomRepository(ModuleRepository)

    const { nome } = request.body

    const existsmodule = await moduleRepository.findOne({ nome })

    if (existsmodule) {
      return response.status(400).json({ err: 'module already exists!' })
    }

    const module = moduleRepository.create({
      nome
    })

    await moduleRepository.save(module)

    return response.json(module)
  }

  async show(request: Request, response: Response) {
    const moduleRepository = getCustomRepository(ModuleRepository)

    const [modules, countModules] = await moduleRepository.findAndCount({
      order: { nome: 'ASC' },
      relations: ['classe']
    })

    const moduleAndCount = modules.map((module: any) => {
      console.log('module', module)

      return { countClasses: module.classe?.length || 0, ...module }
    })

    return response.json({
      modules: moduleAndCount,
      countModules
    })
  }

  async update(request: Request, response: Response) {
    const { id } = request.params
    const { nome } = request.body

    const moduleRepository = getCustomRepository(ModuleRepository)

    const moduleUpdated = await moduleRepository.findOne(id)

    if (!moduleUpdated) {
      return response.send(500).json('moduleUpdated not found')
    }

    moduleUpdated.nome = nome

    const moduleUpdate = await moduleRepository.save(moduleUpdated)

    return response.json(moduleUpdate)
  }

  async delete(request: Request, response: Response) {
    const moduleRepository = getCustomRepository(ModuleRepository)

    const { id } = request.params
    await moduleRepository.delete({ id })

    return response.send(200)
  }
}

export default new ModuleController()
