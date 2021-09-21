import express from "express"
import define from "./define/"

const app: express.Application = express()
define(app)

export default app
