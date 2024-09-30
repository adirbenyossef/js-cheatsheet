function majorityElement (nums) {
    let biggestAppearance = 0;
    let result = -1;
    nums.reduce((acc, curr) => {
        const currentCount = acc[curr] ? acc[curr] + 1: 1
        if(currentCount > biggestAppearance) {
            biggestAppearance = currentCount;
            result = curr;
        }
        
        return {
            ...acc,
            [curr]: currentCount
        }
    }, {});
    return result;
};

console.log(majorityElement([3,2,3]));