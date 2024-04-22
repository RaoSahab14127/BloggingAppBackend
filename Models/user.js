import { Schema, model } from "mongoose";

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

export default model("User", User);