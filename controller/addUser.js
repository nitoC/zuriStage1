
import getuserByName from '../utils/getuserByName.js';
import postuser from '../utils/postuser.js'

const addUser =async (req,res)=>{
  let exist;
  const {name, } = req.body;
  let result;
  try{
   exist = await getuserByName(name.trim());
   if(exist!="no such user"){
    console.log(exist)
    return res.json("Users exists try a unique name or add your full name to proceed")
   }
   result = await postuser(name.trim());
  }catch(err){
    console.log(err);
   return  res.status(500).json("oops! something went wrong")
  }
 return res.json({message:"success", status:201, data:result})
}
export default addUser;