function hello(num1=100,num2){//num1 is a default parameter
    console.log(num1+num2)
}

hello(undefined,20)//here we are not passing the value for num1,so it will take the default value
//undefined is a keyword which is used to declare a variable without assigning a value

hello(10,20)//here we are passing the value for num1,so it will take the passed value