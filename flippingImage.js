// const flippingImage = (arr) => {
//     let temp;
//     let size = arr.length - 1

//     for(let i = 0, j = size; i <= j; i++, j--){
//         temp = arr[i]
//         arr[i] = arr[j]
//         arr[j] = temp
//     }
//     return arr;
// }
// let arr = [[1,1,0],[1,0,1],[0,0,0]]

// for(let i = 0; i < arr.length; i++){
//   let arrays = flippingImage(arr[i])
//   for(let m = 0; m <= arrays.length - 1; m++){
//     arrays[m] = 1 - arrays[m]
//   }
//   return arrays;
// }

// O(n) + O(n * n)
// O(n^)

let image = [
  [1, 1, 0],
  [1, 0, 1],
  [0, 0, 0],
];

let temp;

for (let i = 0; i < image.length - 1; i++) {
  for (let j = 0, k = image[i].length - 1; j < k; j++, k--) {
    temp = image[i][j];
    image[i][j] = image[i][k];
    image[i][k] = temp;
    
  }
  for(let m =0; m < image[i].length; m++){
    image[i][m] = 1 - image[i][m]
  }
//   Input: image = [[1,1,0],[1,0,1],[0,0,0]]
// reverse : [[0,1,1],[1,0,1],[0,0,0]]
// Output: [[1,0,0],[0,1,0],[1,1,1]]
}
console.log(image);

let nestArr = [
  [1, 1, 0],
  [1, 0, 1],
  [0, 0, 0],
];

function nst(nestArr) {
    let temp;
  for (let i = 0; i < nestArr.length; i++) {
    console.log(nestArr[i]);
    for (let j = 0, k = nestArr[i].length -1 ; j <= k; j++, k--) {
        temp = nestArr[i][j];
        nestArr[i][j] = nestArr[i][k]
        nestArr[i][k] = temp
    }
 for(let m = 0; m < nestArr[i].length; m++){
    nestArr[i][m] = 1 - nestArr[i][m]
 }
}
return nestArr;
}

console.log(nst(nestArr));
// Input: image = [[1,1,0],[1,0,1],[0,0,0]]
// Output: [[1,0,0],[0,1,0],[1,1,1]]