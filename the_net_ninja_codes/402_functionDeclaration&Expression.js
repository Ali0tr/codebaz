// function declaration
function greet () {
    console.log('hello there')
}

// funciton expression
const speak = function (){ // when you decalre a variable and assign something to it, it is called expression 
    console.log('good days!')
}

speak()
speak()
speak()

greet()
greet()
greet()

// hoisting: you can call the function that is declared by function declaration even before its declaration. because javascript hoists the function and move it to top automatically.
// but in function expression we don't have such thing. we have to first decalre it and then call it.