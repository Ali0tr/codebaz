// Math object

console.log(Math)
console.log(Math.PI);
console.log(Math.E);

const number = 5.3

console.log(Math.round(number)); // its gonna round the number. if the number is less than 5 it's gonna be rounded down to the first integer and if not it's gonna be rounded up to the first integer
console.log(Math.floor(number)); // no matter what the decimal number is. it's gonna be floored
console.log(Math.ceil(number)); // exactly opposit of floor. it's gonna be rounded up.
console.log(Math.trunc(number)); // it will take the decimal and return the integer.

// in the positive integers there is no difference between 'floor' and 'trunc'. but see the negetives.

const random = Math.random(); // a random number between 0 and 1

const random2 = Math.random() * 100 // a random number between 0 and 100;
console.log(Math.ceil(random2)); // because we use ceil so the random number will be between 1 and 100 includiv