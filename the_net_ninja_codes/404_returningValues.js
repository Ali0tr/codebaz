// Return value

const calcArea = function (radius) {
    return 3.14 * radius**2; // so it's not gonna log anything anymore.instead it will return a value so it can be used later down on the code
}

console.log(calcArea(5)) // we can log it directly
 
const area = calcArea(10); // or we can store the returned value into another variable;
console.log(area) // and then log it