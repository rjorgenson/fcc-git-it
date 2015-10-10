var http = require('http');
var url = process.argv[2];
var data = "";
http.get(url, function(res) {
    res.on('data', function(d) {
        //console.log(d.toString());
        data += d.toString();
    });
    res.on('end', function(){
       console.log(data.length);
       console.log(data);
    });
});