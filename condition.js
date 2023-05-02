var read=require("readline-sync")

value1=read.question("enter a value 1: ")

value2=read.question("enter a value 2: ")

if(value1>value2){
    console.log("largest value is: "+value1)
}else if(value2>value1){
    console.log("largest value is: "+value2)
}else{
    console.log("both are equal")
}