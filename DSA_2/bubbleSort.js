function bubbleSort(arr) {
  let changed;
  do {
    changed = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;

        changed = true;
      }
    }
  } while (changed == true);

  return arr;
}

console.log(bubbleSort([12, 23, 2, 12, 3, 334, 4]));
