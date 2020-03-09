/* Given an array of positive numbers and a positive number ‘s’, find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘s’. Return 0, if no such subarray exists. */
/* 
    Time Complexity: O(n)
    Space Complexity: O(1)
*/
function smallest_subarray_with_given_sum(sum, arr) {
    let windowSum = 0.0;
    let windowStart = 0;
    let currentMinLength = Infinity;
    for(let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
        windowSum += arr[windowEnd];
        while(windowSum >= sum) {
            currentMinLength = Math.min(currentMinLength, windowEnd - windowStart + 1);
            windowSum -= arr[windowStart];
            windowStart++;
        }
    }
    if(currentMinLength === Infinity) { return 0 };
    return currentMinLength;
}

console.log(`Smallest subarray length: ${smallest_subarray_with_given_sum(7, [2, 1, 5, 2, 3, 2])}`);
console.log(`Smallest subarray length: ${smallest_subarray_with_given_sum(7, [2, 1, 5, 2, 8])}`);
console.log(`Smallest subarray length: ${smallest_subarray_with_given_sum(8, [3, 4, 1, 1, 6])}`);