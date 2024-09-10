function maxNumberOfBalloons(text) {
    let s = {
        b: 0, 
        a: 0, 
        l: 0, 
        o: 0, 
        n: 0
    };

    const arr = text.split('');

    for (let i = 0; i < arr.length; i++) {
        if(Object.keys(s).includes(arr[i])) {
            s[arr[i]] = s[arr[i]] + 1;
        }
    }
    const { b, a, l, o , n } = s;
    console.log(s);

    if (b === 0 || a === 0 || l === 0 || l === 1 || o === 0 || o === 1 || n === 0) {
        return 0;
    }
    const lowestDblVal = Math.min(l, o);
   
    const lowestDevided = Math.floor(lowestDblVal / 2);
    const vals = Object.values(s);
    const mightBeOtherLowestVal = vals.find(val => lowestDevided -1 >= val );
    console.log(mightBeOtherLowestVal);
    if(mightBeOtherLowestVal) {
        return mightBeOtherLowestVal;
    } else {
        return lowestDevided;
    }
};


console.log(maxNumberOfBalloons('loonbalxballpoonballoo')); 