const link = document.querySelector('a')

console.log(link.getAttribute('href'));  // https://google.com
link.setAttribute('href','https://books.com')
link.innerText = 'read here'

const mssg = document.querySelector('p')

console.log(mssg.getAttribute('class'));
mssg.setAttribute('class' , 'success')
mssg.setAttribute('style','color: green;') // no matter if that element doesn't have that attribute