var num=50

var num=70

console.log(num)

let num1=10 //let keyword is used to declare a variable,let is block scoped and it can't be redeclared
//can call inside the block only

//let num1=20 
//error
console.log(num1)

function hello(){
    var i=0
    let hoy=100

    if(i===0){
        
        var hey=20
        let hoy=30//let is block scoped,so it can't be called outside the block
        var i=200
    }
    console.log(hey)
    console.log(hoy)
    console.log(i)//var is function scoped,so it can be called outside the block

    function sample(){
        var i=300//it is a local variable
        
    }
    sample()
    console.log(i)
}

//console.log(hey)  error
hello()

