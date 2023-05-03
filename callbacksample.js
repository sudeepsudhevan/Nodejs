

function longtask(ms){//it is a sample function
    dt=new Date()
    while((new Date()-dt)<=ms){
        //do nothing still the time is less than and equal to ms

    }
}

function showEnd(){//showEnd is a callback function
    console.log("end")
}

console.log("started")
setTimeout(showEnd,2000)//setTimeout is a function which takes two arguments,first one is a function and second one is time in milliseconds


console.log("started")
setTimeout(showEnd,2000)


console.log("started")
setTimeout(showEnd,2000)

