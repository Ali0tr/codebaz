// else if statements 
 
const password = 'password'

if(password.length > 12){ // the first condition that will be checked
    console.log('your password is mighty strong')
}else if(password.length > 8){ // if the first one is not true then this will be checked
    console.log('your password is long enough');
}else{ // if none of our conditions weren't true then this code will be rendered
    console.log('password is not valid');
}