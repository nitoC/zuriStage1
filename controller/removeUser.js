import removeuserById from '../utils/deleteuserById.js';
import removeuserByName from '../utils/deleteuserByName.js';

const removeUser = async (req,res)=>{
    const {param} = req.params;
    let result;
    try{
        if(typeof parseInt(param) === "number" && isNaN(parseInt(param))===false){// check is parameter is a number and not a NaN
      
       result = await removeuserById(param.trim().toLowerCase());
        }else{
           result = await removeuserByName(param.trim().toLowerCase());
        }
   console.log(result)
    }catch(err){
       console.log(err);
       return res.json("oops! and error occured")
    }
    if(typeof result === "string"){
         return  res.json(result);
    }else{
          return res.json({message:"success", status:204});
    }
}

export default removeUser;