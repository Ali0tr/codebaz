// so far we've learned how to run our code when a certain condition is true. but sometimes we need to check somthing and execute our code if that thing is NOT true.
// for example if someone's age in not more than 18, he is not eligible to drive car.

// we can wirte this condition by an excalmation mark (!) means NOT. 

let myAge = 15;

if(!myAge > 18){ // if myAge is NOT more than 18 
    console.log('you are not eligible to drive car')
}else{ // if it is more than 18
    console.log('you can drive car')
}

// these are the same
if(myAge < 18) {
    console.log('you are not eligible to drive car')
}else{
    console.log('you can drive car')
}


// 'myAge is not more than 18'  is logicaly equal to  'myAge is less than 18'