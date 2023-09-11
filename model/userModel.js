import pool from "../db/config.js";

// Create the User table (if it doesn't exist)
const createUserTable = async () => {
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS users (
        id BIGSERIAL PRIMARY KEY,
        name VARCHAR(255) UNIQUE NOT NULL
      );
    `;
    try {
        let client = await pool.connect()
      await client.query(createTableQuery);
      console.log('User table created');
      client.release()
    } catch (error) {
      console.error('Error creating User table:', error);
    }
  };

  export default createUserTable;