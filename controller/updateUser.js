import updateuserByName from '../utils/updateuserByName.js';
import updateuserById from '../utils/updateuserById.js';

const updateUser = async (req,res)=>{
    const {param} = req.params;
    const {name} = req.body;
 let result;
 try{
     if(typeof parseInt(param) === "number" && isNaN(parseInt(param))===false){
        console.log(typeof parseInt(param));
        console.log(parseInt(param))
    result = await updateuserById(name.trim(), param.trim());
     }else{
        result = await updateuserByName(name.trim(), param.trim());
     }
console.log(result)
 }catch(err){
    console.log(err);
 }
 if(typeof result === "string"){
   res.json(result);
}else{
   res.json({message:"success", status:200});
}
}

export default updateUser;