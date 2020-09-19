// Set up MySQL connection.
var mysql = require("mysql");

var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
connection = mysql.createConnection({
  host: 'sh4ob67ph9l80v61.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
  user: 'np4f50cx1ubm9gnb',
  password: 'wsfnkawwmslnr5wj',
  database: 'ccngwdg2l1ut7p3t'
});
}; 

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
