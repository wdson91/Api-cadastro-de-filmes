require("dotenv").config()

import express from "express"
import config from "config"
import morganMiddleware from "./middleware/morganMiddleware";


var env = config.get("env");
const app = express()


app.use(morganMiddleware)
//JSON MIDDLEWARE
app.use(express.json())



//Import Db

import db from "../config/db"
//Routes

import router from "./router"

import Logger from "../config/logger"
app.use('/api/',router)
//app port


const port = config.get<number>("port")
app.listen(port,async()=>{

    await db()
    Logger.info(`App rodando na porta ${port}`)
})



