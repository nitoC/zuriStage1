import express from "express";
import dotenv from "dotenv";
import router from "./routes";

dotenv.config();

const Port = process.environment.PORT||6000;

const app = express();

app.use(router);


app.listen(Port, ()=>{
    console.log("listening to port")
})