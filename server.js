// Dependencies
var express = require("express");
var path = require("path");

// Create instance of express app.
var app = express();

// Set the port of our application
var PORT = process.env.PORT || 8080;

//Routes for API & HTML files
var apiRoutes = require("./app/routing/apiRoutes.js");
var htmlRoutes = require("./app/routing/htmlRoutes.js");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(" ", htmlRoutes);
app.use(" ", apiRoutes);

// Start the server so that it can begin listening to client requests.
app.listen(PORT, function () {

    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});