// boolean and comparisons
console.log(true, false, 'true' , 'false')

let email = 'm.a.rajaee115369@gmail.com'
let names = ['aminah','mojtaba','zahra']


let ifEmailHasAtSign = email.includes('@')
let doWeHaveAminaHere = names.includes('aminah')

// comparison operators

let myAge = 21; //one equal means that we wanna set a value to a variable

// '==' sign is called abstract equality 
console.log(myAge == 21) // is equal: two equals means that we are comparing two arguements with each other and checking if these arguements are equal
console.log(myAge != 21) // is not equal: if we replace the first equal with '!' it means that we are checking if these two variable are not equal right in contrast with the abow
console.log(myAge > 25); // is more than: checks if my variable is more than 25 or not
console.log(myAge < 25); // is less than 
console.log(myAge <= 25); // is less than or equal to 
console.log(myAge >= 25); // is more than or equal to

let name = 'mohammad'
console.log(name == "mohammad");
console.log(name > "ali"); // it compares actually the letters based on alphabet ... later letter in the alphabet is greater than earlier letter 
console.log(name > "Mohammad"); // lowercase letters are greater than uppercase letters  
