// what is THIS ?? 

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
    },
    logBlogs : function(){
        console.log('this user has written the following blogs:')
        this.blogs.forEach(function(blog){ // THIS keyword reffers to the object not to the window. make sure to use regular function not arrow function
        }) // when you use arrow function it will refer to the global object
        // console.log(this.blogs)
    }
}

user.logBlogs();