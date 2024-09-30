function isValid(s = '()()[]]{}') {
    
    const parenthesesDict = { 
        ')' : '(', 
        ']' : '[', 
        '}' : '{' 
    };
    const stack = [];

    for(let i = 0; i < s.length; i++) { 
        const current = s[i]; 
        console.log(`iteration + ${i}`, stack, current);
        if(!parenthesesDict[current]) { //not a closing parenthesis, it's open parenthesis for example: '{'
            stack.push(current);
        } else {
            if(stack.length ===0) { //there is no stack and the current is closing parenthesis
                return false;
            } else {
                const popped = stack.pop(); //last stack item for example '['
                if(popped !== parenthesesDict[current]) { // if the closing is not equal to a starter it violate the roles so return false
                    return false;
                }
            }
        }
    }
    return stack.length === 0;
};

// console.log(isValid('([{}])[]{})')); //true
// console.log(isValid('()')); //true
// console.log(isValid('[]{[')) //false
console.log(isValid('([[{}{}])'));
