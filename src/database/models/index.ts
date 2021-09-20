import { Sequelize } from "sequelize"
import Users from "../models/user"
import sequelize from "./connect"

import { IDB } from "../../types"

const db: IDB = {
    sequelize,
    Sequelize,
    Users,
}

// db.Users.belongsTo(db.Servers, { onDelete: "CASCADE", onUpdate: "CASCADE" })

export default db
