
const express = require("express");
const fs = require("fs");
const mongoose = require('mongoose');
const { type } = require("os");



const app = express();
//connection:
mongoose.connect("mongodb://127.0.0.1:27017/tonify")
const { Schema } = mongoose;

const User = new Schema(
    {
        name:{
            type: String,
            required: true,
        },
        email:{
            type: String,
            required: true,
            unique: true
        },
        salt:{
            type: String
        },
        img_url:{
            type: String,
            default: "/images/default.png"
        },
        role: {
            type: String, 
            enum: ["User", "Admin"],
            default: "User",
        }
    }
)

mongoose.model("User", User);


// routes
app.get("/",(req, res)=>{
    res.send(`Hello`)
})



app.listen(8001, ()=> console.log("srever is up..."))