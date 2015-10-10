var fs = require('fs');
//var dir = process.argv[2];
//var ext = process.argv[3];
//var regexp = '/*.' + ext + '$';

//fs.readdir(dir, function(err, data) {
//  if (err) throw err
//  var results = [];
//  for (var file in data) {
//    if (data[file].match(regexp)) {
//      results.push(data[file]);
//      console.log(data[file]);
//    }
//  }
//})

module.exports = function(dir, ext, callback) {
  fs.readdir(dir, function(err, data) {
    if (err) return callback(err);
    var results = [];
    var regexp = '/*.' + ext + '$';
    for (var file in data) {
      if (data[file].match(regexp)) {
        results.push(data[file]);
      }
    }
    callback(null, results);
  });
};