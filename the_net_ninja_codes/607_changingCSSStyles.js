const title = document.querySelector('h1')

//we've already written an inline style for the h1
title.setAttribute('style','margin : 20px;') // and because we used setAttribute it sets the style attribute completely and remove the other styles.
// so this way is not recommended.

console.log(title.style) // css has lots of style properties. all of them will be returned
console.log(title.style.color) // only the color

title.style.margin = '50px'
title.style.color = 'red'
title.style.fontSize = '30px'  // we don't use '-' in js. we should write the properties in camel case
title.style.margin = '' // empties the margin property