// BÔNUS

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
numbers.sort((a,b)=>a-b)
console.log(numbers);
numbers.sort((a,b)=>b-a);
console.log(numbers);

mapped.sort((a, b) => {
  if (a.value > b.value) {
    return 1;
  }
  if (a.value < b.value) {
    return -1;
  }
  return 0;
});

const result = mapped.map(v => data[v.i]);