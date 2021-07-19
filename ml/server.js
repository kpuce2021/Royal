var http = require('http');
var fs = require('fs');
var hostname = '192.168.33.1'
var app = http.createServer(function(request,response){
    var url = request.url;

    if(request.url == '/'){
      url = '/index.html';

    }
    if(request.url == './my_model/'){
      return response.writeHead(404);

    }
    response.writeHead(200);
    response.end(fs.readFileSync(__dirname + url));
 
});
app.listen(3030,()=>{console.log('server running')});