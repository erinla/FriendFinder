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
        var userInput = req.body;

        var userResponse = userInput.friendScores;
        var match = {
            friendName: "",
            friendPhoto: "",
            difference: 500
        };

        for (var i = 0; i < friendData.length; i++) {
            var totalDifference = 0;
            for (var j = 0; j < userResponse.length; j++) {
                totalDifference += Math.abs(friendData[i].friendScores[j] - userResponse[j]);

                if (totalDifference <= match.difference) {
                    match.friendName = friendData[i].friendName;
                    match.friendPhoto = friendData[i].friendPhoto;
                    match.difference = totalDifference;
                }
            }
        }

        friendData.push(userInput);
        console.log(userInput)
        res.json(match);

    });
};
