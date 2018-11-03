var express = require("express");
var path = require("path");

module.exports = function(app) {
    //GET route to survey page
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
      });

    //Default route to home page
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    })

    //To use static CSS file
    app.use(express.static(path.join(__dirname, "./../public")));
}

