// PARTE II
// 1
function palindrome(word) {
  let newWord = '';
  for (let i = word.length - 1; i >= 0; i--) {
    newWord += word[i];
  }
  if (word === newWord) {
    return true;
  }
  return false;
}
console.log(palindrome('arara'));

// 2
let higherNumber = 0;
function checkHigherNumber(array) {
  for (let i = 0; i < array.length; i++) {

    if (array[i] > higherNumber) {
      higherNumber = i;
    }
  }
  return higherNumber;
}
console.log(checkHigherNumber([2, 3, 6, 7, 10, 1]));

// 3
arrayTest = [2, 4, 6, 7, 10, 0, -3];
let smallerNumberI = [0];

function checkSmallerNumberI(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] < smallerNumberI) {
      smallerNumberI = i;
    }
  }
  return smallerNumberI;
}
console.log(checkSmallerNumberI([2, 4, 6, 7, 10, 0, -3]));

// 4
higherName = [0]

function nameCount(nameArray) {
  for (let i = 0; i < nameArray.length; i++) {
    if (nameArray[i].length > higherName.length) {
      higherName = nameArray[i];
    }
  }
  return higherName;
}
console.log(nameCount(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

// 5
let count = 0;
function repeatCount(numberArray) {
  for (let i = 1; i < numberArray.length; i++) {
    for (let j = 0; j < numberArray.length; j++) {
      if (numberArray[i] === numberArray[j]) {
        count = numberArray[i];
      }
    }
  }
  return count;
}


console.log(repeatCount([2, 3, 2, 5, 8, 2, 3]));
