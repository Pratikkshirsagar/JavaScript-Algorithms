function arrayChange(inputArray) {
  let count = 0;

  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] >= inputArray[i + 1]) {
      const deff = inputArray[i] + 1 - inputArray[i + 1];
      inputArray[i + 1] = inputArray[i] + 1;
      count += deff;
    }
  }

  return count;
}

console.log(arrayChange([1, 1, 1]));
