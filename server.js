var http=require('http');



var onRequestHandler=function(request,response){

    console.log("request recieved");
    response.writeHead(200,{'Content-Type':'text/html'});
    response.write("<h1>Hello World</h1>");
    
    response.end();

}




var server=http.createServer(onRequestHandler);
server.listen(4000);
console.log("listening on port 4000");
