// function binary(arr,target){

//    let leftIndex=0
//    let rightIndex=arr.length-1

//     function search(arr,target,leftIndex,rightIndex){

//         if(rightIndex<leftIndex){
//             return -1
//         }

//      let middleIndex=Math.floor((leftIndex+rightIndex)/2)

//      if(target=== arr[middleIndex]){
//         return middleIndex
//      }

//   if(target<middleIndex){
//    return search(arr,target,0,middleIndex-1)
//   }else{
//    return search(arr,target,middleIndex+1,rightIndex)
//   }

//     }

// }

// console.log(binary([1,44,33,23,355,644,33,533,53577,7],23))

function binary(arr, target) {
  arr.sort((a, b) => a - b);

  return search(arr, target, 0, arr.length - 1);
}

function search(arr, target, leftIndex, rightIndex) {
  if (rightIndex < leftIndex) {
    return -1;
  }

  let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

  if (target === arr[middleIndex]) {
    return middleIndex;
  }

  if (target < arr[middleIndex]) {
    return search(arr, target, leftIndex, middleIndex - 1);
  } else {
    return search(arr, target, middleIndex + 1, rightIndex);
  }
}

console.log(binary([1, 44, 33, 23, 355, 644, 33, 533, 53577, 7], 23));
