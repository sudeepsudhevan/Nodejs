//add two numbers with arguments and no return value
var read = require("readline-sync");
num1 = parseInt(read.question("enter a value 1: "));
num2 = parseInt(read.question("enter a value 2: "));

function add(a, b) {
    var e = a + b
    console.log("sum is: " + e)
}
add(num1, num2)
