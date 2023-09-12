import pool from "../db/config.js";

const updateuserById = async (name, id)=>{
let result;
try{
    result = await pool.query(`UPDATE users SET name = $1 WHERE id = $2`,[name,id])
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