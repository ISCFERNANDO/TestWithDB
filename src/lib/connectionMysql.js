const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "luis",
  password: "luis123",
  database: "botanasplebes",
});

function query(sqlQuery, sqlData) {
  return new Promise(async (resolve, reject) => {
    connection.query(sqlQuery, (err, rows) => {
      if (err) {
        reject(err);
      }
      resolve(rows);
    });
  });
}

module.exports = {
    query
};
