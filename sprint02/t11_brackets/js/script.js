function checkBrackets(str) {
    if (typeof str !== 'string' || !str.includes('(') || !str.includes(')')) {
        return -1;
    }

    let count = 0;
    let stack = [];

    for (let i = 0; i < str.length; i++) {
        if (str[i] === '(') {
            stack.push(str[i]);
        } else if (str[i] === ')') {
            if (stack.length === 0) {
                count++;
            } else {
                stack.pop();
            }
        }
    }

    return count + stack.length;
}
