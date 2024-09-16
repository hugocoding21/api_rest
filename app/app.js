const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const Database = require("./database/index");
const PretenderRoutes = require("./routes/pretender");

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    allowHeaders: ["content-type", "Authorization"],
  })
);

(async () => {
  try {
    await Database.getInstance();
    console.log("Database connected!");
  } catch (error) {
    console.error(error);
  }
})();
app.get("/", (req, res) => {
  res.json({ message: "marche" });
});

app.use("/api/pretender", PretenderRoutes);

module.exports = app;
