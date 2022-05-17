// DESAFIO
const n = 9 ;

let resultado = 100;
for(let i = 0; i <= n; i += 1){
  resultado -= i;
}
console.log(resultado);

// DESAFIO 2
const number = 5;
let result = 0;

for(let j = 0; j <= number; j += 1){
  result += j;
}
console.log(result);

// EXERCÍCIO 1
let value = 10;
let parcialFatorial;
let fatorial;

for(let i = value -1; i >= 1; i -=1){
  parcialFatorial = value * i;
  fatorial = parcialFatorial 
  for(i >= 1; i -=1;){
    fatorial *= i;
    value -= 1;
  }
    
}
console.log(fatorial);

// EXERCÍCIO 2
