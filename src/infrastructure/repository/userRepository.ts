import {UserModel} from "../persistance/mongo/schema/user"
import {baseRepository} from "./baseRepository"
import {userRepositoryInterface} from "../../domain/repository/userRepositoryInterface";
import User from "../../domain/model/user";

export class userRepository extends baseRepository implements userRepositoryInterface {
  constructor() {
    super(UserModel, User);
  }
}