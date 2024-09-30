function reverseString(s) {
    let left = 0; // 0
    let right = s.length -1; //4

    while (left < right) {
        
        const currentRight = s[right];
        const currentLeft = s[left];
        s[left] = currentRight;
        s[right] = currentLeft;

        left++;
        right--;
    }

    return s;

};


console.log(reverseString(["h","e","l","l","o"]));