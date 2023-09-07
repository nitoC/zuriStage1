import express from "express";
 import dotenv from "dotenv";

const app = express();


app.listen(2000, ()=>{
    console.log("listening to port")
})