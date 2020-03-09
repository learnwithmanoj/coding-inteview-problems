/* Given an array of integers, return three numbers such that they add up to a specific target. */
let input = [2, 1, 5, 4, 3, 8];
let sum = 6;
/* 
    Time Complexity: O(n^2)
    Space Complexity: O(1)
*/
function three_number_sum(array, targetSum) {
    array.sort((a, b) => (a - b));
    let len = array.length - 2;
    for (let i = 0; i < len; i++) {
        let left = i + 1;
        let right = array.length - 1;
        let currentNum = array[i];
        while (left < right) {
            let currentSum = currentNum + array[left] + array[right];
            if (currentSum === targetSum) {
                return [currentNum, array[left], array[right]];
            } else if (currentSum < targetSum) {
                left++;
            } else {
                right--;
            }
        }
    }
    return null;
}

console.log(`Three Number Sum: ${three_number_sum(input, sum)}`);