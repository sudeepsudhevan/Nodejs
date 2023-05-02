//add two numbers without arguments and no return value

function add() {
    var read = require("readline-sync");
    num1 = parseInt(read.question("enter a value 1: "));
    num2 = parseInt(read.question("enter a value 2: "));
    var e = num1 + num2
    console.log("sum is: " + e)
}
add()