function calPoints (operations) {
    const recordStack = [];

    for (let i = 0; i < operations.length; i++) {
        // console.log('iteration', i, recordStack, operations[i]);
        // console.log(`recordStackLength: ${recordStack.length}, recordStackLast: ${recordStack[recordStack.length -1]}`);
        switch(operations[i]) {
            case 'C':  recordStack.pop();
                break;
            case 'D': recordStack.push(recordStack[recordStack.length -1] * 2);
                break;
            case '+': recordStack.push(recordStack[recordStack.length -1] + recordStack[recordStack.length -2]);
                break;
            default: recordStack.push(parseInt(operations[i]));
                break;
        }
    }
    // console.log(recordStack);
    return recordStack.reduce((a, b) => a + b, 0);
}

console.log(calPoints( ["5","-2","4","C","D","9","+","+"]));

/*
Input: ops = ["5","-2","4","C","D","9","+","+"]
Output: 27
Explanation:
"5" - Add 5 to the record, record is now [5].
"-2" - Add -2 to the record, record is now [5, -2].
"4" - Add 4 to the record, record is now [5, -2, 4].
"C" - Invalidate and remove the previous score, record is now [5, -2].
"D" - Add 2 * -2 = -4 to the record, record is now [5, -2, -4].
"9" - Add 9 to the record, record is now [5, -2, -4, 9].
"+" - Add -4 + 9 = 5 to the record, record is now [5, -2, -4, 9, 5].
"+" - Add 9 + 5 = 14 to the record, record is now [5, -2, -4, 9, 5, 14].
The total sum is 5 + -2 + -4 + 9 + 5 + 14 = 27.
*/