var dt=new Date()

console.log("hello")

for(i=0;i<100;i++){
    console.log("loop")
}

console.log("end")
var diff=new Date()-dt
console.log(diff)


function longtask(ms){
    dt=new Date()
    while((new Date()-dt)<=ms){
        //do nothing
        
    }
}

