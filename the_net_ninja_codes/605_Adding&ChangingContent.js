const para = document.querySelector('p')

console.log(para.innerText); // the text inside the first paragraph 
para.innerText = 'new text'  // changes the text of the paragraph 


const paras = document.querySelectorAll('p')
paras.forEach(para => {
    console.log(para.innerText);
    para.innerText += 'new text';
})

const content = document.querySelector('.content')
console.log(content);
content.innerHTML = "<h2>something</h2>"

let people = ['sara' , 'moein' , 'fatemeh'];
people.forEach(person => {
    content.innerHTML += `<p>${person}</p>`
})