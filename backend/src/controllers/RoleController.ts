import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'
import RoleRepository from '../repositories/RoleRepository'
import PermissionRepository from '../repositories/PermissionRepository'

class RoleController {
  async create(request: Request, response: Response) {
    const roleRepository = getCustomRepository(RoleRepository)
    const permissionRepository = getCustomRepository(PermissionRepository)

    const { name, description, permissions } = request.body

    const existRole = await roleRepository.findOne({ name })

    if (existRole) {
      return response.status(400).json({ err: 'Role already exists!' })
    }

    const existsPermissions = await permissionRepository.findByIds(permissions)

    const role = roleRepository.create({
      name,
      description,
      permission: existsPermissions
    })

    await roleRepository.save(role)

    return response.json(role)
  }

  async show(request: Request, response: Response) {
    const roleRepository = getCustomRepository(RoleRepository)

    const roles = await roleRepository.find()

    return response.status(201).json(roles)
  }
}

export default new RoleController()
