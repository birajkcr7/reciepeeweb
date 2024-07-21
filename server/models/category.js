const mongoose =require("mongoose");

const categorySchema = new mongoose.Schema({
    name :{
        type: String,
        require: "this is required."
    },

    image :{
        type: String,
        require: "this is required."
    }
});

const Category =  mongoose.model("Category", categorySchema);

module.exports= Category;