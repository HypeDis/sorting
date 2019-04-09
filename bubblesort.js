function bubbleSort(arr) {
  if (arr.length === 0) {
    return [];
  }
  let hasSwapped = false;

  for (let i = 0; i < arr.length - 1; i++) {
    if (compare(arr[i], arr[i + 1])) {
      [arr[i], arr[i + 1]] = swap(arr[i], arr[i + 1]);
      hasSwapped = true;
    }
  }
  if (hasSwapped) {
    bubbleSort(arr);
  }
  return arr;
}

function swap(a, b) {
  return [b, a];
}
function compare(num1, num2) {
  return num1 > num2;
}
