var num=10;//global variable

function hello(){
    var num=20;//local variable and can be accessed only inside the function
    function hey(){
        num=30;
    }
    hey()
    console.log(num)//30 because the local variable is changed
}
hello()

console.log(num)//10 because the global variable is not changed