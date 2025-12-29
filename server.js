var express = require("express");
var app = express();

// set the view engine to ejs
app.set("view engine", "ejs");

//public forder to store assets
app.use(express.static(__dirname + "/public"));

// routes for app
app.get("/", function (req, res) {
  res.render("pad");
});

//listen to port 3000 (for localhost) or the port defined
var port = process.env.PORT || 3000;
app.listen(port);
