import getuserByName from "../utils/getuserByName.js";
import postuser from "../utils/postuser.js";

const addUser = async (req, res) => {
  let exist;
  const { name } = req.body;
  let result;
  try {
    exist = await getuserByName(name.trim().toLowerCase());
    if (exist != "no such user") {
      return res.json(
        "User exists try a unique name or add your full name to proceed"
      );
    }
    result = await postuser(name.trim().toLowerCase());
  } catch (err) {
    console.log(err);
    return res.status(500).json("oops! something went wrong");
  }
  console.log(params)
  return res.json({ message: "success", status: 201, user_id: name.trim().toLowerCase() });
};
export default addUser;
