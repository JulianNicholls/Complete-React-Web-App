const express = require('express');
const path    = require('path');

// Create our app
const app   = express();
const PORT  = process.env.PORT || 3000;

app.use((req, resp, next) => {
  if(req.protocol === 'https') {
    resp.redirect('http://' + req.hostname + req.url)
  }
  else {
    next();
  }
});

app.use(express.static('public'));

app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, 'public', 'index.html'))
});

app.listen(PORT, _ => {
  console.log("Express loaded at port " + PORT);
});
