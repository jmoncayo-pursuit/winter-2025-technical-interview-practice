// 1. given a string with three characters, return the second character
function getSecondCharacter(str) {
  return str[1];
}


// 2. get the second and third char from a string. the string will always have atleast three characters

// 'cat' => 'at'
// 'robbed' => 'ob'
function getSecondAndThirdCharacters (str) {
    return str.slice(1, 3);
}

// 3. Given a word with 5 letters, return the second through 5th letter

function getSecondThroughFifthLetter (word){
  return word.slice(1, 5);
}

// 4. given a string and a number called N, return the second through the Nth character

// 'schoolbus', 5 => 'choo'
// 'telephone', 6 => 'eleph

function getSecondThroughNthCharacter  (str, n) {
    return str.slice(1, n);
}

// slice is a ?? method: array and also a string method
// splice is a array method

// 5. Given an array of booleans, return an arrray of only false elements

// [true, true, false, true , false] => [false, false]

function getFalseElements (arr) {
    return arr.filter(element => element === false);
}

// 6. given a string with two words, put ' the ' between the words and return the string

// 'to beach' => 'to the beach'
// 'for real' => 'for the real'
// 'jim john' => 'jim the john'
// 'to house' => 'to the house'

function addTheBetweenWords (str) {
    return str.replace(' ', ' the ');
}

// 7.  given two numbers, price and discount, return the price after the discount is applied

// price is 100 and discount is 15

// 100, 15 => 85

// 70, 3 => 67.9

function applyDiscount (price, discount) {
    return price - (price * (discount / 100));
}
// Console.log each of your answers with the test cases provided. Attempt to write each one with TDD.
console.log(getSecondCharacter('cat')); // 'a'
console.log(getSecondAndThirdCharacters('cat')); // 'at
console.log(getSecondThroughFifthLetter('schoolbus')); // 'choo
console.log(getSecondThroughNthCharacter('telephone', 6)); // 'eleph
console.log(getFalseElements([true, true, false, true, false])); // [false, false]
console.log(addTheBetweenWords('to beach')); // 'to the beach'
console.log(addTheBetweenWords('for real')); // 'for the real'
console.log(addTheBetweenWords('jim john')); // 'jim the john'
console.log(applyDiscount(100, 15)); // 85
