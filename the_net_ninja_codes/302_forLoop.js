// for loops 

// syntax : 
// for (initializing ; condition ; operation){
    //some works 
//} since that codition is true those works will be done. after that condition evaluates to false that loog will be finished

for (let i = 0; i < 5; i++){
    console.log(i) // it will logs the 'i' five times from 0 to 4 
}

let names = ['reza' , 'ali' , 'ehsan']
for(let i = 0 ; i < names.length ; i++){
    console.log(names[i]); // it will log the names in the array names one by one
    let html = `<div>${names[i]}</div>`;
    console.log(html);
}