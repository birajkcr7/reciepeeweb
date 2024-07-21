const express = require('express');
const router = express.Router();
const reciepeController = require("../controllers/reciepeController");

// app routess

router.get("/", reciepeController.homepage);
router.get("/categories", reciepeController.exploreCategories);
router.get("/recipe/:id", reciepeController.exploreRecipe);
router.get("/categories/:id", reciepeController.exploreCategoriesById);
router.get("index/:id", reciepeController.exploreCategoriesById);

module.exports= router;