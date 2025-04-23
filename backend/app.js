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

app.use((err, req, res, next) => {
    if (!config.IS_TESTING) console.error(err.stack);
    const status = err.status || 500;
    const message = err.message;
    return res.status(status).json({
        error: { message, status }
    })
})

module.exports = app