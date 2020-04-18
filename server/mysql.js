const mysql = require("mysql");

module.exports = mysql.createConnection({
	host: process.env.host || "localhost",
	user: process.env.user || "root",
	password: process.env.password || "",
});
