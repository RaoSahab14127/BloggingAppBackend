import { Schema, model } from "mongoose";
const Blog = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        body:{
            type: String,
            required: true,
        },
        created_by:{
            type: Schema.Types.ObjectId,
            ref : "User"
        },
        coverimg:{
            type: String,
            default: "/images/cover.png"
        }
    }
)
export default model("Blog", Blog);