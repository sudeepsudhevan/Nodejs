
const express = require('express');

const path=require('path');

const app = express();

app.use(function(req,res,next){//use is a method to use a middleware
    console.log("start");
    next();//next is used to call the next middleware
})

app.get('/', function (req, res) {//get is a method to get the request from the client
    res.sendFile(path.join(__dirname + "/scientific.html"));
    
});

app.get('/signup', function (req, res,next) {
    res.sendFile(path.join(__dirname + "/signup.html"));//__dirname is used to get the current directory
    console.log("middle");
    next();
});//path.join is used to join the path

app.use(function(req,res){
    console.log("end");
    
    
})
//send a response to the client


app.post('/signup', function (req, res) {
    // console.log("signup action");
    res.send("account created");

});


app.listen(3000, function () {
    console.log(__dirname)
    console.log("server started");
});
