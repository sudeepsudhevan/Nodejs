//callback function
//callback function is a function which is passed as a parameter to another function
//callback function is used to do some task after the completion of another function



var hello=function(data){//callback function,here data is a parameter
    console.log("Data:"+data)
}

var hey=function(callback){//hey is a function which takes a function as a parameter
    callback("hey working")
}

hey(hello)//calling the function hey and passing the function hello as a parameter