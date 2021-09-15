import { Sequelize } from "sequelize/types"
import Users from "./db/models/user"

export interface IIndexable {
    [key: string]: any
}

export interface IDB {
    Users: typeof Users
    sequelize: Sequelize
    Sequelize: typeof Sequelize
}
