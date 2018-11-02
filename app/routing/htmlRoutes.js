var express = require("express");
var path = require("path");

module.exports = function (app) {
    //GET route to survey page
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "./../public/survey.html"));
    })

    //Default route to home page
    app.use(function (req, res) {
        res.sendFile(path.join(__dirname, "./..public/home.html"));
    })
}

