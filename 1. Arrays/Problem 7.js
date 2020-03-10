/* Given an array of integers, find the largest range formed by distinct integers in the array. */
let input = [8, 4, 2, 1, 3, 6, 7, 9, 5];

/* 
    Time Complexity: O(n)
    Space Complexity: O(n)
*/
function min_reward(array) {
    let rewards = array.map(_ => 1);
    let len = array.length;
    for (let i = 1; i < len; i++) {
        if (array[i] > array[i - 1]) {
            rewards[i] = rewards[i - 1] + 1;
        }
    }
    for (let j = len - 2; j >= 0; j--) {
        if (array[j] > array[j + 1]) {
            rewards[j] = Math.max(rewards[j], rewards[j + 1] + 1);
        }
    }
    return rewards.reduce((a, b) => a + b);
}

console.log(`Minimum Rewards: ${min_reward(input)}`);