"use strict";
exports.__esModule = true;
var express = require("express");
function runServer() {
    var app = express();
    var PORT = 8080;
    app.get('/', function (req, res) {
        res.end('success');
    });
    app.listen(PORT, function () {
        console.log("http://localhost:".concat(PORT));
    });
}
runServer();
