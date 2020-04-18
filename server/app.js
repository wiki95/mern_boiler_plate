const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("./cors");
const myError = require("./error");
const mysql = require("./mysql");

const productsRoute = require("./api/routes/products");

mysql.connect((err) => {
	if (err) console.log(err, err.message);
	else {
		console.log("connected to database");
	}
});

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors);

app.use("/products", productsRoute);

app.use(myError.createError);
app.use(myError.throwError);

module.exports = app;
