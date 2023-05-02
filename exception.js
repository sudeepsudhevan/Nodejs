//try catch finally sample

try {
    console.log('try');//try block
    //here we can write the code that may cause error
    //if error occurs then the control will go to the catch block
    //if error not occurs then the control will go to the finally block
    throw new Error('error occured');//throw keyword is used to throw an error,for manually throwing an error
} catch (e) {
    //catch block will be executed only if the error occurs
    //can add multiple catch block
    
    console.log('catch');//catch block,here e is the error object
} finally {
    //finally block will be executed whether the error occurs or not
    console.log('finally');//finally block
}
