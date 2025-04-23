const express = require("express");
const router = express.Router();
const db = require("./db")

router.post("/login", async (req, res, next) => {
  try {
    const user = await db.login(req.body);
    return res.status(201).json({ user });
  } catch (err) {
    next(err);
  }
});

router.post("/register", async (req, res, next) => {
  try {
    const user = await db.addUser(req.body);
    return res.status(201).json({ user });
  } catch (err) {
    next(err);
  }
});

module.exports = router;