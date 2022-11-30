
function twoDifferentArr(arr1, arr2) {
  let i = 0;
  let j = 0;
  let k = 0;
  let newArr = [];
  while (true) {
    if (arr1[i] < arr2[j]) {
      newArr.push(arr1[i]);
      i++;
      k++;
    }if (arr1[i] >= arr2[j]) {
      newArr.push(arr2[j]);
      j++;
      k++
      i++
    } else if (arr1[i] == undefined) {
      newArr.push(arr2[j]);
      return newArr;
    }
  }

}

console.log(twoDifferentArr([5, 10, 15, 20, 25, 30], [15, 23, 25, 30, 35]));
