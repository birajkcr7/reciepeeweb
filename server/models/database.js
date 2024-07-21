const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI, {}).then(()=>{
    console.log("connected to db")
}).catch((error)=>{
    console.log(`db not connected ${error}`);
});


// models

// require('./category');