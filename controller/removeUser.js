import removeuserById from '../utils/deleteuserById.js';
import removeuserByName from '../utils/deleteuserByName.js';

const removeUser = async (req,res)=>{
    const {param} = req.params;
    let result;
    try{
        if(typeof parseInt(param) === "number" && isNaN(parseInt(param))===false){
           console.log(typeof parseInt(param));
           console.log(parseInt(param))
       result = await removeuserById(param.trim());
        }else{
           result = await removeuserByName(param.trim());
        }
   console.log(result)
    }catch(err){
       console.log(err);
       return res.json("oops! and error occured")
    }
    if(typeof result === "string"){
         return  res.json(result);
    }else{
          return res.json({message:"success", status:202});
    }
}

export default removeUser;