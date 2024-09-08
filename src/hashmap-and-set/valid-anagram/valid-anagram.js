const isAnagram = function(s, t) {
    if(t.length !== s.length) {
        return false;
    }

    const counterDict = (arr) => arr.reduce((acc, curr) => {
        acc[curr] = (acc[curr] || 0) + 1;
        return acc;
    }, {})

    const sDict = counterDict(s.split(''));
    const tDict = counterDict(t.split(''));

    for(const key in sDict) {
        if(sDict[key] !== tDict[key]) {
            return false;
        }
    }
    return true;
};

console.log(isAnagram('anagram', 'nagaram'));