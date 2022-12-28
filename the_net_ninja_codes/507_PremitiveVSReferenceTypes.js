// primitive values  :  {numbers , strings , booleans , null , undefined , symbols} 
 
const numberOne = 40   // the vlaue will be saved in the space called 'stack'
const numberTwo = numberOne // it gets the value of the second one and assign it to itself. 

console.log(numberOne, numberTwo);  // 40 , 40 

numberOne = 50  // by changing the value of each of them the other won't change
console.log(numberOne, numberTwo);  // 50 , 40 



// reference values  :  all types of object {arrays , object literals , functions , dates , all other objects}

const userOne = ['ali' , 40]  // it takes some space in the memory called heap and save the value inside it. heap has more availabel memory. but slower 
const userTwo = userOne  // it will make a pointer and save the pointer in the stack. the pointer points to the heap where the actual array is stored in.
 // assigning one array to another means we make a copy from the first array and paste it to the another. so both of them are two pointer that point to the same space in the heap.
console.log(userOne, userTwo) // ['ali', 40]  ['ali' , 40]

userOne = ['reza' , 40]  // by changing one of them the other will be changed as well. because we change the value inside the heap and we don't change the pointers.
console.log(userOne, userTwo) // ['reza', 40]  ['reza' , 40]