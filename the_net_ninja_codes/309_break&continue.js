// break and continue

// imagin a game that some people wanna play it and it has a top score which is 100 and if one person hit that top score there is no need for others to play it and they will be ignored even if they hit top score as well.
// and another rule is zero will be ignored completely

let scores = [23, 50 , 34 , 0 , 45 , 100 , 3 , 23]

for(let i = 0 ; i < scores.length ; i++){
    if(scores[i] === 0){
        continue; // ignore it and don't run the rest of code. means go back to the top and do the next index
    }
    
    console.log('your score is : ' + scores[i])

    if(scores[i] === 100){
        console.log('congrats, you got the top score!')
        break; // ignore other indexes. we already got the top score. we don't need other scores to be printed
    }
}