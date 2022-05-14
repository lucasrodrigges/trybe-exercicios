let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// // // // 1
for(numberIn of numbers){
  console.log(numberIn);
}

// // // 2
let sum = 0;
for(let i = 0; i < numbers.length; i += 1){
  sum = sum + numbers[i];
}
console.log(sum);

// // // 3
let media = sum / numbers.length
console.log(media)

// // // 4
if(media > 20){
  console.log('Valor maior que 20.')
} else{
  console.log('Valor menor ou igual a 20.')
}

// 5
let hightNumber = 0;

for(let i = 0; i < numbers.length; i += 1){
  if(numbers[i] > hightNumber){
    hightNumber = numbers[i];
  }
}
console.log(hightNumber);

// 6
countImpars = 0;

for(let i = 0; i < numbers.length; i += 1){
  if(numbers[i] % 2 == 1){
    countImpars += 1;
  }
}
console.log(countImpars);

// 7
let smallerNumber = 0;

for(let i = 0; i < numbers.length; i += 1){
  if(numbers[i] > hightNumber){
    hightNumber = numbers[i];
  }
}

// 8
let myArray = [];

for (let index = 1; index <= 25; index += 1) {
  myArray.push(index);
}

console.log(myArray);

// 9
for(let i = 0; i < myArray.length; i += 1){
  console.log(myArray[i] / 2);
}

