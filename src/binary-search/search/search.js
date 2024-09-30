function search(nums, target) {
    let l = 0;
    let r = nums.length - 1;

    while(l <= r) {
        const mid = Math.floor((l+r)/2);

        if(target == nums[mid]) return mid;

        if(target > nums[mid]) l = mid + 1;
        else r = mid - 1;
    }
    return -1;
};


console.log(search([-1,0,3,5,9,12], 9));
console.log(search( [-1,0,3,5,9,12], 2));