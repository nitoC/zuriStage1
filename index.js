import express from "express";
import dotenv from "dotenv";
import router from "./routes/index.js";
import bodyParser from "body-parser";
import createUserTable from "./model/userModel.js";

dotenv.config();
const Port = process.env.PORT||6000;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(router);

app.listen(Port, async()=>{
    console.log("listening to port " + Port)
    createUserTable();

})