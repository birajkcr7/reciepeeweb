const express = require('express');
const router = express.Router();
const reciepeController = require("../controllers/reciepeController");

// app routess

router.get("/", reciepeController.homepage);

module.exports= router;