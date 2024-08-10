const express = require("express");
const expressLayouts =require("express-ejs-layouts");
const fileUpload = require('express-fileupload');
const session = require('express-session');
const cookieParser= require("cookie-parser");
const flash = require("connect-flash");
const routes =require("./server/routes/reciepeRoutes.js");

const app= express();
const port = process.env.PORT || 8000;

require("dotenv").config();
require("./server/models/database.js");

app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(expressLayouts);

app.use(cookieParser('CookingBlogSecure'));
app.use(session({
    secret: 'CookingBlogSecure',
    saveUninitialized: true,
    resave: true
}));
app.use(flash());
app.use(fileUpload());


app.set("layout","./layouts/main");
app.set("view engine", "ejs");


app.use("/",routes);

app.listen(port,()=>{
    console.log(`Listening to port ${port}`)
})
