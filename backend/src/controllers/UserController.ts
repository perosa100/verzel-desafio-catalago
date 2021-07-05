import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'
import { hash } from 'bcryptjs'
import UserRepository from '../repositories/UserRepository'
import RoleRepository from '../repositories/RoleRepository'
import { decode } from 'jsonwebtoken'

class UserController {
  async create(request: Request, response: Response) {
    const userRepository = getCustomRepository(UserRepository)
    const roleRepository = getCustomRepository(RoleRepository)

    const { name, email, password, roles } = request.body

    const existUser = await userRepository.findOne({ email })

    if (existUser) {
      return response
        .status(400)
        .json({ message: 'E-mail ja existe no sistema.' })
    }

    const passwordHashed = await hash(password, 8)

    console.log({
      name,
      email,
      password,
      roles
    })

    if (!roles) {
      existsRoles = []
    }

    var existsRoles = await roleRepository.findByIds(roles)

    const user = userRepository.create({
      name,
      email,
      password: passwordHashed,
      roles: existsRoles
    })

    await userRepository.save(user)

    user.password = ''

    return response.status(201).json(user)
  }

  async show(request: Request, response: Response) {
    const userRepository = getCustomRepository(UserRepository)

    const users = await userRepository.find()

    return response.status(201).json(users)
  }

  async roles(request: Request, response: Response) {
    const authHeader = request.headers.authorization || ''
    console.log(authHeader)

    const userRepository = getCustomRepository(UserRepository)

    const [, token] = authHeader?.split(' ')

    try {
      if (!token) {
        return response.status(401).json({ message: 'Não autorizado' })
      }
      const payload = decode(token)

      if (!payload) {
        return response.status(401).json({ message: 'Não autorizado' })
      }

      const user = await userRepository.findOne(payload?.sub, {
        relations: ['roles']
      })
      const roles = user?.roles.map((r) => r.name)
      console.log(roles)
      return response.json(roles)
    } catch (error) {
      return response.status(400).send()
    }
  }
}

export default new UserController()
