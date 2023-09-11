import pool from "../db/config.js";

const updateuserById = async (name, age, id)=>{
let result;
try{
    result = await pool.query(`UPDATE users SET name = $1, age = $2 WHERE id = $3`,[name,age,id])
}catch(err){
    console.log(err)
}
if(result.rowCount>0){
    return result.rows;
}else{
return "no such user";
}
}
export default updateuserById;