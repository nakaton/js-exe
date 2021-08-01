function indexOf(arr, item) {
  let result = arr.indexOf(item);
  return result;
}

console.log(`JS1: ${indexOf([1, 2, 3, 4], 3)}`);

function sum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total = total + arr[i];
  }
  return total;
}

console.log(`JS2: ${sum([1, 2, 3, 4, 5])}`);
