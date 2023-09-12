import pool from "../db/config.js";

const updateuserByName = async (name, id)=>{
let result;
try{
    result = await pool.query(`UPDATE users SET name = $1  WHERE name = $2`,[name,id])
}catch(err){
    console.log(err)
}
if(result.rowCount>0){
    console.log(result.rows)
    return result.rows;
}else{
return "no such user";
}
}
export default updateuserByName;