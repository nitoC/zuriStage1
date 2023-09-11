import pool from "../db/config.js";

const postuser = async (name)=>{
let result;
try{
    result = await pool.query(`INSERT INTO users(name) VALUES($1)`,[name])
}catch(err){
    console.log(err,"postuser")
    result.json("oops something happened")
}
return result
}
export default postuser;