// Regular function 
const area = function (radius){
    return 3.14 * radius**2;
}


// Arrow function
const calcArea = (radius) => {
    return 3.14 * radius**2
}

const Area = radius => 3.14 * radius**2 // shorter

const greet = () => 'hello world'
console.log(greet());

const bill = (products , tax) => {
    let total = 0;
    for(let i=0 ; i< products.length ; i++){
        total += products[i] + products[i] * tax;
    }
    return total;
} 

console.log(bill([10,15,20] , 0.2))