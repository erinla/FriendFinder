// ===============================================================================
// DATA
// Below data will hold all of the survery info from each friend.
// ===============================================================================

var friendsArray = [
    {
        friendName: "Cookie Monster",
        friendPhoto: "../images/cookiemonster.jpg",
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
        friendPhoto: "https://i.kym-cdn.com/entries/icons/original/000/017/823/maxresdefault.jpg",
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
        friendPhoto: "https://en.wikipedia.org/wiki/Animal_(Muppet)#/media/File:Animal_(Muppet).jpg",
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
        friendPhoto: "https://muppetmindset.files.wordpress.com/2012/10/63500-elmoquestion.jpg",
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
        friendPhoto: "images/bigbird.jpg",
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