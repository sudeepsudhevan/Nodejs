function add(num1,num2,callback){
    let err=false
    if(num1==0){
        err=true; 
    }
    callback(num1+num2,err);
}

add(0,2,(result,err)=>{
    if(err){
        console.log("First number is zero");
       
    }else{
    console.log(result);}
})