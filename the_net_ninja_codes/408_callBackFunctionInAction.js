// get a referrence to the ul 
const list = document.querySelector('.people')

const people = ['ali' , 'ahmad' , 'mostafa' , 'reza' , 'sajjad']

let html = ``;

people.forEach(function (person) {
    //create a template html
    html += `<li style="color: purple;">${person}</li>`
});

console.log(html);
list.innerHTML = html;