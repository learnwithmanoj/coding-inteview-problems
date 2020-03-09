/* Given an array of characters where each character represents a fruit tree, you are given two baskets and your goal is to put maximum number of fruits in each basket. The only restriction is that each basket can have only one type of fruit. */
/* 
    Time Complexity: O(n)
    Space Complexity: O(1)
*/
function fruits_into_baskets(fruits) {
    let windowStart = 0;
    let maxLength = 0;
    let fruitFrequency = {};
    for(let windowEnd = 0; windowEnd < fruits.length; windowEnd++) {
        let rightFruit = fruits[windowEnd];
        if(!(rightFruit in fruitFrequency)) {
            fruitFrequency[rightFruit] = 0;
        }
        fruitFrequency[rightFruit] += 1;
        while(Object.keys(fruitFrequency).length > 2) {
            let leftFruit = fruits[windowStart];
            fruitFrequency[leftFruit] -= 1;
            if(fruitFrequency[leftFruit] === 0) {
                delete fruitFrequency[leftFruit];
            }
            windowStart += 1;
        }
        maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
    }
    return maxLength;
}

console.log(`Maximum number of fruits: ${fruits_into_baskets(['A', 'B', 'C', 'A', 'C'])}`);
console.log(`Maximum number of fruits: ${fruits_into_baskets(['A', 'B', 'C', 'B', 'B', 'C'])}`);