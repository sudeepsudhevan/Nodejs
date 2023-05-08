const Promise=require('promise');

function getName(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("sachin");
        },3000)
        
    })
}

function getMobile(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("8289840696");
        },2000)
        
    })
}

Promise.all([getName(),getMobile()]).then((result)=>{
    console.log(result);
})

