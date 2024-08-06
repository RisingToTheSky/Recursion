function mergeSort(array) {
  // Get middle of array
  if (array.length === 1) {
    return array;
  }
  let m = Math.floor(array.length / 2);
  let resultArray = [];
  // Get left and right half of the array
  let leftArray = mergeSort(array.slice(0, m));
  let rightArray = mergeSort(array.slice(m));
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
    if (leftArray[leftIndex] < rightArray[rightIndex]) {
      resultArray.push(leftArray[leftIndex]);
      leftIndex++;
    } else {
      resultArray.push(rightArray[rightIndex]);
      rightIndex++;
    }
  }
  return resultArray.concat(
    leftArray.slice(leftIndex),
    rightArray.slice(rightIndex)
  );
}

let array = [3, 2, 1, 13, 8, 5, 0, 1];
console.log(mergeSort(array));
