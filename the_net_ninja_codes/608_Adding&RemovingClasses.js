const content = document.querySelector('p')

console.log(content.classList);
content.classList.add('error');
content.classList.remove('error');
content.classList.add('success');
content.classList.remove('success');


/// exercise 
const paras = document.querySelectorAll('.exercise p')
console.log(paras);
paras.forEach(para => {
    para.innerText.includes('success') && para.classList.add('success')
    para.innerText.includes('error') && para.classList.add('error')
})

//
const title = document.querySelector('.title')

title.classList.toggle('success')  // if it has the class of success take it off, and else if id doesn't, apply it