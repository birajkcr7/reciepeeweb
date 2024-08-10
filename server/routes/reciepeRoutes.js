const express = require('express');
const router = express.Router();
const reciepeController = require("../controllers/reciepeController");

// app routess

router.get("/", reciepeController.homepage);
router.get("/categories", reciepeController.exploreCategories);
router.get("/recipe/:id", reciepeController.exploreRecipe);
router.get("/categories/:id", reciepeController.exploreCategoriesById);
// router.get("index/:id", reciepeController.exploreCategoriesById);
router.post("/search", reciepeController.searchRecipe);
router.get("/explore-latest", reciepeController.exploreLatest);
router.get("/explore-random", reciepeController.exploreRandom);
router.get("/submit-recipe", reciepeController.submitRecipe);
router.post("/submit-recipe", reciepeController.submitRecipeOnPost);

module.exports= router;