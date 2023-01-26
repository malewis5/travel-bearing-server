const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  var options = {
    root: path.join(__dirname),
  };

  var fileName = '/public/test.ics';
  res.sendFile(fileName, options, function (err) {
    if (err) {
      next(err);
    } else {
      console.log('Sent:', fileName);
    }
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
