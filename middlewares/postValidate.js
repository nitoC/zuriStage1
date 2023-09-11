import schema  from "../utils/postValidate.js";
 const Validate = async (req,res,next)=>{
 const {name,age} = req.body;

 let value;

if(req.body){
    console.log(name.length)
    console.log(name.trim().length)

    console.log(name.trim(), age.trim())
    try {
         value = await schema.validateAsync({name: name.trim(), age:age.trim() });
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