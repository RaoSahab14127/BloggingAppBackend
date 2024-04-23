import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
export const connection =  async() => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.2.4")
        console.log("connection succesfully")
    } catch (error) {
        console.log( ` there is some error in connection Error: ${error}`)
    }
   
}