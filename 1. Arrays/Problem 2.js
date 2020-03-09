/* Given an array of integers, return two numbers such that they add up to a specific target. */
let input = [2, 1, 5, 4, 3, 8];
let sum = 4;
/* 
    Time Complexity: O(n^2)
    Space Complexity: O(1)
*/
function two_number_sum1(array, targetSum) {
    let len = array.length;
    for (let i = 0; i < len; i++) {
        let firstNum = array[i];
        for (let j = i + 1; j < len; j++) {
            let secondNum = array[j];
            if (firstNum + secondNum === targetSum) {
                return [firstNum, secondNum];
            }
        }
    }
    return null;
}

console.log(`Two Number Sum: ${two_number_sum1(input, sum)}`);

/* 
    Time Complexity: O(n)
    Space Complexity: O(n)
*/
function two_number_sum2(array, targetSum) {
    let numbers = {};
    for (let number of array) {
        let potentialMatch = targetSum - number;
        if (potentialMatch in numbers) {
            return [number, potentialMatch];
        }
        numbers[number] = true;
    }
    return null;
}

console.log(`Two Number Sum: ${two_number_sum2(input, sum)}`);

/* 
    Time Complexity: O(nlog(n))
    Space Complexity: O(1)
*/
function two_number_sum3(array, targetSum) {
    array.sort((a, b) => (a - b));
    let left = 0;
    let right = array.length - 1;
    while (left < right) {
        let currentSum = array[left] + array[right];
        if (currentSum === targetSum) {
            return [array[left], array[right]];
        } else if (currentSum < targetSum) {
            left++;
        } else {
            right--;
        }
    }
    return null;
}

console.log(`Two Number Sum: ${two_number_sum3(input, sum)}`);