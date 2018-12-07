var express = require('express');
var router = express.Router();
const async = require('async');
var fetch = require("../my_modules/fetch");
var url_get = require("../my_modules/mapcords");

router.get("/loadMap", (req, res) => {
    timer = 0;
    //candidate_id,map_type

    //api?candidate_id
    //Result users rating for that candidate in map(state/national)
    /*
     data = [
    {lat: 31.3260, lng: 75.5762, color: "olivegreen" },
    {lat: 31.3160, lng: 75.5662, color: "red" },
    {lat: 31.3050, lng: 75.5752, color: "orange" },
    {lat: 31.3620, lng: 75.5763, color: "yellow" },
    {lat: 31.3240, lng: 75.5764, color: "lightgreen" }
     ]
    
    */
    data = [
        { name: "jal1", lat: 31.3260, lng: 75.5762, color: "olivegreen" },
        { name: "jal2", lat: 31.3160, lng: 75.5662, color: "red" },
        { name: "jal3", lat: 31.3050, lng: 75.5752, color: "orange" },
        { name: "jal4", lat: 31.3620, lng: 75.5763, color: "yellow" },
        { name: "jal5", lat: 31.3240, lng: 75.5764, color: "olivegreen" },
        { name: "jal6", lat: 31.3450, lng: 75.5772, color: "red" },
        { name: "jal7", lat: 31.3264, lng: 75.5462, color: "yellow" },
        { name: "jal8", lat: 31.3263, lng: 75.5662, color: "lightgreen" },
        { name: "jal9", lat: 31.3662, lng: 75.5782, color: "red" },
        { name: "jal10", lat: 31.3261, lng: 75.5763, color: "yellow" },
        { name: "jal11", lat: 31.3467, lng: 75.5767, color: "red" },
        { name: "jal12", lat: 31.3368, lng: 75.5742, color: "lightgreen" },
        { name: "jal13", lat: 31.3249, lng: 75.5782, color: "red" },
        { name: "amr1", lat: 31.6320, lng: 74.8723, color: "olivegreen" },
        { name: "amr2", lat: 31.6140, lng: 74.8627, color: "yellow" },
        { name: "amr3", lat: 31.6440, lng: 74.8823, color: "red" },
        { name: "amr4", lat: 31.6350, lng: 74.8228, color: "lightgreen" },
        { name: "amr5", lat: 31.6344, lng: 74.8423, color: "red" },
        { name: "amr6", lat: 31.6346, lng: 74.8927, color: "olivegreen" },
        { name: "amr7", lat: 31.6348, lng: 74.8123, color: "yellow" },
        { name: "amr8", lat: 31.6330, lng: 74.8263, color: "orange" },
        { name: "amr9", lat: 31.6320, lng: 74.8423, color: "lightgreen" },
        { name: "amr10", lat: 31.6214, lng: 74.8543, color: "yellow" },
        { name: "amr11", lat: 31.6125, lng: 74.8723, color: "red" },
        { name: "amr12", lat: 31.6326, lng: 74.8223, color: "lightgreen" },
        { name: "amr13", lat: 31.6315, lng: 74.8733, color: "orange" },
        { name: "amr14", lat: 31.6325, lng: 74.8313, color: "lightgreen" },
        { name: "amr15", lat: 31.6347, lng: 74.8743, color: "red" },
        { name: "chg1", lat: 30.74377, lng: 76.7294, color: "olivegreen" },
        { name: "chg2", lat: 30.7324, lng: 76.7724, color: "red" },
        { name: "chg3", lat: 30.7132, lng: 76.7744, color: "yellow" },
        { name: "chg4", lat: 30.7332, lng: 76.7756, color: "orange" },
        { name: "chg5", lat: 30.7321, lng: 76.7714, color: "red" },
        { name: "chg6", lat: 30.7347, lng: 76.7735, color: "lightgreen" },
        { name: "chg7", lat: 30.7353, lng: 76.7744, color: "yellow" },
        { name: "chg8", lat: 30.7335, lng: 76.7753, color: "olivegreen" },
        { name: "chg9", lat: 30.7312, lng: 76.7774, color: "orange" },
        { name: "chg10", lat: 30.7213, lng: 76.7394, color: "yellow" },
        { name: "chg11", lat: 30.7453, lng: 76.7891, color: "lightgreen" },
        { name: "chg12", lat: 30.7523, lng: 76.7722, color: "yellow" },
        { name: "chg13", lat: 30.7133, lng: 76.7744, color: "olivegreen" }
    ];

    // s = data.map(e => ({ lat: e.lat, lng: e.lng }));
    // console.log("data", s);
    var filterRed = data.filter(function (itm) {
        return itm.color == "red";
    });
    var filterOliveGreen = data.filter(function (itm) {
        return itm.color == "olivegreen";
    });
    var filterLightGreen = data.filter(function (itm) {
        return itm.color == "lightgreen";
    });
    var filterYellow = data.filter(function (itm) {
        return itm.color == "yellow";
    });
    var filterOrange = data.filter(function (itm) {
        return itm.color == "orange";
    });
    const mapData = {
        filterRed: filterRed.map(e => ({ lat: e.lat, lng: e.lng })),
        filterOliveGreen: filterOliveGreen.map(e => ({ lat: e.lat, lng: e.lng })),
        filterLightGreen: filterLightGreen.map(e => ({ lat: e.lat, lng: e.lng })),
        filterYellow: filterYellow.map(e => ({ lat: e.lat, lng: e.lng })),
        filterOrange: filterOrange.map(e => ({ lat: e.lat, lng: e.lng }))
    }
    console.log(mapData);
    // console.log("REs ", filterRed);
    res.render("../views/googleBuild", { mapData: mapData });
});
module.exports = router;