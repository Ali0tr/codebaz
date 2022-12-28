const article = document.querySelector('article');

console.log(article.children);  // all the child nodes   // it will return an HTMLCollection
console.log(Array.from(article.children))  // it will make an array from that HTMLCollection
console.log(article.parentElement) // parent

Array.from(article.children).forEach(el =>{
    el.classList.add('article-element')
})


const title = document.querySelector('h2')

console.log(title.parentElement);
console.log(title.nextElementSibling);
console.log(title.nextElementSibling.parentElement);
console.log(title.previousElementSibling);

// chaining 
console.log(title.nextElementSibling.parentElement.previousElementSibling.children);