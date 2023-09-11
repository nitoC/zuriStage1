import schema  from "../model/postValidate.js";
 const Validate = async (req,res,next)=>{
 const {name} = req.body;

 let validName;

 console.log(isNaN(parseInt(name))=== true)
 if(isNaN(parseInt(name)) === false){
    validName = parseInt(name);
    return res.json({status: 403, message:"name cannot be a number"})
 }else{
    validName = name;
 }

 let value;

if(req.body){
    console.log(validName.length)
    console.log(validName.trim().length)

    console.log(validName.trim())
    try {
         value = await schema.validateAsync({name: validName.trim()});
         console.log(value)
    }
    catch (err) {
        console.log(err)
        return res.status(500).json("invalid entry");
     }
     //if(value.err)
    next();
 

}
}
export default Validate;