function removeDuplicates(array: number[]): number {
  let count = 0;

  for (let i = 0; i < array.length; i++) {
    if (i === 0 || array[i] !== array[i - 1]) {
      array[count] = array[i];
      count++;
    }
  }

  return count;
}

console.log(removeDuplicates([2, 3, 3, 3, 6, 9, 9]));
console.log(removeDuplicates([2, 3, 4, 5, 6, 9, 9]));
console.log(removeDuplicates([2, 2, 2, 11]));
console.log(removeDuplicates([1, 1, 2, 2, 3, 3, 4, 4]));
console.log(removeDuplicates([1, 2, 3, 11, 11]));