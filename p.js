var module = require('./m.js');

module(process.argv[2], process.argv[3], function(err, data) {
  if (err) throw err;
  data.forEach(function(e, i, a) {
    console.log(e);
  });
});