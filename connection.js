import mongoose from 'mongoose'
export const connection =  async() => {
    try {
        await mongoose.connect("")
        console.log("connection succesfully")
    } catch (error) {
        console.log( ` there is some error in connection Error: ${error}`)
    }
   
}