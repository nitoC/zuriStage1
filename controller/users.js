import pool from '../db/config.js';
import getUser from '../utils/getusers.js';

const Users = async (req,res)=>{
   let users;
    pool.on('error', (err, client) => {
        logger.error(`CONFIG: Unexpected error on idle client: ${err}`);
        process.exit(-1);
      });
      try{
        users = await getUser();
      }catch(err){
        console.log(err);
      }
 console.log("in users");
 res.json(users)
}

export default Users;