//Add two numbers with argumnts and return value

var read=require("readline-sync")
num1=parseInt(read.question("enter a value 1: "))
num2=parseInt(read.question("enter a value 2: "))

function add(a,b){
    var e=a+b
    return e
}
console.log("sum is: "+add(num1,num2))




