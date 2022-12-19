// in the abstract comparison 25 is equal to '25'. it doesn't check the type of the variables.
// however the strict comparison checks either the amount of those variable or their types
// means that they are equal in amount and type

let myAge = 25;

// abstract comparison
console.log(myAge == 25); // true
console.log(myAge == '25'); // true ... it doesn't check their types
console.log(myAge != 25); // false
console.log(myAge != '25'); // false

// strict comparison 
console.log(myAge === 25); // true
console.log(myAge === '25'); // false ... it's taken into consideration both their amounts and types
console.log(myAge !== 25); // false
console.log(myAge === '25'); // false