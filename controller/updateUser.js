import updateuserByName from "../utils/updateuserByName.js";
import updateuserById from "../utils/updateuserById.js";

const updateUser = async (req, res) => {
  const { param } = req.params;
  const { name } = req.body;
  let result;
  try {
    if (
      typeof parseInt(param) === "number" &&
      isNaN(parseInt(param)) === false
    ) {
      // checks if parameter is number and not a NaN

      result = await updateuserById(
        name.trim().toLowerCase(),
        param.trim().toLowerCase()
      );
    } else {
      result = await updateuserByName(
        name.trim().toLowerCase(),
        param.trim().toLowerCase()
      );
    }
    console.log(result);
  } catch (err) {
    console.log(err);
  }
  if (typeof result === "string") {
    res.json(result);
  } else {
    res.json({ message: "success", status: 204 });
  }
};

export default updateUser;
