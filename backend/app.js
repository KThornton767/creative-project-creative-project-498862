const express = require("express");
const cors = require("cors");
const config = require("./db");
require("dotenv").config();
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", async (req, res, next)=>{
    return res.status(200).json({ping:"pong"})
})

app.use((req, res, next) => {
    return next(new NotFoundError())
})


module.exports = app