 
function binary(arr,target){

    if(arr.length<1){
  return 'array not found'
    }
let temp=0
   for(i=0;i<arr.length;i++){
      for(j=i+1;j<arr.length;j++){
     
        if(arr[i]>arr[j]){
          temp=arr[i]
            arr[i]=arr[j]
            arr[j]= temp
        }
      }
   }
   console.log(arr)
let mid=0
   for(i=0;i<arr.length;i++){
      
       let middle=(arr.length-1)/2

        mid=arr[middle.toFixed(0)];
 
   }
   console.log(mid)

   let left= arr.slice(0,arr.length/2)
   let right= arr.slice(arr.length/2)
   
   console.log(left)
   console.log(right)

   if(target<mid){
    console.log('athe')
  
   }



   return -1


   }

console.log(binary([2,32,3,432,2,332,3,43,445,65],3))


function binary(arr,target){

 if(arr.length<1){
  return 'array not found'
    }

arr.sort((a,b)=>a-b)
console.log(arr)

   let leftIndex=0
   let rightIndex=arr.length-1


   while(leftIndex<=rightIndex){
     let middleIndex= Math.floor((leftIndex+rightIndex)/2)
       
     if(arr[middleIndex]===target){
      return middleIndex
     }else if(target<arr[middleIndex]){
        rightIndex=middleIndex-1

     }else{
      leftIndex=middleIndex+1
     }
   }

 return -1

}

console.log(binary([2,32,3,432,2,332,3,43,445,65],432))


// function binaryLastOccurrence(arr, target) {
//     if (arr.length < 1) {
//         return 'array not found';
//     }

//     arr.sort((a, b) => a - b);

//     console.log(arr)

//     let leftIndex = 0;
//     let rightIndex = arr.length - 1;
//     let firstOccurrence = -1;

//     while (leftIndex <= rightIndex) {
//         let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

//         if (arr[middleIndex] === target) {
//             // Update lastOccurrence and continue searching to the right
//             firstOccurrence = middleIndex;
//             rightIndex = middleIndex  -1;
//         } else if (target < arr[middleIndex]) {
//             rightIndex = middleIndex - 1;
//         } else {
//             leftIndex = middleIndex + 1;
//         }
//     }

//     if (firstOccurrence !== -1) {
//         return firstOccurrence;
//     } else {
//         return 'target not found';
//     }
// }

// console.log(binaryLastOccurrence([2, 32, 3, 432, 2, 332, 3, 43, 445, 65], 2));


