// Dependencies
var express = require("express");
var bodyParser = require("body-parser");

// Create instance of express app.
var app = express();

// Set the port of our application
var PORT = process.env.PORT || 8080;

//Routes for API & HTML files
var apiRoutes = require("./routing/apiRoutes")(app);
var htmlRoutes = require("./routing/htmlRoutes")(app);

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Start the server so that it can begin listening to client requests.
app.listen(PORT, function () {

    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});