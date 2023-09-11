import updateuserByName from '../utils/updateuserByName.js';
import updateuserById from '../utils/updateuserById.js';

const updateUser = async (req,res)=>{
    const {param} = req.params;
    const {name, age} = req.body;
 let result;
 try{
     if(typeof parseInt(param) === "number" && isNaN(parseInt(param))===false){
        console.log(typeof parseInt(param));
        console.log(parseInt(param))
    result = await updateuserById(name, age, param);
     }else{
        result = await updateuserByName(name, age, param);
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