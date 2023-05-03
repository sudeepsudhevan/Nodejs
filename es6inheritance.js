class sample{
    samplehello(){
        console.log('This is samplehello method')
    }
}

class hello extends sample{//hello is a child class and sample is a parent class
    constructor(num1,num2){
        super()//super keyword is used to call the parent class constructor
        this.num1=num1
        this.num2=num2
    }
    add(){
        console.log(this.num1+this.num2)
    }
    hello(){
        console.log("hello")
    }
}
let hey=new hello(10,20)
hey.add()
hey.samplehello()