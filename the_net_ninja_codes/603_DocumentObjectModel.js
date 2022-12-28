const para = document.querySelector('p')  // it take the first 'p' element which come cross.

console.log(para);

const paras = document.querySelectorAll('p')  // it makes a node list which is very similar to arrays. and takes all the paragraphs.

console.log(paras[1]);
paras.forEach(para => {
    console.log(para )
})