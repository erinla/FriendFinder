// ===============================================================================
// LOAD DATA
// ===============================================================================

var friendData = require("../app/data/friends");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friendData);
    });


    app.post("/api/friends", function (req, res) {
        // console.log(req.body)
        var newObject = {
            friendName: req.body.name,
            friendPhoto: req.body.photo,
            friendScores: req.body.scores
        }

        var bestMatch = friendData[Math.floor(Math.random() * friendData.length)];

        res.json({ user: bestMatch })

        friendData.push(newObject);

    });

};
