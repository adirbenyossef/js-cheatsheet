function isPalindrome (s) {
    let right = 0;
    const ns = s.toLowerCase().replace(/[^0-9a-z]/gi, '');
    let left = ns.length -1;
    while (right < left) {
        if (ns[right] !== ns[left]) {
            return false;
        }
        right++;
        left--;
    }
    return true;
};


console.log(isPalindrome('_A man, a plan, a canal: Panama_'));