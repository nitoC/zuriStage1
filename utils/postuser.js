import pool from "../db/config.js";

const postuser = async (name, age)=>{
let result;
try{
    result = await pool.query(`INSERT INTO users(name, age) VALUES($1,$2)`,[name,age])
}catch(err){
    console.log(err,"postuser")
}
return result
}
export default postuser;