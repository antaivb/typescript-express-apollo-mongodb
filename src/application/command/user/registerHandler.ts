import {userRepositoryInterface} from "../../../domain/repository/userRepositoryInterface"
import registerCommand from "./registerCommand"
import User from "../../../domain/model/user"
import {v4} from "uuid"

const registerHandler = (
    userRepository: userRepositoryInterface
) => async (command: registerCommand) => {

  const existing = await userRepository.findOne('email', command.email)
  if (!existing) {
    throw new Error('Email already exists.')
  }

  const user = User.create(v4(), command.email, command.firstname)

  try {
    await userRepository.create(user)
  } catch (error) {
    throw new Error('Error creating user')
  }

  return user.serialize()
}

export default registerHandler