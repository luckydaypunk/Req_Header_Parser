// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get("/api/getmyinfo", function (req, res) {
  const ip = req.headers['x-forwarded-for'].split(',')[0];
  const lang = req.headers["accept-language"];
  const device = req.headers["user-agent"].substring(req.headers["user-agent"].indexOf("(")+1,req.headers["user-agent"].indexOf(")"));
  const header = JSON.stringify({
      "ipadress": ip,
      "language": lang,
      "browser": device
  });
  res.end(header);
});


// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
