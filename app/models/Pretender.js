const { DataTypes } = require("sequelize");
const Database = require("../database/index");

const sequelize = Database.getInstance();

const Pretender = sequelize.define("Pretender", {
  firstname: { type: DataTypes.STRING },
  lastname: { type: DataTypes.STRING },
  email: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
  birthdate: { type: DataTypes.DATE },
  gender: { type: DataTypes.ENUM, values: ["M", "F"] },
  wallet: { type: DataTypes.FLOAT, default: 0 },
});
// console.log(Pretender === sequelize.models.Pretender);
// Pretender.sync({ alter: true });
module.exports = Pretender;
