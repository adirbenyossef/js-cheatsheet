/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {

    const magazineChars = magazine.split('')
    for (let i = 0; i < ransomNote.length; i++) {
        const idx = magazineChars.indexOf(ransomNote[i]);
        if(idx === -1) {
            return false;
        } else {
            magazineChars[idx] = '';
        }
    }
    return true;
};

console.log(canConstruct('aa', 'asdb'));