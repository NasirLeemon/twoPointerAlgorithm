

function isPalindrome(str) {
    let i = 0;
    let k = str.length - 1

    while( i <= k ){
        if (str[i] != str[k]) {
            return false 
        }
        i++
        k--
    }

    return true
}

function leetCode2108(arr) {
    for(let i = 0; i < arr.length; i++ ){
   if (isPalindrome(arr[i])) {
    return arr[i]
   } else {
    return ''
   }
    }
}

console.log(leetCode2108(["abc","car","madam","racecar","cool"]));
console.log(leetCode2108(["def","ghi"]));






