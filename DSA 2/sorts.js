function bubbleSort(arr) {
  let changed;

  do {
    changed = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;

        changed = true;
      }
    }
  } while (changed == true);

  console.log(arr);
}

bubbleSort([23, 2, 43, 45, 3, 34, 56, 67, 8, 96]);

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let numberToInsert = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > numberToInsert) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = numberToInsert;
  }

  console.log(arr);
}

insertionSort([23, 2, 43, 45, 3, 34, 56, 67, 8, 96]);

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);

  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  let sortedArr = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sortedArr.push(left.shift());
    } else {
      sortedArr.push(right.shift());
    }
  }

  return [...sortedArr, ...left, ...right];
}

console.log(mergeSort([23, 2, 43, 45, 3, 34, 56, 67, 8, 96]));

function quickSort(arr, low = 0, high = arr.length - 1) {
  if (low < high) {
    let partition = Partition(arr, low, high);

    quickSort(arr, low, partition - 1);
    quickSort(arr, partition + 1, high);
  }

  return arr;
}

function Partition(arr, low, high) {
  let pivot = arr[high];
  let i = low - 1;

  for (let j = low; j < high; j++) {
    if (arr[j] < pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];

  return i + 1;
}

console.log(quickSort([23, 2, 43, 45, 3, 34, 56, 67, 8, 96]));

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let temp = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[temp]) {
        temp = j;
      }
    }

    let bot = arr[i];
    arr[i] = arr[temp];
    arr[temp] = bot;
  }
  return arr;
}
console.log(selectionSort([23, 2, 43, 45, 3, 34, 56, 67, 8, 96]));
