// it's just like the for loop but it has some differeces. 
// unlike for loop which have three experssions inside its paranteces, while loop has only one expression within its parateces, which is the condition only.

// printing one up to five by for loop :
for( let i = 1 ; i <= 5 ; i++){
    console.log(i);
}

// doing the same with while loop: 
let i = 1;
while(i <= 5){
    console.log(i)
} // you hove to first declare and initialize 'i' then use it in the loop



let names = ['ahmad' , 'mojtaba' , 'alireza']
let j = 0;
while(j < 5){
    console.log(names[j])
    j++; // don't forget to increment 'j' otherwise you will get stuck in infinite loop 
}