function sortedSquares(nums) {
    // easy solution but with n log(n) time
    // const squared = nums.map(num => num * num);
    // return squared.sort((a,b) => a-b);

    //2 pointers solutions

    let left = 0; // start position
    let right = nums.length -1; // last position

    const result = [];

    //2 pointers actually save the square of the numbers in the right or left position in the same position (sorted ascending order)
    while (left <= right) {
        if(Math.abs(nums[left]) > Math.abs(nums[right])) {
            result.push(nums[left] * nums[left]);
            left +=1;
        } else {
            result.push(nums[right] * nums[right]);
            right -=1;
        }
    }
    return result.reverse();
};

console.log(sortedSquares([-7,-3,2,3,11]));