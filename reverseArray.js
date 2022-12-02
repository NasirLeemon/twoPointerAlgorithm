// REVERSE ARRAY

let arr = [10,20,30,40,50]
let size = arr.length - 1
let temp;
// console.log({before: arr});
for(i = 0, j=size; i<=j; i++, j-- ){
  temp = arr[i]
  
  arr[i] = arr[j] 
 
  arr[j] = temp
}

console.log(arr);


let a = 10;
let b = 20;
let c = a;
a = b;
b = c

console.log(a,b);