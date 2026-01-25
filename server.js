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
app.get("/(:id)", function (req, res) {
  res.render("pad");
});

//get sharejs dependencies

sharejs = require("share");

var redisClient;
console.log(provess.env.REDISTOGO_URL);
if (process.env.REDISTOGO_URL) {
  var rtg = require("url").parse(process.env.REDISTOGO_URL);
  redisClient = require("redis").createClient(rtg.port, rtg.hostname);
  redisClient.auth(rtg.auth.split(":")[1]);
} else {
  redisClient = require("redis").createClient();
}

var options = {
  db: { type: "redis", client: redisClient },
};

// attach the express server to sharejs
sharejs.server.attach(app, options);

//listen to port 3000 (for localhost) or the port defined
var port = process.env.PORT || 3000;
app.listen(port);
