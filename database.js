import dotenv from "dotenv";
import mysql from "mysql2/promise";

dotenv.config();


export const database = mysql.createPool({
  host: process.env.DB_HOST, // address of the server
  port: process.env.DB_PORT || 3306, // port of the DB server (mysql), not to be confused with the APP_PORT !
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
});