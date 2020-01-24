var http = require('http');
var url = require('url');

http.createServer(function(req, res){
    var myQuery = url.parse(req.url, true);
    res.write(myQuery.href);
    res.end();
}).listen(5600);

