import express from "express";
import users from "../controller/users.js";
import user from "../controller/user.js";
import addUser from "../controller/addUser.js";
import updateUser from "../controller/updateUser.js";
import removeUser from "../controller/removeUser.js";
import postValidate from "../middlewares/postValidate.js";

const router = express.Router();

router.get("/api", users);
router.get("/api/:param", user);
router.get("/api/:param", user);
router.patch("/api/:param",postValidate, updateUser);
router.delete("/api/:param", removeUser);
router.post("/api", postValidate, addUser);
router.get("/",(req,res)=>{
  res.json("home")
})

export default router;
