import { Router } from 'express'
import UserController from './controllers/UserController'
import SessionController from './controllers/SessionController'
import PermissionController from './controllers/PermissionController'
import RoleController from './controllers/RoleController'
import ProductController from './controllers/ProductController'

import { is } from './middlewares/permission'
import ModuleController from './controllers/ModuleController'
import ClassController from './controllers/ClassController'

const router = Router()

router.post('/users', UserController.create)
router.get('/users', UserController.show)
router.get('/users/roles', UserController.roles)

router.post('/sessions', SessionController.create)

router.post('/permissions', PermissionController.create)
router.get('/permissions', PermissionController.show)

router.post('/roles', RoleController.create)
router.get('/roles', RoleController.show)


router.post('/module', is(['ROLE_ADMIN']), ModuleController.create)
router.get('/module', ModuleController.show)
router.put('/module/:id', is(['ROLE_ADMIN']), ModuleController.update)
router.delete('/module/:id', is(['ROLE_ADMIN']), ModuleController.delete)

router.post('/class', is(['ROLE_ADMIN']), ClassController.create)
router.get('/class', ClassController.show)
router.put('/class/:id', is(['ROLE_ADMIN']), ClassController.update)
router.delete('/class/:id', is(['ROLE_ADMIN']), ClassController.delete)

router.post('/products', is(['ROLE_ADMIN']), ProductController.create)

export { router }
