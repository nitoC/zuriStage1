import pool from "../db/config.js";

const getuserByName = async (param) => {
  let data;
  try {
    data = await pool.query(`SELECT * FROM users WHERE name = $1 `, [param]);
  } catch (err) {
    console.log(err);
  }
  if (data && data.rowCount > 0) {
    return data.rows[0];
  } else {
    return "no such user";
  }
};

export default getuserByName;
