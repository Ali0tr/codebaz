// // Logical Operators
// // sometimes we need to check and santisfy more than one condition. instead of checking them seperatly we can do that in the same parateces and check them all at once. no need to write several if and else if statements

// // 1. Logical AND (&&)
// // both conditions must be true to run the code. the conclusion of the whole parantece depends on both conditions.
// let password = 'someTHING@strong';
// // a strong password is a one that is more than 12 char long and has an at sign inside.
// if(password.length > 12 && password.includes('@')){ // it check both conditions in the same time and they must be true to run the code
//     console.log('your password is strong enough');
// }else{ // if both of them are not true means even if one of them weren't true the whole coditions will be false
//     console.log('your password is weak')
// }

// // 2. Logical OR (||)
// // truthy of one of them is enough to whole condition be true.
// if(password.length < 12 || !password.includes('@')){
//     console.log('your password is weak')
// }else{
//     console.log('your password is strong enough')
// }

function check(a, x) {
 return isNaN(x) ? a.filter((el) => isNaN(el) && el !== undefined).some((el) => el.toLowerCase() === x.toLowerCase()) : a.some((el) => el === x);
}

console.log(
  check(
    [66, undefined, "codewars", 11, "alex loves pushups"],
    "alex loves pushups"
  )
);
