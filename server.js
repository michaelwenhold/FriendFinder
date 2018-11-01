// Dependencies
var express = require("express");
var path = require("path");

// Create instance of express app.
var app = express();

// Set the port of our application
var PORT = process.env.PORT;

//Routes for API & HTML
require("./app/routing/apiRoutes.js");
require("./app/routing/htmlRoutes.js");

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {

    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});