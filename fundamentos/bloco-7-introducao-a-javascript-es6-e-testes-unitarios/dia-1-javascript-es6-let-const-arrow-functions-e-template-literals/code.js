// Parte I
// Questão 1
const testingScope = (escopo) => {
  const ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
  const elseScope = 'Não devo ser utilizada fora meu escopo (else)';

  escopo ? `${ifScope} ótimo, fui utilizada no escopo !` : `${elseScope} ótimo, fui utilizada no escopo ! o que estou fazendo aqui ? :O`;
};

// Questão 2
const oddsAndEvens = [13, 3, 4, 10, 7, 2];
const orderNumbers = (array) =>  array.sort((a, b) => a - b);

// Parte II
// Questão 1
const fatorial = (n) => {
  for (let i = n - 1; i >= 1; i--) n *= i;
  return n;
}

// Questão 2
const longestWord = (str) => str.split(' ').sort((a, b) => b.length - a.length)[0];

// Questão 3
const btn = document.querySelector('#btn');

function counter() {
  btn.innerText = parseInt(btn.innerText, 10) + 1;
}

btn.addEventListener('click', counter);

// Questão 4
const newString = (str) => {
  let phrase = 'Tryber x aqui!';
  return phrase.replace('x', str);
  
};

// Questão 5
const fullString = (str) => `${str} 
Minhas cinco principais habilidades são:
JavaScript;
HTML; ...
#goTrybe".`;

// Funções
console.log(testingScope(true));
console.log(orderNumbers(oddsAndEvens));
console.log(fatorial(4));
console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));
console.log(newString('Bebeto'));
console.log(fullString(newString('Bebeto')));