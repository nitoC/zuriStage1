import pool from "../db/config.js";

const deleteUserById = async (param) => {
  let result;
  try {
    result = await pool.query(`DELETE FROM users WHERE id = $1`, [param]);
  } catch (err) {
    console.log(err);
  }
  if (result.rowCount > 0) {
    return result.rows;
  } else {
    return "no such user";
  }
};
export default deleteUserById;
