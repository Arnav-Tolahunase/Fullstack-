var fs=require('fs');
var filePath='./data/arnav.txt';

var onFileRead=function(err,data){
    if(err){
        console.log("Error reading file");
    }
    else{
        console.log("File read successfully");
        console.log(data.toString());
    }
}

fs.readFile(filePath,onFileRead);