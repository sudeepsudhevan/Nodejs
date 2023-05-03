class hello{
    constructor(num1,num2){
        //constructor is a method which is used to initialize the values and it will be called automatically when the object is created
        this.num1=num1
        this.num2=num2
    }
    add(){ //add is a method
        console.log(this.num1+this.num2)
    }
    hello(){ //hello is a method
        console.log("hello")
    }
}

let hey=new hello(10,20)//hey is an object created for hello class
hey.add()
hey.hello()