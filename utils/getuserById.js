import pool from "../db/config.js";

const getuserById = async (param) => {
  let data;
  try {
    data = await pool.query(`SELECT * FROM users WHERE id = $1 `, [param]);
  } catch (err) {
    console.log(err);
  }
  console.log(data)
  if (data && data.rowCount > 0) {
    return data.rows[0];
  } else {
    return "no such user";
  }
}
export default getuserById;
