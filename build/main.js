"use strict";
var express = require('express');
var app = express();
var dotenv = require('dotenv');
dotenv.config();
console.log("Your port is " + process.env.PORT);
app.get('/:x/:y', function (req, res) {
    var numx = Number(req.params.x), numy = Number(req.params.y);
    var answer = numx + numy;
    var data = { answer: answer };
    res.json(data);
});
app.listen(process.env.PORT, function () {
    //   console.log(`Example app listening at http://localhost:${port}`)
});
