// add a method to the object

let user = {
    name: 'ali',
    age: 21,
    email: 'muali@gamil.com',
    location: 'hell',
    blogs : ['why mac & chees rules','10 things to make with marmite'],
    login : function(){ // adding a method to the object is as simple as writing a key-value pair at the end of the object or whereever you want :)
        console.log('the user logged in');
    },
    logout: function(){
        console.log('the user logged out');
    }
}

user.login();
user.logout();

let name = 'aminah'
name.toUpperCase();