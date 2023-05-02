//object constructor is used to create objects

function Person(name,age,place){//constructor function ,here Person is the constructor function
    this.name=name; 
    this.age=age;
    this.place=place;
    this.display=function(){ //adding new function inside the constructor function
        console.log("Name is "+this.name+" age is "+this.age+" place is "+this.place+" dob is "+this.dob);
    }
}



var sudeep=new Person("sudeep",25,"Thrissur");//creating object
var ramu=new Person("ramu",26,"malappuram");
//add new property and value
sudeep.dob="05-03-1999";
ramu.dob="06-03-1999";

//add new function
sudeep.displayAge=function(){
    console.log(this.age);
}//can add new function to the object
sudeep.displayAge();//25



//call function display
sudeep.display();
ramu.display();

var num=10;
var num=new Number(10);//creating object using constructor function