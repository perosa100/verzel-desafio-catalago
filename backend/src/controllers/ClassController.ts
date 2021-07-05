import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'
import ClassRepository from '../repositories/ClassRepository'
import ModuleRepository from './../repositories/ModuleRepository'

class ClassController {
  async create(request: Request, response: Response) {
    const classRepository = getCustomRepository(ClassRepository)

    const { nome, modulo, dateClass, modules } = request.body

    const existsClass = await classRepository.findOne({ nome })

    if (existsClass) {
      return response.status(400).json({ err: 'Class already exists!' })
    }

    console.log({ nome, modulo, dateClass, modules })

    const classCreated = classRepository.create({
      nome,
      modulo,
      dateClass,
      modules
    })

    await classRepository.save(classCreated)

    return response.json(classCreated)
  }

  async show(request: Request, response: Response) {
    const classRepository = getCustomRepository(ClassRepository)

    const listClass = await classRepository.findAndCount({
      order: { nome: 'ASC' },
      relations: ['modules']
    })

    return response.json(listClass)
  }

  async update(request: Request, response: Response) {
    const { id } = request.params
    const { nome, modulo, dateClass } = request.body

    const classRepository = getCustomRepository(ClassRepository)

    const classUpdated = await classRepository.findOne(id)

    if (!classUpdated) {
      return response.send(500).json('classUpdated not found')
    }

    classUpdated.nome = !!nome ? nome : classUpdated.nome
    classUpdated.modulo = !!modulo ? modulo : classUpdated.modulo
    classUpdated.dateClass = !!dateClass ? dateClass : classUpdated.dateClass

    const classUpdate = await classRepository.save(classUpdated)

    return response.json(classUpdate)
  }

  async delete(request: Request, response: Response) {
    const classRepository = getCustomRepository(ClassRepository)

    const { id } = request.params
    await classRepository.delete({ id })

    return response.send(200)
  }
}

export default new ClassController()
