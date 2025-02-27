/**
 * Given a string containing just the characters '(', ')'.
 *
 * We will say this string is considered valid if:
 * 1. Open brackets must be closed by close brackets.
 * 2. Open brackets must be closed in the correct order.
 *
 * For example, "()" and "()(())" are valid but "())" and "()(()" are not.
 *
 * @param {string} s
 * @return {boolean}
 */
function isValid(s) {
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
        stack.push(s[i]);
        } else if (s[i] === ')') {
        if (stack.length === 0) return false;
        stack.pop();
        }
    }
    return stack.length === 0;
}

module.exports = isValid;
