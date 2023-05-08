function add(num1,num2,callback){
    let err=false
    if(num1==0){
        err=true; 
    }
    callback(num1+num2,err);
}
function multiply(num1,num2,callback){
    
    callback(num1*num2);
}
function divide(num1,num2,callback){
    callback(num1/num2);
}
//callback hell
//callback is a function which is passed as an argument to another function and is invoked after some kind of event.

//    add(20,2,(result,err)=>{
//        if(err){
//            console.log("First number is zero");
        
//        }else{
//        console.log("sum is: "+result);
//
//            multiply(result,5,(product)=>{
//                console.log("product is: "+product);
//                divide(product,2,(result)=>{
//                    console.log("result is: "+result);
//                })
//            })        
//        }
//    })


//promise
const Promise=require('promise');



function add(num1,num2){
    return new Promise((resolve,reject)=>{
        if(num1==0){
            reject("First number is zero");
        }
        resolve(num1+num2);
        
    })
}
function multiply(num1,num2){
    return new Promise((resolve,reject)=>{
        if(num1==0){
            reject("First number is zero");
        }
        resolve(num1*num2);
    }
    )
}

function divide(num1,num2){
    return new Promise((resolve,reject)=>{
        if(num1==0){
            reject("First number is zero");
        }            
        resolve(num1/num2);
    }
    )
}
//promise chaining
add(10,2).then((sum)=>{
    console.log("sum is: "+sum)
    return multiply(sum,5)
}).then((product)=>{
    console.log("product is: "+product)
    return divide(product,2)
}).then((result)=>{
    console.log("result is: "+result)

}).catch((err)=>{
    console.log(err);
})
