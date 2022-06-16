import {userRepositoryInterface} from "../../../domain/repository/userRepositoryInterface";
import getUserQuery from "./getUserQuery";

const getUserHandler = (
    userRepository: userRepositoryInterface
) => async (query: getUserQuery) => {

  let user = null
  if (query.email) {
    user = await userRepository.findOne('email', query.email)
  } else if(query.id) {
    user = await userRepository.findById(query.id)
  }

  if (!user) {
    throw new Error('User not found.')
  }

  return user.serialize()
}

export default getUserHandler