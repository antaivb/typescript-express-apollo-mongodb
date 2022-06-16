import userQuery from "./user/query"
import userMutation from "./user/mutation"

const resolver = {
    Query: {
        ...userQuery,
    },
    Mutation: {
        ...userMutation,
    }
}

export default resolver
