const { Sequelize } = require("sequelize");
const dotenv = require("dotenv");
dotenv.config();

class Database {
  constructor() {
    this.instance = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
      host: process.env.HOST,
      dialect: process.env.DB_DIALECT,
    });
  }

  static async getInstance() {
    if (!this.instance) {
      Database.instance = new Database().instance;
    }
    try {
      await Database.instance.authenticate();
      return Database.instance;
    } catch (error) {
      console.error(error);
    }
  }
}

Database.getInstance();

module.exports = Database;
