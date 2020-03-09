/* Given an array of integers, find the most frequent integer */
/* 
    Time Complexity: O(n)
    Space Complexity: O(n)
*/
function most_frequent_integer(inputArray) {
    let map = new Map();
    for (let i = 0; i < inputArray.length; i++) {
        if(!map.has(inputArray[i])) {
            map.set(inputArray[i], 1);
        } else {
            map.set(inputArray[i], map.get(inputArray[i]) + 1);
        }
    }
    let currentMostFrequentInteger = null;
    for (let j = 0; j < inputArray.length; j++) {
        let current = map.get(inputArray[j]);
        if(current > currentMostFrequentInteger) {
            currentMostFrequentInteger = inputArray[j];
        }
    }
    return currentMostFrequentInteger;
}

var input = [1, 2, 3, 2, 1, 3, 5, 3];
console.log(most_frequent_integer(input));