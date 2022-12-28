let user = {
    name: 'ali',
    age: 21,
    email: 'muali@gamil.com',
    location: 'hell',
    blogs : ['why mac & chees rules','10 things to make with marmite']
}

console.log(user)
console.log(user.age);

user.age = 25; // we can update our data using dot notaition 
console.log(user.age)

console.log(user['location']); // we can access our data using braket notaion , but dont forget the quotes.
user['name'] = 'reza';
console.log(user['name'])

console.log(typeof user); // object