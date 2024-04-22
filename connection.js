import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
export const connection =  async() => {
    try {
        await mongoose.connect("")
        console.log("connection succesfully")
    } catch (error) {
        console.log( ` there is some error in connection Error: ${error}`)
    }
   
}