function sumOfTwoLargestNumbers(arr) {
  if (arr.length < 2) {
    throw new Error("Array should contain at least two numbers");
  }

  let firstLargest = -Infinity;
  let secondLargest = -Infinity;

  for (let num of arr) {
    if (num > firstLargest) {
      secondLargest = firstLargest;
      firstLargest = num;
    } else if (num > secondLargest) {
      secondLargest = num;
    }
  }

  return firstLargest + secondLargest;
}

console.log(sumOfTwoLargestNumbers([3, 7, 1, 5, 11, 19]));
