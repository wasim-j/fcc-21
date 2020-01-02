const express = require('express');
const Timestamp = require('./Timestamp');
let app = express();

const cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));  // some legacy browsers choke on 204

app.use(express.static('public'));

app.get("/", (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

// /api/timestamp/:date_string?
// /\/api\/timestamp\/.+/
// . matches any single character except line terminators
// + matches the preceding item x 1 or more times
app.get(/\/api\/timestamp\/.*/, (req, res) => {
  // () capturing group
  let input = /api\/timestamp\/(.*)/.exec(req.path)[1];
  let timestamp = new Timestamp(input);
  timestamp.run();
  res.json({unix: timestamp.unix, utc: timestamp.utc});
});


var listener = app.listen(process.env.PORT, () => {
  console.log('Your app is listening on port ' + listener.address().port);
});