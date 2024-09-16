const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    allowHeaders: ["content-type", "Authorization"],
  })
);

app.get("/book", (req, res) => res.status(200).send("get book"));
app.post("/book", (req, res) => res.status(200).send("post book"));
app.put("/book/:id", (req, res) => res.status(404).send("put book"));
app.patch("/book/:id", (req, res) => res.status(404).send("patch book"));
app.delete("/book/:id", (req, res) => res.status(404).send("delete book"));

app.set("host", process.env.HOST);
app.set("port", process.env.PORT);

app.listen(app.get("port"), () => console.log(`Server listening on PORT ${app.get("port")}`));
