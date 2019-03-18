var express = require("express");

var port = process.env.port || 8080;

var app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burger_controllers.js");

app.use(routes);

app.listen(port, function() {

  console.log("Server listening on: http://localhost:" + PORT);
});
