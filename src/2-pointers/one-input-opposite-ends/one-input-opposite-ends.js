let foo = arr => {
    let left = 0, result = 0, right = arr.length - 1;

    while (left < right) {
        // do some logic here with left and right
        if (true /*CONDITION*/) {
            left++;
        } else {
            right--;
        }
    }

    return result;
}