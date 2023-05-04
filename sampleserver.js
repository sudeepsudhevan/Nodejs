//you can change http files and see the changes in the browser without restarting the server

var http=require('http'); //http is a module which is used to create a server
var fs=require('fs');   //fs is a module which is used to read and write files

http.createServer(function(req,res){//callback function,here req and res are parameters


    fs.readFile("scientific.html",function(err,data){//callback function,here err and data are parameters
        res.writeHead(200,{'Content-Type':'text/html'});//200 is the status code,writeHead is used to write the header of the response
        res.write(data)
        res.end();
    
    });
}).listen(3000);//listen is used to listen to a port,here 3000 is the port number







//function server(req,res){ , this is also correct
    
//    res.write("sudeep")
//    res.end();
//}