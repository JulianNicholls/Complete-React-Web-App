var express = require('express');

// Create out app
var app = express();

app.use(express.static('public'));

app.listen(3100, function () {
    console.log("Express loaded at port 3100");
})
