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
        { name: "chg13", lat: 30.7133, lng: 76.7744, color: "olivegreen" },

        { name: "dhl1", lat: 28.7041, lng: 77.1025, color: "red" },
        //dwarka
        { name: "dwrk2", lat: 28.5921, lng: 77.0460, color: "red" },
        { name: "dwrk2", lat: 28.5321, lng: 77.0660, color: "red" },
        { name: "dwrk2", lat: 28.5441, lng: 77.0360, color: "olivegreen" },
        { name: "dwrk2", lat: 28.5326, lng: 77.0465, color: "red" },
        { name: "dwrk2", lat: 28.5527, lng: 77.0464, color: "red" },
        { name: "dwrk2", lat: 28.5229, lng: 77.0432, color: "olivegreen" },
        { name: "dwrk2", lat: 28.5179, lng: 77.0350, color: "orange" },
        { name: "dwrk2", lat: 28.5391, lng: 77.0481, color: "red" },
        { name: "dwrk2", lat: 28.5461, lng: 77.0668, color: "red" },

        //lonavla
        { name: "lonavala", lat: 18.7546, lng: 73.4062, color: "yellow" },
        { name: "lonavala", lat: 18.7512, lng: 73.4162, color: "yellow" },
        { name: "lonavala", lat: 18.7672, lng: 73.4232, color: "red" },
        { name: "lonavala", lat: 18.7931, lng: 73.4892, color: "olivegreen" },
        { name: "lonavala", lat: 18.7781, lng: 73.4211, color: "yellow" },
        { name: "lonavala", lat: 18.7842, lng: 73.4737, color: "yellow" },
        { name: "lonavala", lat: 18.7871, lng: 73.4821, color: "red" },
        { name: "lonavala", lat: 18.7895, lng: 73.4673, color: "yellow" },
        { name: "lonavala", lat: 18.7974, lng: 73.4289, color: "yellow" },

        //Chattishgarh
        { name: "chattishgarh", lat: 21.8974, lng: 83.3950, color: "olivegreen" },
        { name: "chattishgarh", lat: 21.1974, lng: 83.3362, color: "yellow" },
        { name: "chattishgarh", lat: 21.8264, lng: 83.3781, color: "olivegreen" },
        { name: "chattishgarh", lat: 21.8821, lng: 83.3565, color: "olivegreen" },
        { name: "chattishgarh", lat: 21.8342, lng: 83.3896, color: "olivegreen" },
        { name: "chattishgarh", lat: 21.8976, lng: 83.3367, color: "yellow" },
        { name: "chattishgarh", lat: 21.8674, lng: 83.3045, color: "olivegreen" },
        { name: "chattishgarh", lat: 21.8673, lng: 83.3231, color: "yellow" },
        { name: "chattishgarh", lat: 21.8564, lng: 83.3571, color: "olivegreen" },

        //India Center
        { name: "india", lat: 20.5937, lng: 78.9629, color: "olivegreen" },
        { name: "india", lat: 20.5673, lng: 78.9561, color: "yellow" },
        { name: "india", lat: 20.5212, lng: 78.9785, color: "red" },
        { name: "india", lat: 20.5983, lng: 78.9267, color: "olivegreen" },
        { name: "india", lat: 20.5564, lng: 78.9589, color: "lightgreen" },
        { name: "india", lat: 20.5898, lng: 78.9432, color: "red" },
        { name: "india", lat: 20.5215, lng: 78.9896, color: "olivegreen" },
        { name: "india", lat: 20.5126, lng: 78.9532, color: "yellow" },

        //Kerala
        { name: "kochi", lat: 9.9312, lng: 76.2213, color: "orange" },
        { name: "kochi", lat: 9.9367, lng: 76.2673, color: "red" },
        { name: "kochi", lat: 9.9543, lng: 76.2813, color: "lightgreen" },
        { name: "kochi", lat: 9.9722, lng: 76.2531, color: "orange" },
        { name: "kochi", lat: 9.9751, lng: 76.2143, color: "olivegreen" },
        { name: "kochi", lat: 9.9532, lng: 76.2625, color: "orange" },
        { name: "kochi", lat: 9.9734, lng: 76.2659, color: "yellow" },
        { name: "kochi", lat: 9.9924, lng: 76.2378, color: "yellow" },

        //goa
        { name: "goa", lat: 15.2993, lng: 74.1773, color: "orange" },
        { name: "goa", lat: 15.2493, lng: 74.1823, color: "orange" },
        { name: "goa", lat: 15.2597, lng: 74.1935, color: "red" },
        { name: "goa", lat: 15.2753, lng: 74.1538, color: "orange" },
        { name: "goa", lat: 15.2894, lng: 74.1892, color: "orange" },
        { name: "goa", lat: 15.2632, lng: 74.1512, color: "orange" },
        { name: "goa", lat: 15.2852, lng: 74.1892, color: "orange" },
        { name: "goa", lat: 15.2541, lng: 74.1845, color: "orange" },
        { name: "goa", lat: 15.2243, lng: 74.1925, color: "orange" },

        //Munnar
        { name: "munnar", lat: 10.0889, lng: 77.0595, color: "orange" },
        { name: "munnar", lat: 10.0834, lng: 77.0562, color: "lightgreen" },
        { name: "munnar", lat: 10.0783, lng: 77.0345, color: "lightgreen" },
        { name: "munnar", lat: 10.0235, lng: 77.0349, color: "orange" },
        { name: "munnar", lat: 10.0356, lng: 77.0902, color: "red" },
        { name: "munnar", lat: 10.0689, lng: 77.0564, color: "red" },
        { name: "munnar", lat: 10.0857, lng: 77.0126, color: "orange" },
        { name: "munnar", lat: 10.0785, lng: 77.0356, color: "lightgreen" },

        //Odisha
        { name: "bhubaneshwar", lat: 20.2961, lng: 85.8562, color: "lightgreen" },
        { name: "bhubaneshwar", lat: 20.2451, lng: 85.8925, color: "lightgreen" },
        { name: "bhubaneshwar", lat: 20.2926, lng: 85.8269, color: "lightgreen" },
        { name: "bhubaneshwar", lat: 20.2562, lng: 85.8824, color: "orange" },
        { name: "bhubaneshwar", lat: 20.2673, lng: 85.8903, color: "lightgreen" },
        { name: "bhubaneshwar", lat: 20.2652, lng: 85.8426, color: "lightgreen" },
        { name: "bhubaneshwar", lat: 20.2452, lng: 85.8851, color: "lightgreen" },


        //Gujrat
        { name: "gujrat", lat: 22.2587, lng: 71.1924, color: "lightgreen" },
        { name: "gujrat", lat: 22.2587, lng: 71.1924, color: "lightgreen" },
        { name: "gujrat", lat: 22.2587, lng: 71.1924, color: "yellow" },
        { name: "gujrat", lat: 22.2587, lng: 71.1924, color: "lightgreen" },
        { name: "gujrat", lat: 22.2587, lng: 71.1924, color: "lightgreen" },
        { name: "gujrat", lat: 22.2587, lng: 71.1924, color: "lightgreen" },
        { name: "gujrat", lat: 22.2587, lng: 71.1924, color: "lightgreen" },
        { name: "gujrat", lat: 22.2587, lng: 71.1924, color: "yellow" },

        //surat
        { name: "surat", lat: 21.1921, lng: 72.8460, color: "red" },
        { name: "surat", lat: 21.1321, lng: 72.8660, color: "red" },
        { name: "surat", lat: 21.1441, lng: 72.8360, color: "olivegreen" },
        { name: "surat", lat: 21.1326, lng: 72.8465, color: "red" },
        { name: "surat", lat: 21.1527, lng: 72.8464, color: "red" },
        { name: "surat", lat: 21.1229, lng: 72.8432, color: "olivegreen" },
        { name: "surat", lat: 21.1179, lng: 72.8350, color: "orange" },
        { name: "surat", lat: 21.1391, lng: 72.8481, color: "red" },
        { name: "surat", lat: 21.1461, lng: 72.8668, color: "red" },


        //Rajkot

        { name: "surat", lat: 22.3921, lng: 70.8460, color: "yellow" },
        { name: "surat", lat: 22.3321, lng: 70.8660, color: "yellow" },
        { name: "surat", lat: 22.3441, lng: 70.8360, color: "olivegreen" },
        { name: "surat", lat: 22.3326, lng: 70.8465, color: "yellow" },
        { name: "surat", lat: 22.3527, lng: 70.8464, color: "yellow" },
        { name: "surat", lat: 22.3229, lng: 70.8432, color: "olivegreen" },
        { name: "surat", lat: 22.3179, lng: 70.8350, color: "orange" },
        { name: "surat", lat: 22.3391, lng: 70.8481, color: "yellow" },
        { name: "surat", lat: 22.3461, lng: 70.8668, color: "yellow" },

        //Ahmedabad
        { name: "ahm", lat: 23.0546, lng: 72.5062, color: "yellow" },
        { name: "ahm", lat: 23.0512, lng: 72.5162, color: "yellow" },
        { name: "ahm", lat: 23.0672, lng: 72.5232, color: "red" },
        { name: "ahm", lat: 23.0931, lng: 72.5892, color: "olivegreen" },
        { name: "ahm", lat: 23.0781, lng: 72.5211, color: "yellow" },
        { name: "ahm", lat: 23.0842, lng: 72.5737, color: "yellow" },
        { name: "ahm", lat: 23.0871, lng: 72.5821, color: "red" },
        { name: "ahm", lat: 23.0895, lng: 72.5673, color: "yellow" },
        { name: "ahm", lat: 23.0974, lng: 72.5289, color: "yellow" },
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


