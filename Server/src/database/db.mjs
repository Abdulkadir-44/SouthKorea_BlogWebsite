import { MongoClient } from "mongodb"
import dotenv from "dotenv"

let dbConnection;
dotenv.config()
const connectionString = process.env.DB_URL ;

export const connectToDb = (cb) => {
    MongoClient.connect(connectionString)
        .then(client => {
            dbConnection = client.db()
            return cb()
        }).catch(err => {
            console.log(err);
            return cb(err)
        })
}


export const getDb = () => dbConnection