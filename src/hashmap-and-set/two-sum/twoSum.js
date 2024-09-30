function twoSum (nums, target) {
    let map = {}
    for(let i = 0 ; i < nums.length ; i++){
        let diff = target-nums[i]
        if(diff in map){
            return [map[diff] , i]
        }
        map[nums[i]] = i 
    }
};

console.log(twoSum([1,3,4,2],6))