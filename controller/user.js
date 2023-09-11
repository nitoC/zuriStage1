import getuserById from "../utils/getuserById.js";
import getuserByName from "../utils/getuserByName.js";

const user = async(req, res)=>{
 const {param} = req.params;
 let result;
 try{
     if(typeof parseInt(param) === "number" && isNaN(parseInt(param))===false){// checks if parameter is a number but not a NaN
        console.log(typeof parseInt(param));
        console.log(parseInt(param))
    result = await getuserById(param.trim().toLowerCase());
     }else{
        result = await getuserByName(param.trim().toLowerCase());
     }
console.log(result)
 }catch(err){
    console.log(err);
 }
 if(result){
        res.json({message:"success", status:200, payload:result  });
 }
}
export default user;