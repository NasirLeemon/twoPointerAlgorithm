

function isPrime(num){
let count = 0
if(num == 0) return num + ' is a prime number'
    for(let i = 1; i <= num; i++){
        
        if (num % i == 0) {
            count++
        }
    }
    if(count == 2) return num + ' is a prime number'
    else return num + ' is not a prime number'
}


// let arr = [5,6,7,10,11,15,17,19,20]
// for(let i = 0; i < arr.length; i++){
//     console.log(isPrime(arr[i]));
// }

console.log(isPrime(5));
console.log(isPrime(15));
console.log(isPrime(3));
console.log(isPrime(13));
console.log(isPrime(24));
console.log(isPrime(55));
console.log(isPrime(0));
