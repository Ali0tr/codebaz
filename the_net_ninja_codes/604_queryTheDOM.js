// get elemetn by id
const title = document.getElementById("page-title")
console.log(title);

// get element by class name
const errors = document.getElementsByClassName('error')
console.log(errors);
console.log(errors[1]);
// errors.forEach(el => {
//     console.log(el);
// });    // errors.forEach is not a function ....  it returns an htmlcollection.

// get element by tag name
const paras = getElementsByTagName('p')
console.log(paras);