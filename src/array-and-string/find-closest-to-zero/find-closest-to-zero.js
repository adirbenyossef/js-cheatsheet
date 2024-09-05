export function findClosestNumber(nums) {
    let closest = nums[0];

    nums.forEach(num => {
        if(Math.abs(num) < Math.abs(closest)) {
            closest = num;
        }
    });

    const mirrorClosest = nums.find(num => num == Math.abs(closest));

    if(closest < 0 && mirrorClosest) {
        return Math.abs(closest);
    } else {
        closest;
    }
}