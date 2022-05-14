// BÔNUS

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// PRIMEIRA SOLUÇÃO
numbers.sort((a,b)=>a-b)
console.log(numbers);
numbers.sort((a,b)=>b-a);
console.log(numbers);

// SEGUNDA SOLUÇÃO
for (let index = 1; index < numbers.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (numbers[index] < numbers[secondIndex]) {
      let position = numbers[index];
      numbers[index] = numbers[secondIndex];
      numbers[secondIndex] = position;
    }
  }
}
console.log(numbers);