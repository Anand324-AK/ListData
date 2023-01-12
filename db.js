// import { Pool } from "pg";
const { Pool } = require("pg");

const pool = new Pool({
  host: "mel.db.elephantsql.com",
  port: 5432,
  user: "zlrandcy",
  password: "xg1MQ2FPBYIoHdlOeMg3mXT_aWls-x8D",
  database: "zlrandcy",
  ssl: false,
});

async function queryDatabase() {
  try {
    pool
      .connect()
      .then((conn) => {
        console.log("DB connected");
        conn.release();
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (err) {
    console.log("Error1", err.stack);
  }
}

queryDatabase();

module.exports.ConnectToDb = async () => {
  return new Promise((resolve, reject) => {
    pool.connect(async (err, conn) => {
      err ? reject(err) : resolve(conn);
    });
  });
};

module.exports.ExecuteQuery = async (conn, queryString) => {
  return new Promise((resolve, reject) => {
    conn.query(queryString, (err, data) => {
      err ? reject(err) : resolve(data.rows);
    });
  });
};
