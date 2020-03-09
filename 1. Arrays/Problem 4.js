/* Given an array of integers, return four numbers such that they add up to a specific target. */
let input = [2, 1, 5, 4, 3, 8];
let sum = 13;
/* 
    Time Complexity: O(n^2)
    Space Complexity: O(n^2)
*/
function four_number_sum(array, targetSum) {
    let allPairSums = {};
    let quadruplets = [];
    for (let i = 1; i < array.length - 1; i++) {
        for (let j = i + 1; i < array.length; j++) {
            let currentSum = array[i] + array[j];
            let diff = targetSum - currentSum;
            if (diff in allPairSums) {
                for (let pair of allPairSums[diff]) {
                    quadruplets.push(pair.concat([array[i] + array[j]]));
                }
            }
        }
        for (let k = 0; k < i; k++) {
            let currentSum = array[i] + array[k];
            if(currentSum in allPairSums) {
                allPairSums[currentSum].push([array[i], array[k]]);
            } else {
                allPairSums[currentSum] = [[array[i], array[k]]];
            }
        }
    }
    return quadruplets;
}

console.log(`Four Number Sum: ${four_number_sum(input, sum)}`);