router.get("/loadMapState", (req, res) => {
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
        //Gujrat
        { name: "gujrat", lat: 22.2587, lng: 71.1924, color: "lightgreen" },
        { name: "gujrat", lat: 22.2587, lng: 71.1924, color: "lightgreen" },
        { name: "gujrat", lat: 22.2587, lng: 71.1924, color: "yellow" },
        { name: "gujrat", lat: 22.2587, lng: 71.1924, color: "lightgreen" },
        { name: "gujrat", lat: 22.2587, lng: 71.1924, color: "lightgreen" },
        { name: "gujrat", lat: 22.2587, lng: 71.1924, color: "lightgreen" },
        { name: "gujrat", lat: 22.2587, lng: 71.1924, color: "lightgreen" },
        { name: "gujrat", lat: 22.2587, lng: 71.1924, color: "yellow" },

        //surat
        { name: "surat", lat: 21.1921, lng: 72.8460, color: "red" },
        { name: "surat", lat: 21.1321, lng: 72.8660, color: "red" },
        { name: "surat", lat: 21.1441, lng: 72.8360, color: "olivegreen" },
        { name: "surat", lat: 21.1326, lng: 72.8465, color: "red" },
        { name: "surat", lat: 21.1527, lng: 72.8464, color: "red" },
        { name: "surat", lat: 21.1229, lng: 72.8432, color: "olivegreen" },
        { name: "surat", lat: 21.1179, lng: 72.8350, color: "orange" },
        { name: "surat", lat: 21.1391, lng: 72.8481, color: "red" },
        { name: "surat", lat: 21.1461, lng: 72.8668, color: "red" },


        //Rajkot

        { name: "surat", lat: 22.3921, lng: 70.8460, color: "yellow" },
        { name: "surat", lat: 22.3321, lng: 70.8660, color: "yellow" },
        { name: "surat", lat: 22.3441, lng: 70.8360, color: "olivegreen" },
        { name: "surat", lat: 22.3326, lng: 70.8465, color: "yellow" },
        { name: "surat", lat: 22.3527, lng: 70.8464, color: "yellow" },
        { name: "surat", lat: 22.3229, lng: 70.8432, color: "olivegreen" },
        { name: "surat", lat: 22.3179, lng: 70.8350, color: "orange" },
        { name: "surat", lat: 22.3391, lng: 70.8481, color: "yellow" },
        { name: "surat", lat: 22.3461, lng: 70.8668, color: "yellow" },

        //Ahmedabad
        { name: "ahm", lat: 23.0546, lng: 72.5062, color: "yellow" },
        { name: "ahm", lat: 23.0512, lng: 72.5162, color: "yellow" },
        { name: "ahm", lat: 23.0672, lng: 72.5232, color: "red" },
        { name: "ahm", lat: 23.0931, lng: 72.5892, color: "olivegreen" },
        { name: "ahm", lat: 23.0781, lng: 72.5211, color: "yellow" },
        { name: "ahm", lat: 23.0842, lng: 72.5737, color: "yellow" },
        { name: "ahm", lat: 23.0871, lng: 72.5821, color: "red" },
        { name: "ahm", lat: 23.0895, lng: 72.5673, color: "yellow" },
        { name: "ahm", lat: 23.0974, lng: 72.5289, color: "yellow" },

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
    res.render("../views/gujrat", { mapData: mapData });
});
module.exports = router;