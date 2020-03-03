/* Given an array of positive numbers and a positive number ‘k’, find the maximum sum of any contiguous subarray of size ‘k’. */
function max_sub_array_of_size_k(k, arr) {
    let currentMaximumSum = 0;
    let windowStart = 0;
    let sum = 0.0;
    for(let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
        sum += arr[windowEnd];
        if(windowEnd >= k -1) {
            currentMaximumSum = Math.max(currentMaximumSum, sum);
            sum -= arr[windowStart];
            windowStart++;
        }
    }
    return currentMaximumSum;
}

console.log(`Maximum sum of a subarray of size k: ${max_sub_array_of_size_k(3, [2, 1, 5, 1, 3, 2])}`);
console.log(`Maximum sum of a subarray of size k: ${max_sub_array_of_size_k(2, [2, 3, 4, 1, 5])}`);