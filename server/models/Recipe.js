const mongoose =require("mongoose");

const recipeSchema = new mongoose.Schema({
    name :{
        type: String,
        required: "this is required."
    },

    description :{
        type: String,
        required: "this is required."
    },

    email :{
        type: String,
        required: "this is required."
    },

    ingredients :{
        type: Array,
        required: "this is required."
    },

    category :{
        type: String,
        enum: ['Thai', 'American', 'Chinese', 'Mexican', 'Indian'],
        required: "this is required."
    },

    image :{
        type: String,
        required: "this is required."
    },
});

recipeSchema.index({ name: "text", category : "text" });
// wildcard indexing
// recipeSchema.index({  });

const Recipe =  mongoose.model("Recipe", recipeSchema);

module.exports= Recipe;