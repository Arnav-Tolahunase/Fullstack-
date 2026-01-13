var fs=require('fs');
var data="This is written by write.js file";
var filePath='./data/likho.txt';

var onFileWrite=function(err){
    if(err){
        console.log("Error writing file");
    }
    else{
        console.log("File written successfully");
    }
}

fs.writeFile(filePath,data,onFileWrite);