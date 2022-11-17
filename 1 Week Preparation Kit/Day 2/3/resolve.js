function countingSort(arr) {
    // create an array with 100 elements, all set to 0
  let frequencyArray = new Array(100).fill(0);
  // loop through the input array for any number of the array increase 1 in the array on the position of the number
  for (let num of arr) {
    frequencyArray[num]++;
  }
  return frequencyArray;
}
countingSort([1, 1, 3, 2, 1])