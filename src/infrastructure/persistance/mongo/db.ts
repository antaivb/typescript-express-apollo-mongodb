import { connect, set, connection } from 'mongoose'
import {config} from "../../config/environment"

const connectDB = async () => {
    try {
        if (!config.isProdEnv) {
            set('debug', true)
        }

        connect(
            process.env.MONGO_URI || '',
            {
                dbName: process.env.MONGO_DBNAME,
                user: process.env.MONGO_USER,
                pass: process.env.MONGO_PASSWORD
            },
            () => {
                console.log(`🔑 MongoDB Connected: ${connection.host} -  ${connection.db.databaseName}`)
            }
        )

    } catch (err) {
        console.error(err)
        process.exit(-1)
    }
}

export default connectDB
