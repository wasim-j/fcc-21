const express = require('express');
const Timestamp = require('./Timestamp');
let app = express();

const cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));  // some legacy browsers choke on 204

app.use(express.static('public'));

app.get("/", (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

let api_route = "/api/timestamp/:date_string?";

app.get( api_route, (req, res) => {
  let timestamp = new Timestamp(req.params.date_string);
  timestamp.run();
  res.json({unix: timestamp.unix, utc: timestamp.utc});
});


var listener = app.listen(process.env.PORT, () => {
  console.log('Your app is listening on port ' + listener.address().port);
});