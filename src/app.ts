import connectDB from "./infrastructure/persistance/mongo/db"
import {config} from "./infrastructure/config/environment"
import schema from "./infrastructure/api/graphql/schema"
import {ApolloServer} from 'apollo-server-express'
import express from "express"
import * as http from "http"

const server = new ApolloServer({schema})
server.start().then(async () => {
    const app = express()
    await connectDB()

    server.applyMiddleware({app})
    const httpServer = http.createServer(app)

    await new Promise(() => {
        httpServer.listen({port: config.port})
        console.log('Server started 🚀', `https://${config.host}:${config.port}${server.graphqlPath}`)
    })
})
