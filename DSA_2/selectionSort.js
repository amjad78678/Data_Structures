function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let temp = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[temp]) {
        temp = j;
      }
    }

    let noob = arr[i];
    arr[i] = arr[temp];
    arr[temp] = noob;
  }

  return arr;
}

const arr = [8, 20, -2, 4, -6];

console.log(selectionSort(arr));
