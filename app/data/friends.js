// ===============================================================================
// DATA
// Below data will hold all of the survery info from each friend.
// ===============================================================================

var friendsArray = [
    {
        friendName: "Cookie Monster",
        friendPhoto: "./images/cookiemonster.jpg",
        friendScores: [
            5,
            4,
            3,
            2,
            1
        ],
    },
    {
        friendName: "Kermit",
        friendPhoto: "./images/kermit.jpg",
        friendScores: [
            1,
            5,
            4,
            3,
            2
        ],
    },
    {
        friendName: "Animal",
        friendPhoto: "./images/animal.jpg",
        friendScores: [
            5,
            5,
            5,
            5,
            5
        ],
    },
    {
        friendName: "Elmo",
        friendPhoto: "./images/elmo.jpg",
        friendScores: [
            5,
            3,
            3,
            5,
            1
        ],
    },
    {
        friendName: "Big Bird",
        friendPhoto: "./images/bigbird.jpg",
        friendScores: [
            1,
            4,
            2,
            4,
            5
        ],
    },
];


// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsArray;