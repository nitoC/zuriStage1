import pool from "../db/config.js";

const updateuserByName = async (name, age, id)=>{
let result;
try{
    result = await pool.query(`UPDATE users SET name = $1, age = $2 WHERE name = $3`,[name,age,id])
}catch(err){
    console.log(err)
}
if(result.rowCount>0){
    return result.rows;
}else{
return "no such user";
}
}
export default updateuserByName;