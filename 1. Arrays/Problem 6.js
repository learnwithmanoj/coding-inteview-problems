/* Given an array of integers, find the largest range formed by distinct integers in the array. */
let input = [1, 11, 3, 0, 15, 5, 2, 4, 10, 7, 12, 6];

/* 
    Time Complexity: O(n)
    Space Complexity: O(n)
*/
function largest_range(array) {
    let len = array.length;
    let nums = {};
    let maximumLength = 0;
    let maximumRange = [];
    for (let item of array) {
        nums[item] = true;
    }
    for (let item of array) {
        if (!nums[item]) continue;
        nums[item] = false;
        let currentLength = 1;
        let left = item - 1;
        let right = item + 1;
        while (left in nums) {
            nums[left] = false;
            left--;
            currentLength++;
        }
        while (right in nums) {
            nums[right] = false;
            right++;
            currentLength++;
        }
        if (currentLength > maximumLength) {
            maximumRange = [left + 1, right - 1];
            maximumLength = currentLength;
        }
    }
    return maximumRange;
}

console.log(`Largest Range: ${largest_range(input)}`);