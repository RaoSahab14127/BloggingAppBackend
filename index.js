import express from 'express';
import dotenv from 'dotenv';
import {connection} from './connectionjs'

const app = express();
dotenv.config();
const PORT = process.env.PORT


connection();



app.listen(PORT, ()=>{
    console.log(`server is up at server ${PORT}`)
})