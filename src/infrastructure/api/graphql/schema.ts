import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader"
import { makeExecutableSchema } from '@graphql-tools/schema'
import { loadSchemaSync } from "@graphql-tools/load"
import {GraphQLSchema} from "graphql"
import resolver from "./resolver"

const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs: loadSchemaSync('src/infrastructure/api/graphql/typedef/*.graphql', {
    loaders: [new GraphQLFileLoader()],
  }),
  resolvers: resolver
})

export default schema