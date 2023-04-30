"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
function connects() {
    return (0, mongoose_1.connect)("mongodb://0.0.0.0:27017/local")
        .then(function () {
        console.log("server connected");
    })["catch"](function (err) {
        console.log(err);
    });
}
exports["default"] = connects;
