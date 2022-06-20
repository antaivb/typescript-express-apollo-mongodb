import {userRepository} from "../../../../repository/userRepository";
import getUserHandler from "../../../../../application/query/user/getUserHandler";
import getUserQuery from "../../../../../application/query/user/getUserQuery";

const userQuery = {
    user: async (_: any, {id, email}: { id: String, email: String }) => {
        const getUserQuery: getUserQuery = {
            email: email,
            id: id
        }

        const handler = getUserHandler(new userRepository())
        return await handler(getUserQuery)
    }
}

export default userQuery
