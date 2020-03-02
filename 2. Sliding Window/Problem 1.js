//Given an array, find the average of all contiguous subarrays of size 'k' in it.
function find_averages_of_subarrays(k, arr) {
    const result = [];
    let sum = 0.0;
    let windowStart = 0;
    for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
        sum += arr[windowEnd];
        if (windowEnd >= k - 1) {
            result.push(sum / k);
            sum -= arr[windowStart];
            windowStart++;
        }
    }
    return result;
}

const result = find_averages_of_subarrays(5, [1, 3, 2, 6, -1, 4, 1, 8, 2]);
console.log(`Averages of subarrays of size k: ${result}`);