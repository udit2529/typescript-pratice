"use strict";
exports.__esModule = true;
exports.router = void 0;
var express_1 = require("express");
var router = express_1["default"].Router();
exports.router = router;
router.get("/home", function (req, res) {
    var obj = {
        x: 12,
        y: 13
    };
    var data = sumData(obj);
    res.json({
        message: "home page", data: data
    });
});
var sumData = function (ob) {
    return ob.x + ob.y;
};
router.get("/about", function (req, res) {
    res.json({
        message: "home page"
    });
});
