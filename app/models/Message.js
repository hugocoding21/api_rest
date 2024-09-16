const { DataTypes } = require("sequelize");
const Database = require("../database/index");
const { now } = require("sequelize/lib/utils");

const sequelize = Database.getInstance();

const Message = sequelize.define("Pretender", {
  msg_send: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  sender: { type: DataTypes.STRING, allowNull: false },
  receiver: { type: DataTypes.STRING, defaultValue: DataTypes.NOW },
});
console.log(Message === sequelize.model.Message);
Message.sync({ alter: true });
