// function quickSort(arr) {
//   if (arr.length < 2) {
//     return arr;
//   }

//   let pivot = arr[arr.length - 1];

//   let left = [];
//   let right = [];

//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] < pivot) {
//       left.push(arr[i]);     
//     } else {
//       right.push(arr[i]);
//     }
//   }

//   return [...quickSort(left), pivot, ...quickSort(right)];
// }

// const arr = [8, 20, -2, 4, -6];

// console.log(quickSort(arr));
              



function QuickSort(arr,low=0,high=arr.length-1){

if(low<high){
    let partition = Partition(arr, low, high);

    QuickSort(arr, low, partition - 1);
    QuickSort(arr, partition + 1, high);
}

return arr

}

function Partition(arr,low,high){

    let pivot=arr[high]
    let i=low-1

    for(let j=low;j<high;j++){

        if(arr[j]<pivot){
            i++
         [arr[i],arr[j]]=[arr[j],arr[i]]
        }
    }

    [arr[i+1],arr[high]]=[arr[high],arr[i+1]]

    return i+1
}

console.log( QuickSort([12, 12, 33, 223, 44, 34, 4, 3, 6, 4334, 5]))