// PROGRAMA 1
const a = 5;
const b = 2;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

// PROGRAMA 2
const numA = 5;
const numB = -10;

if (numA > numB) {
  console.log(numA);
}
else if (numB > numA) {
  console.log(numB);
}
else {
  console.log("São Iguais");
}

// PROGRAMA 3
const A = 3000;
const B = 90;
const C = 500;

if(A > B && A > C) {
  console.log(A);
}
else if(B > A && B > C) {
  console.log(B);
}
else {
  console.log(C);
}

// PROGRAMA 4
const number = -5;

if(number > 0) {
  console.log("Posiive");
}
else if(number < 0) {
  console.log("Negative");
} 
else {
  console.log("Zero");
}

// PROGRAMA 5
const angle1 = -100;
const angle2 = 40;
const angle3 = 40;
let soma = angle1 + angle2 + angle3;

if(soma === 180 && angle1 >= 0 && angle2 >=0 && angle3 >= 0) {
  console.log(true);
} else {
  console.log(false);
}


// PROGRAMA 6
let piece = "ROOK";
let lowerCase = piece.toLowerCase();

if(lowerCase == "king" || lowerCase == "queen"){
  console.log("Any Direction");
} else if(lowerCase == "bishop"){
  console.log("Diagonals");
} else if(lowerCase == "rook"){
  console.log("Horizontally or Vertically");
} else if(lowerCase == "knights"){
  console.log("L Shape");
}else if(lowerCase== "pawns"){
  console.log("vertically forward");
} else{
  console.log("Sorry. This piece doesn't exist.")
}


// PROGRAMA 7
let porcentagem = 1;

if(porcentagem >= 90){
  console.log("A");
} else if(porcentagem >= 90){
  console.log("B");
} else if(porcentagem >= 60){
  console.log("D");
} else if(porcentagem >= 50){
  console.log("E");
} else if (porcentagem <50 && porcentagem > 0){
  console.log("F");
} else if(porcentagem < 0){
  console.log("Nota Inválida");
}

// PROGRAMA 8
const firstNumber = 3;
const secondNumber = 1;
const thirdNumber = 8;

if(firstNumber % 2 == 0 || secondNumber % 2 == 0 || thirdNumber % 2 == 0){
  console.log("True");
} else {
  console.log("false");
}

// PROGRAMA 9
const numberOne = 44;
const numberTwo = 2;
const numberThree = 99;

if(numberOne % 2 == 1 || numberTwo % 2 == 1 || numberThree % 2 == 1){
  console.log("True");
} else {
  console.log("false");
}

// PROGRAMA 10
let valorCusto = 5;
let valorVenda = 15;
let valorCustoTotal = valorCusto + (0.2 * valorCusto);

if(valorCusto >= 0 && valorVenda >= 0){
  console.log(valorVenda - valorCustoTotal);  
} else{
  console.log("Revise suas contas aí, amigo. Valor incorreto.")
}

// PROGRAMA 11
let salarioBruto = 3000;
let salarioLiquido1;
let tristezaTotal;


if(salarioBruto <= 1556.94){
  salarioLiquido1 = salarioBruto - 0.08 * salarioBruto;
} else if(salarioBruto >= 1556.95 && salarioBruto <= 2594.92){
  salarioLiquido1 = salarioBruto - 0.09 * salarioBruto;
} else if(salarioBruto >= 2594.93 && salarioBruto <= 5189.82){
  salarioLiquido1 = salarioBruto - 0.11 * salarioBruto;
} else{
  salarioLiquido1 = salarioBruto - 570.88;
} 

if(salarioLiquido1 <= 1903.98){
  tristezaTotal = salarioLiquido1;
} else if(salarioLiquido1 >= 1903.99 && salarioLiquido1 <= 2823.65){
  tristezaTotal = salarioLiquido1 - 0.075 * salarioLiquido1 + 142.80;
} else if(salarioLiquido1 >= 2826.66 && salarioLiquido1 <= 4664.68){
  tristezaTotal = salarioLiquido1 - (0.15 * salarioLiquido1) + 354.80;
} else{
  tristezaTotal = salarioLiquido1 - (0.275 * salarioLiquido1) + 869,36;
}

if(salarioLiquido1 <= 1903.98){
  console.log(salarioLiquido1);
} else {
  console.log(tristezaTotal);
}

// PROGRAMA 11 REFATORADO
let salary = 3000;

if(salary <= 1556.94){
  salary = salary - 0.08 * salary;
} else if(salary <= 2594.92){
  salary = salary - 0.09 * salary;
} else if(salary <= 5189.82){
  salary = salary - 0.11 * salary;
} else {
  salary - 570.88;
}
console.log(salary);

if(salary >= 1903.99 && salary <= 2823.65){
  salary = salary - 0.075 * salary + 142.80;
} else if(salary >= 4664.68){
  salary = salary - (0.15 * salary) + 354.80;
} else {
  salary = salary - (0.275 * salary) + 869,36;
}
console.log(salary);