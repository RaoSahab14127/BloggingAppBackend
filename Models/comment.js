import { Schema, model } from "mongoose";

const Comment = new Schema({
    blogid: {
        type: Schema.Types.ObjectId,
        ref: "Blog"
    },
    createdby: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    content:{
        type: String,
        required: true
    }
})

export default model("Comment", Comment)