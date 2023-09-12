import pool from '../db/config.js';
const getUser = async ()=>{
    let user;
try{
    user = await pool.query("SELECT * FROM users");
}catch(err){
    if(err)console.log(err);
}
if(user.rowCount>0){
    return user.rows;
}else{
return null;
}
}
export default getUser;