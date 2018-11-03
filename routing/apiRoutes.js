var express = require("express");

var friendList = require("../data/friends.js");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friendList);

    })

    app.post("/api/friends"), function (req, res) {
        friendList.push(req.body);
        res.json(true)

    }
};

//I could not figure out the rest of the compatibility part 