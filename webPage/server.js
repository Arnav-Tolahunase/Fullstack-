var http=require('http');
var fs=require('fs');



var onRequestHandler=function(request,response){
    var filePath=("./pages/"+request.url);
    fs.readFile(filePath,(err,data)=>{
        if(err){
            console.log("Error reading file");
            response.writeHead(404,{'Content-Type':'text/html'});
            response.write("<h1>File Not Found</h1>");
            response.end();
        }
        else{
            console.log("File read successfully");
            response.writeHead(200,{'Content-Type':'text/html'});
            response.write(data.toString());
            response.end();
        }
    });

    console.log("request recieved");
    //response.writeHead(200,{'Content-Type':'text/html'});
    //response.write("<h1>Hello World!!@</h1>");
}

var server=http.createServer(onRequestHandler);
server.listen(9999);
console.log("listening on port 9999");

