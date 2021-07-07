import { Repository, EntityRepository } from "typeorm";
import User from "../models/User";

@EntityRepository(User)
class UserRepository extends Repository<User> {
  async show(request: Request, response: Response) {

}}

export default UserRepository;
