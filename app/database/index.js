const { Sequelize } = require("sequelize");
const dotenv = require("dotenv");
dotenv.config();

class Database {
  static instance = null;

  constructor() {
    Database.instance = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
      host: process.env.HOST,
      dialect: process.env.DB_DIALECT,
    });
  }

  static getInstance() {
    if (Database.instance == null) {
      new Database();
    }
    return Database.instance;
  }
}

module.exports = Database;
