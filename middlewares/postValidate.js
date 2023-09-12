import schema from "../model/postValidate.js";
const Validate = async (req, res, next) => {
  const { name } = req.body;

  let validName;

  if (isNaN(parseInt(name)) === false) {
    // check if name is a number
    validName = parseInt(name);
    return res.json({ status: 403, message: "name cannot be a number" });
  } else {
    validName = name;
  }

  let value;

  if (req.body) {
    try {
      value = await schema.validateAsync({ name: validName.trim() });
      console.log(value);
    } catch (err) {
      console.log(err);
      return res.status(500).json("invalid entry");
    }
    //if(value.err)
    next();
  }
};
export default Validate;
