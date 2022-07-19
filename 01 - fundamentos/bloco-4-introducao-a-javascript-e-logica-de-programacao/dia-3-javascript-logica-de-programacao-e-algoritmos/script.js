// DESAFIO
const n = 9;

let resultado = 100;
for (let i = 0; i <= n; i += 1) {
  resultado -= i;
}
console.log(resultado);

// DESAFIO 2
const number = 5;
let result = 0;

for (let j = 0; j <= number; j += 1) {
  result += j;
}
console.log(result);

// EXERCÍCIO 1
// let value = 10;
// let parcialFactorial;
// let factorial;

// for(let i = value -1; i >= 1; i -=1){
//   parcialFactorial = value * i;
//   factorial = parcialFactorial 
//   for(i >= 1; i -=1;){
//     factorial *= i;
//     value -= 1;
//   }
// }
// console.log(factorial);

// EXERCICIO 1 REFATORADO
let num = 4;
let factoring = 1;

for (let i = factoring; i <= num; i += 1) {
  factoring *= i
}
console.log(factoring);

// EXERCÍCIO 2
// let word = 'tryber';
// let array = [];
// let newWord = '';
// for(let i = word.length -1; i >= 0; i--){
//   array.push(word[i]);
// }
// for(let i = 0; i < array.length; i++){
//   newWord += array[i]
// }
// console.log(newWord);

// EXERCÍCIO 2 REFATORADO
let word = 'tryber';


// EXERCÍCIO 3
let arraySkill = ['java', 'javascript', 'python', 's', 'html', 'css' ];
let higherWord = arraySkill[0];
let smallerWord = arraySkill[0];

for(let i = 1; i < arraySkill.length; i++){
  if(arraySkill[i].length > higherWord.length){
    higherWord = arraySkill[i];
  } else if(arraySkill[i].length < smallerWord.length){
    smallerWord = arraySkill[i];    
  }
}
console.log(higherWord, smallerWord);
