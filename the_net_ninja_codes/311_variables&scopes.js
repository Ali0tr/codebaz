// variables and scopes 
// global scope

let age = 40;

if(true){
    let age = 30 
    console.log(age) // prints 30 
    var name = 'ali'

    if(true){
        let age = 50;
        console.log(age) // prints 50
    }
}

console.log(age) // prints 40
console.log(name); // it will print ali ... because var keyword ignores scopes