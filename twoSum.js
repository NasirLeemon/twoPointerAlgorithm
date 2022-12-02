
// 167. Two Sum II - Input Array Is Sorted

let arr = [5, 6, 7, 11, 15];

var twoSum = function(numbers, target) {
  let i = 1;
  let j = numbers.length - 1;

  while (i < j) {
    if (numbers[i] + numbers[j] == target) {
      return output = [i+1, j+1]
    } else if (numbers[i] + numbers[j] > target) {
      j--;
    } else if (numbers[i] + numbers[j] < target) {
      i++;
    }
  }
}
console.log(twoSum(arr, 26));
