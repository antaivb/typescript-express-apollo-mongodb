import registerCommand from "../../../../../application/command/user/registerCommand"
import registerHandler from "../../../../../application/command/user/registerHandler"
import {userRepository} from "../../../../repository/userRepository"

const userMutation = {
    createUser: async (_: any, {user: input}: any) => {
        const registerCommand: registerCommand = {
            email: input.email,
            firstname: input.firstname
        }

        const handler = registerHandler(new userRepository())
        return await handler(registerCommand)
    }
}

export default userMutation
