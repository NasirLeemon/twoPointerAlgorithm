
let facTorialMemo = []

function facTorial(num) {
    let result = 1;
for(let i = 1; i <= num; i++){
    result = result * i
}

facTorialMemo[num] = result
return result
    
}

console.log(facTorial(4));