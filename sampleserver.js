//you can change http files and see the changes in the browser without restarting the server

var http=require('http'); //http is a module which is used to create a server
var fs=require('fs');   //fs is a module which is used to read and write files
var url=require('url'); //url is a module which is used to parse the url

http.createServer(function(req,res){//callback function,here req and res are parameters
//req is a request from the client and res is a response from the server
//function(req,res) is a callback function to create a server
    var q=url.parse(req.url,true);//parse is used to parse the url
    //console.log(q.pathname);

    if(q.pathname=="/"){//pathname is used to get the path of the url
    

    fs.readFile("scientific.html",function(err,data){//callback function,here err and data are parameters
        res.writeHead(200,{'Content-Type':'text/html'});//200 is the status code,writeHead is used to write the header of the response
        res.write(data)
        res.end();
   
    });
    }else if(q.pathname==="/signup"){
    fs.readFile("signup.html",function(err,data){    
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        res.end();
    });    
    }else if(q.pathname==="/signupaction"){
     
    console.log(q.query);//query is used to get the query string
    console.log(q.query.email);    
    res.write("<h1>"+q.query.fname+"</h1>")
    res.end()


    }else{
    res.writeHead(404,{'Content-Type':'text/html'});
    res.write("error");
    res.end();
}
}).listen(3000,function(){
    console.log("server started");
});//listen is used to listen to a port,here 3000 is the port number







//function server(req,res){ , this is also correct
    
//    res.write("sudeep")
//    res.end();
//}