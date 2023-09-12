import pg from "pg";
import dotenv from 'dotenv';
dotenv.config()

const pass = process.env.DBPASS2;

const pool = new pg.Pool({
  //connectionString: process.env.DBLINK,
  host:'localhost',
  user:'postgres',
  database:'hngbackend',
  port:process.env.DBPORT,
  password:pass,
 
})


export default pool;


/*const pass = process.env.DBPASS ;

const pool = new pg.Pool({
  connectionString: process.env.DBLINK,
  ssl: {
    rejectUnauthorized: false
}
 
})


export default pool;*/