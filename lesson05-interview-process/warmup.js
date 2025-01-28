function reverseString(str) {
let reversed = '';
    for (let i = str.length - 1; i >= 0;i--) {
        reversed += str[i];
    }
    return reversed;
}

console.log(reverseString("Hello, World!"));
// Expected Output: "!dlroW ,olleH"

function capitalizeWords(str) {
    let result = '';
    let capitilizeNext = true;

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (char === ' ') {
            result += char;
            capitilizeNext = true;
        } else {
            if (capitilizeNext){ 
                result += char.toUpperCase();
                capitilizeNext = false;
            } else {
                result += char;
            }
        }
    }
    return result;
}

console.log(capitalizeWords("hello, world!"));
// Expected Output: 'Hello, World!'

console.log(capitalizeWords("javascript is awesome"));
// Expected Output: 'Javascript Is Awesome'

function countVowels(str) {
    let count = 0;
    const vowels = 'aeiouAEIOU';
    for (let i = 0; i < str.length; i++) {
        if (vowels.indexOf(str[i]) !== -1) {
            count++;
        }
    }
    return count;
}

console.log(countVowels("hello"));
// Expected Output: 2

console.log(countVowels("programming"));
// Expected Output: 3
