//object literals are used to create objects

var Person={name:"sudeep",age:25,place:"Thrissur",
display:function(){console.log("Name is "+this.name+" age is "+this.age+" place is "+this.place+" dob is "+this.dob)}};
// this is used to refer the current object,here it is Person




for(i in Person){
    console.log(i+" : "+Person[i]);//i is the key and Person[i] is the value
}   


Person.name="sudu";//changing the value of name 

console.log(Person["name"]);//sudu because the value of name is changed 

Person.dob="05-03-1999"//adding new property and value,here dob is the property and 05-03-1999 is the value

Person.displayAge=function(){ //adding new function
    console.log(this.age)
}



//call function display
Person.display();


Person.displayAge();//25 can add new function to the object