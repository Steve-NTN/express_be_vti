const express = require("express");
const bodyParser = require('body-parser');
var path = require("path");
const app = express();
const port = 8080;

app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", (req, res) => {
  res.render("index");
});

const accountRoute = require("./routes/account");
const departmentRoute = require("./routes/department");
const positionRoute = require("./routes/position");

app.use("/accounts", accountRoute);
app.use("/departments", departmentRoute);
app.use("/positions", positionRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});