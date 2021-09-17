import { Sequelize } from "sequelize"
import { IIndexable } from "../../types"
import * as config from "../config/config.json"
const env: string = process.env.NODE_ENV || "development"

let envConfig: IIndexable = config
let sequelize: Sequelize

envConfig = envConfig[env]
sequelize = new Sequelize(envConfig.database, envConfig.username, envConfig.password, envConfig)

export default sequelize
