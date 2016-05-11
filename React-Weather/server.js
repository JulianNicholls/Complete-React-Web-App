var express = require('express');

// Create our app
var   app   = express();
const PORT  = process.env.PORT || 3100;

app.use(function (req, resp, next) {
  if(req.headers['x-forwarded-proto'] === 'http') {
    next;
  }
  else {
    resp.redirect('http://' + req.hostname + req.url)
  }
});

app.use(express.static('public'));

app.listen(PORT, function () {
    console.log("Express loaded at port " + PORT);
})
