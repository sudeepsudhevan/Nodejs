//add two numbers without arguments and with return value
function add() {
    var read = require("readline-sync");
    num1 = parseInt(read.question("enter two values: "));
    num2 = parseInt(read.question(""));
    var e = num1 + num2
    return e
}
sum=add()   
console.log("sum is: " + sum)