import { DataTypes, Model } from "sequelize"
import sequelize from "./connect"

class Users extends Model { }

Users.init({
  firstName: DataTypes.STRING,
  lastName: DataTypes.STRING,
  email: DataTypes.STRING,
}, {
  modelName: "Users",
  sequelize,
})

export default Users
