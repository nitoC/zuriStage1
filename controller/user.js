import getuserById from "../utils/getuserById.js";
import getuserByName from "../utils/getuserByName.js";

const user = async(req, res)=>{
 const {param} = req.params;
 let result;
 try{
     if(typeof parseInt(param) === "number" && isNaN(parseInt(param))===false){
        console.log(typeof parseInt(param));
        console.log(parseInt(param))
    result = await getuserById(param.trim());
     }else{
        result = await getuserByName(param.trim());
     }
console.log(result)
 }catch(err){
    console.log(err);
 }
 if(result){
        res.json(result);
 }
}
export default user;