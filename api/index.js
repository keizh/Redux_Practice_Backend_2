require("dotenv").config();
const express = require(`express`);
const mongoose = require(`mongoose`);
const cors = require(`cors`);
const MovieRoutes = require("../Routes/MovieRoutes");
const dbConnect = require(`../db/dbConnect`);
dbConnect();

const app = express();

app.use(
  cors({
    origin: "*",
    methods: ["GET", "DELETE", "PUT", "PATCH", "POST"],
    allowedHeaders: ["Content-Type"],
    optionsSuccessStatus: 200,
  })
);

app.use(express.json());
app.use(`/api/v1`, MovieRoutes);

app.get("/work", (req, res) => res.status(200).json({ message: "worjing" }));

app.listen(process.env.PORT, () => console.log(`web server is online`));
