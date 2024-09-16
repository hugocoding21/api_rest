const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(cors());

app.get("/book", (req, res) => res.send("get book"));
app.post("/book", (req, res) => res.send("post book"));
app.put("/book/:id", (req, res) => res.send("put book"));
app.patch("/book/:id", (req, res) => res.send("patch book"));
app.delete("/book/:id", (req, res) => res.send("delete book"));

app.set("host", process.env.HOST);
app.set("port", process.env.PORT);

app.listen(app.get("port"), () => console.log(`Server listening on PORT ${app.get("port")}`));
