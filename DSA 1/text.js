// class Node{
//    constructor(value){
//    this.value=value
//    this.next=null
//    }
// }


// class LinkedList{
//    constructor(){
//       this.head=null
//       this.size=0
//    }


//   isEmpty(){
//   return this.size===0
// }

// getSize(){
//    return this.size
// }

// prepend(value){
//   const node=new Node(value)

//    if(this.isEmpty()){
//       this.head=node
//    }else{
//       node.next=this.head
//       this.head=node

//    }
//    this.size++
// }

// append(value){

//    const node =new Node(value)
//    if(this.isEmpty()){
//       this.head=node
//    }else{
//       let curr=this.head

//       while(curr.next){
//          curr=curr.next
//       }
//       curr.next=node

//    }
//    this.size++
// }

// search(value){

//    if(this.isEmpty()){
//       console.log('List is empty');
//       return -1
//    }

//    let curr=this.head
//    let i=0


//    while(curr){
//       if(curr.value===value){
//          return i
//       }

//       curr=curr.next
//       i++
//    }


// }

// removeFrom(index){
//  let removedNode; 
//    if(this.isEmpty()){
//       console.log('list is empty man');
//       return -1
//    }
//  if(index===0){
//  removedNode=this.head
//  this.head=this.head.next

//  }
//  if(index<0 || index>=this.size){
//    console.log('invalid index')
//  }else{
//    let prev=this.head
   
//    for(let i=0;i<index-1;i++){
//       prev=prev.next
//    }
//    removedNode=prev.next
//    prev.next=removedNode.next

//  }

//  this.size--
//  return removedNode.value

// }

// removeValue(value){
//    let removedNode
//    if(this.isEmpty()){
//       console.log('list is empty man')
//       return -1
//    }
//    if(this.head.value===value){

//        this.head=this.head.next

//        this.size--
//        return removedNode

//    }else{
  
//       let prev=this.head

//       while(prev.next && prev.next.value!==value){
//          prev=prev.next
//       }

//       removedNode=prev.next
//      prev.next = removedNode.next

//      this.size--
//      return removedNode.value

//    }

// }

// insert(value,index){
    
//    const node=new Node(value)
//    if(this.isEmpty()){
//       console.log('List is empty')
//    }
//    if(index<0||index>=this.size){
//       console.log('invalid index')
//       return null
//    }
//    if(index===0){
//       this.prepend(value)
//    }else{
//       let prev=this.head

//       for(let i=0;i<index-1;i++){
//         prev=prev.next
//       }



// node.next=prev.next
// prev.next=node

// this.size++
//    }

  

// }
// print(){
//    if(this.isEmpty()){
//       console.log('list is empty bro');
//    }
//    let listValues=''
//    let curr=this.head

//    while(curr){
//       listValues=listValues+`${curr.value} `
//       curr=curr.next
//    }
//    console.log(listValues);
// }

// }


// const list=new LinkedList()

// list.prepend(300)
// list.append(43)
// list.append(3)
// list.append(53)
// list.append(565)


// console.log(list.search(300));

// list.insert(10,3)
// list.print()
// console.log(list.getSize()); 



// function fibonacci(n){

//    let fibo=[0,1]
//    for(i=2;i<n;i++){
//       fibo[i]=fibo[i-1]+fibo[i-2]
//    }

//    console.log(fibo)
// }

// console.log(fibonacci(7)); 

// function factorial(n){
//  let sum=1
//   for(i=1;i<=n;i++){
//    sum=sum*i
//   }
//   console.log(sum)
// }

// factorial(4)

// function isPrime(n){

//    if(n<2){
//       return false
//    }
//    for(i=2;i<n;i++){
//       if(n%i==0){
//          return false
//       }
     
//    }

//     return true
// }


// console.log(isPrime(7)) 

// function powerTwo(n){
// if(n<1){
//    return false
// }
// if(n>1){
//    while(n>1){
//       if(n%2!==0){
//          return false
//       }
//       n=Math.floor( n/2)
//    }

//    return true

// }

// }

// console.log(powerTwo(8)) 


// function binarySearch(arr,target){
  
//    for(i=0;i<arr.length;i++){
      
//       for(j=i+1;j<arr.length;j++){
//          if(arr[i]>arr[j]){
//             let temp=arr[i]
//             arr[i]=arr[j]
//             arr[j]=temp
//          }
//       }
//    }

//    console.log(arr)



//       let leftIndex=0
//       let rightIndex=arr.length-1

    

// while(rightIndex>=leftIndex){
//       let middleIndex=Math.floor((leftIndex+rightIndex)/2)
//    if(middleIndex===target){
//       return middleIndex
//    }
//     if(target<middleIndex){
//          rightIndex=middleIndex-1
//       }else{
//          leftIndex=middleIndex+1
//       }

// }
      
// }

// console.log(binarySearch([1,2,22,3,32,3,22,32,2,35,5,67,7,7,8,8987,54,3],7)) 


// function isPowerTwo(n){

//    if(n<1){
//       return false
//    }

//    while(n>1){

//       if(n%2!==0){
//          return false

//       }

//       n=n/2
//    }
//  return true

// }

// console.log(isPowerTwo(8));

// let nestedArray = [1, [2, 3, [4, 5]], 6, [7, 8]];
// let newArr=[]
//  for(i=0;i<nestedArray.length;i++){
//    if(Array.isArray(nestedArray[i])){
//      for(j=0;j<nestedArray[i].length;j++){
//          newArr.push(nestedArray[i][j])
//      }
//    }else{
//    newArr.push(nestedArray[i])
//    }
//  }

// console.log(newArr)

// function flattenArray(arr) {
//     let res = []; // Declare the array inside the function

//     for (let i = 0; i < arr.length; i++) {
//         if (Array.isArray(arr[i])) {
//             flattenArray(arr[i]);
//         } else {
//             res.push(arr[i]);
//         }
//     }

//     console.log(res);
// }

// flattenArray([1, [2, 3, [4, 5]], 6, [7, 8]]);


// function flattenArray(arr) {
//     let res = [];

//     function recursiveFlatten(subArray) {
//         for (let i = 0; i < subArray.length; i++) {
//             if (Array.isArray(subArray[i])) {
//                 recursiveFlatten(subArray[i]);
//             } else {
//                 res.push(subArray[i]);
//             }
//         }
//     }

//     recursiveFlatten(arr);
//     console.log(res);
// }

// flattenArray([1, [2, 3, [4, 5]], 6, [7, 8]]);


// function flattenArray(arr){
   
//    let res=[]

//    function flatten(subArray){
//      for(let i=0;i<subArray.length;i++){
//       if(Array.isArray(subArray[i])){
//          flatten(subArray[i])
//       }else{
//          res.push(subArray[i])
//       }  

//      }

//    }
//    flatten(arr)
//    console.log(res)

// }

// flattenArray([1, [2, 3, [4, 5]], 6, [7, 8]]);





// function binary(arr,target){

//  arr.sort((a,b)=>a-b)


//  console.log(arr)

// let leftIndex=0
// let rightIndex=arr.length-1


//    while(rightIndex>=leftIndex){
 
//    let middleIndex= Math.floor((leftIndex+rightIndex)/2)   

//    if(arr[middleIndex]===target){
//       return middleIndex
//    }else if(target<arr[middleIndex]){
//     rightIndex=middleIndex-1
//    }else{
//       leftIndex=middleIndex+1
//    }

//    }

// }


// console.log(binary([1,2,3,2,23,21,2,344,3222,44],21)); 



// class Node{
//    constructor(value){
//    this.value=value
//    this.next=null
//    }
// }

// class LinkedList{
//    constructor(){
//       this.head=null
//       this.size=0
//    }

//    isEmpty(){
//       return this.size===0
//    }

//    getSize(){
//       return this.size
//    }

// prepend(value){
//    const node=new Node(value)

//    if(this.isEmpty()){
//       this.head=node
//    }else{

//      node.next=this.head
//      this.head=node

//    }
// this.size++

// }

// insert(value,index){

//    if(index<0&&index>=this.size){
//       console.log('invalid data')
//    }
//    if(index===0){
//      this.prepend(value)
//    }else{
//       const node=new Node(value)
//       let prev=this.head
//       for(let i=0;i<index-1;i++){
//       prev=prev.next
//       }

//      node.next= prev.next
//      prev.next=node
//    }

// }

// removeValue(value){

//    let removedNode;
//    if(this.head.value===value){
//       removedNode=this.head
//       this.head=this.head.next

//       this.size--
//       return removedNode.value
//    }else{
//       let prev=this.head

//       while(prev.next && prev.next.value !==value){
//          prev=prev.next
//       }

//       if(prev.next){
//          removedNode=prev.next
//         prev.next= removedNode.next

//         this.size--
//         return removedNode.value
//       }
//       return null
//    }


// }

// reverse(){

// let curr=this.head
// let prev=null
//    while(curr){
//       let next=curr.next
//       curr.next=prev
//       prev=curr
//       curr=next
//    }
//    this.head=prev
// }

// search(value){
   
//    if(this.isEmpty()){
//       console.log('list is empty')
//    }

//    let curr=this.head
//    let i=0

// while(curr){
 
// if(curr.value===value){
//    return i
// }
// curr=curr.next
// i++
// }
  
// }

//    print(){
      
//       if(this.isEmpty()){
//          console.log('list is empty man');
//       }else{
//          let curr=this.head
//          let listValues=''
//          while(curr){

//             listValues=listValues+`${curr.value} `
//             curr=curr.next

//          }
//          console.log(listValues)
//       }
//    }


// }


// const list=new LinkedList()

// list.prepend(100)
// list.insert(20,1)
// list.insert(222,1)
// list.prepend(299)
// list.insert(0,2)

// console.log(list.search(222)) 

// list.print()

// let arr=[[12,2],[22,2],[32,33]]
// let res=[]

// for(let i=0;i<arr.length;i++){

//    for(let j=0;j<arr[i].length;j++){
//       res.push(arr[i][j])
//    }
// }
// console.log(res)


// let str='amjadali'
// let newStr=''

// for(let i=0;i<str.length;i++){
//    if(i===0){
//       newStr= newStr+str[i].toUpperCase()
//    }else{
//       newStr=newStr+str[i]
//    }
// }

// console.log(newStr)



// let arr = [2, 24, 43, 3, 4, 5, 6, 7, 8];
// let res=[]
// for(let i=0;i<arr.length;i++){
   
//    let isPrime=true
//    if(arr[i]<2){
//        isPrime=false
//    }

//    for(let j=2;j<arr[i];j++){
//       if(arr[i]%j===0){
//          isPrime=false
//       }
//    }

//    if(isPrime==true){
//       res.push(arr[i])
//    }
// }

// console.log(res)


// let name='arunghosh'
// let newOne=''
// for(let i=0;i<name.length;i++){
//    if(i===0){
//       newOne=newOne+name[i].toUpperCase()
//    }else{
//       newOne=newOne+name[i]
//    }


   
// }
// console.log()


// class Node{
//     constructor(value){
//         this.value=value
//         this.next=null
//     }
// }

// class LinkedList{
//     constructor(){
//         this.head=null
//         this.size=0
//     }




// isEmpty(){
//     return this.size===0
// }



// getSize(){
//     return this.size
// }


//     removeValue(value){

// let removedNode;

//         if(this.isEmpty()){
//             console.log('empty bro');
//         }

//         if(value===this.head.value){
//             removedNode=this.head
//             this.head=this.head.next
//         }
//         let prev=this.head
//         while(prev.next && prev.next.value!==value){
//             prev=prev.next
//         }
        

//         if(prev.next){
//         removedNode=prev.next
//         prev.next=removedNode.next.next

//         this.size--
//         return removedNode.value
//         }
    
//         return null
//     }

//     append(value){

//      const node=new Node(value)

//       if(this.isEmpty()){
//         this.head=node
//       }else{
//         let prev=this.head

//         while(prev.next){
//             prev=prev.next
//         }

//        prev.next=node
//       }
//       this.size++
//     }

    
//     print(){
//      if(this.isEmpty()){
//         console.log('list is empty');
//      }else{
//         let listValues=''
//         let curr=this.head

//         while(curr){
//             listValues=listValues+`${curr.value} `
//              curr=curr.next
//         }
           
//         console.log(listValues)

//      }


//     }
// }






// const list=new LinkedList()

// list.append(20)
// list.append(100)
// list.append(33)
// list.append(55)


// console.log(list.removeValue(100))

// list.print()
// console.log(list.getSize()) 


// function countOccurrences(arr,target){
//     let count=0
   
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]===target){
//             count++
//         }
//     }

// return count

// }

// console.log(countOccurrences([2, 4, 6, 4, 8, 4, 10, 4, 12], 4)); // Output: 4


// const originalArray = [1, 2, 3, 4, 5];
// const reversedArray = reverseArray(originalArray);


// function reverseArray(arr){
//     for(let i=0;i<arr.length/2;i++){
        
//         let temp=arr[i]
//         arr[i]=arr[arr.length-1-i]
//         arr[arr.length-1-i]=temp

//     }
//     return arr

// }

// console.log(reversedArray); // Output: [5, 4, 3, 2, 1]


// function isPalindrome(str){

//    let arr= str.split('')

//   let newArr= arr.filter((ar,index)=>ar!==' ')

//    for(let i=0;i<newArr.length/2;i++){
      
//     let char1=newArr[i].toLowerCase()
//     let char2=newArr[newArr.length-1-i].toLowerCase()


//        if(char1!==char2){
//         return false
//        }

//        }
//      return true

//    }
// console.log(isPalindrome("A man a plan a canal Panama")); // Output: true
// console.log(isPalindrome("Hello, World!")); // Output: false



// const numbers = [3, 5, 2, 3, 8, 5, 10, 2];

// function removeDuplicates(num){
//     let res=[]

//     for(let i=0;i<num.length;i++){
//         let og=true
//         for(let j=i+1;j<num.length;j++){
//             if(num[i]==num[j]){
//              og=false
//              break;
//             }
//         }
//         if(og==true){
//         res.push(num[i])
//         }
//     }
//     return res


// }
// console.log(removeDuplicates(numbers)); // Output: [3, 5, 2, 8, 10]



// const sortedArray = [2, 4, 6, 8, 10, 12, 14, 16];
// const target = 10;

// function binarySearch(arr,target){

//     let leftIndex=0
//     let rightIndex=arr.length-1
  
   

//         while(rightIndex>=leftIndex){
//   let middleIndex=Math.floor((leftIndex+rightIndex)/2)
        
//         if(arr[middleIndex]===target){
//             return middleIndex
//         }
//         if(target<arr[middleIndex]){
//             rightIndex=middleIndex-1
//         }else{
//             leftIndex=middleIndex+1
//         }

//     }

// }

// console.log(binarySearch(sortedArray, target)); // Output: 4


// const sortedArray = [1, 2, 2, 2, 4, 4, 6, 8, 10];
// const target = 2;

// function findFirstOccurrence(arr,target){

//     let leftIndex=0
//     let rightIndex=arr.length-1
//     let result=-1

//     while(rightIndex>=leftIndex){
//         let middleIndex=Math.floor((leftIndex+rightIndex)/2)

//         if(target===arr[middleIndex]){
//      result=middleIndex
//      rightIndex=middleIndex-1
//         }

//         if(target<middleIndex){
//             rightIndex=middleIndex-1
//         }else{
//             leftIndex=middleIndex+1
//         }
//     }
//     return result

// }

// console.log(findFirstOccurrence(sortedArray, target)); // Output: 1


// const sortedArray = [1, 2, 2, 2, 4, 4, 6, 8, 10];
// const target = 2;

// function findLastOccurrence(arr,target){

//     let leftIndex=0
//     let rightIndex=arr.length-1
//     let res=-1

//     while(rightIndex>=leftIndex){
//         let middleIndex=Math.floor((leftIndex+rightIndex)/2)

//         if(target===arr[middleIndex]){
//           res=middleIndex
//           rightIndex=middleIndex+1
//         }
//         if(target<arr[middleIndex]){
//             rightIndex=middleIndex+1
//         }else{
//             leftIndex=middleIndex-1
//         }
//     }

//     return res

// }

// console.log(findLastOccurrence(sortedArray, target)); // Output: 3


// function findFirstOccurrence(arr, target) {
//     let leftIndex = 0;
//     let rightIndex = arr.length - 1;
//     let result = -1;

//     while (rightIndex >= leftIndex) {
//         let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

//         if (arr[middleIndex] === target) {
//             result = middleIndex;
//             rightIndex = middleIndex - 1; // Adjust the search space to the left
//         } else if (target < arr[middleIndex]) {
//             rightIndex = middleIndex - 1;
//         } else {
//             leftIndex = middleIndex + 1;
//         }
//     }

//     return result;
// }

// console.log(findFirstOccurrence([1, 2, 2, 2, 4, 4, 6, 8, 10],2)) 

// function findLastOccurrence(arr, target) {
//     let leftIndex = 0;
//     let rightIndex = arr.length - 1;
//     let result = -1;

//     while (rightIndex >= leftIndex) {
//         let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

//         if (arr[middleIndex] === target) {
//             result = middleIndex;
//             leftIndex = middleIndex + 1; // Adjust the search space to the left
//         } else if (target < arr[middleIndex]) {
//             rightIndex = middleIndex - 1;
//         } else {
//             leftIndex = middleIndex + 1;
//         }
//     }

//     return result;
// }

// console.log(findLastOccurrence([1, 2, 2, 2, 4, 4, 6, 8, 10],2)) 


// function factorial(num){

// let sum=1
//       for(let i=1;i<=num;i++){

//         sum=sum*i
//       }
//       console.log(sum)
// }

// factorial(5)

// function fibonacci(num){
// let res=[0,1]

// for(let i=2;i<num;i++){
//     res[i]=res[i-1]+res[i-2]
// }

// console.log(res)

// }

// fibonacci(7)

// class Node{
//     constructor(value){
//         this.value=value
//         this.next=null
//     }
// }

// class LinkedList{
//     constructor() {
//         this.head=null
//         this.size=0
//     }

//     isEmpty(){
//         return this.size===0
//     }

//     getSize(){
//         return this.size
//     }

// prepend(value){

//     const node=new Node(value)

//     if(this.isEmpty()){
//         this.head=node
//     }else{

//         node.next=this.head
//         this.head=node
//     }
//     this.size++

// }

// append(value){
//     const node=new Node(value)

//     if(this.isEmpty()){
//         this.head=node
//     }else{
//         let prev=this.head

//         while(prev.next){
//         prev=prev.next
//         }
//         prev.next=node
    
//     }
//     this.size++
// }

// search(value){

//     if(this.isEmpty()){
//    console.log('list is empty man');
//     }
//     let curr=this.head
//     let i=0

//     while(curr){
//         if(curr.value===value){

      
//             return i

//         }
//       curr=curr.next
//         i++
//     }
    

// }

// insert(value,index){

//     if(index<0 || index>=this.size){
//         console.log('invalid index')
//     }

//     if(index===0){
//         this.prepend(value)
//     }else{

//         const node =new Node(value)

//         let prev=this.head
//         for(let i=0;i<index-1;i++){
//             prev=prev.next
//         }

//         node.next=prev.next
//         prev.next=node

//         this.size++
//     }


// }

// reverse(){
  
//   let curr=this.head
//   let prev=null

//   while(curr){
//     let next=curr.next
//     curr.next=prev
//     prev=curr
//     curr=next
//   }
//   this.head=prev
// }

// removeFrom(index){

//     let removedNode;
//     if(index<0 || index>=this.size){
//         console.log('invalid index')
//     }

//     if(index===0){
//   this.head=this.head.next
//     }else{

//         let prev=this.head
//         for(let i=0;i<index-1;i++){

//         prev=prev.next

//         }

//        removedNode= prev.next
//        prev.next=removedNode.next


//        this.size--
//        return removedNode.value
//     }
// }


// removeValue(value){

//     if(this.isEmpty()){
//         console.log('list is empty bro')
//     }

// if(this.head.value===value){
//     let removedNode=this.head

//     this.head=this.head.next

//     this.size--
//     return value
    
// }else{
//  let prev=this.head

//     while(prev.next && prev.next.value !==value){
//         prev=prev.next
//     }

//     if(prev.next){
//     let removedNode=prev.next
//     prev.next=removedNode.next

//     this.size--
//     return removedNode.value
//     }

//     return null

//     }

// }


//  print(){
//     if(this.isEmpty()){
//         console.log('List is empty')
//     }else{
//          let curr=this.head
//          let listValues=''
//          while(curr){
//             listValues=listValues+`${curr.value} `
//             curr=curr.next
//          }
//          console.log(listValues)
//     }
//  }


// }


// const list =new LinkedList()

// list.append(22)
// list.append(55)
// console.log(list.search(55))
// list.insert(445,1)

// console.log(list.removeValue(55))


// list.print()



// function binary(arr,target){

//     arr.sort((a,b)=>a-b)
//     return search(arr,target,0,arr.length-1)
// }

// function search(arr,target,leftIndex,rightIndex){

//     if(rightIndex<leftIndex){
//         return -1
//     }

//   let middleIndex = Math.floor((leftIndex + rightIndex) / 2);


//     if(target==arr[middleIndex]){
//         return middleIndex
//     }
//     if(target<arr[middleIndex]){
//         return search(arr,target,leftIndex,middleIndex-1)

//        }else{
//         return search(arr,target,middleIndex+1,rightIndex)
//        }
// }


// console.log(binary([2,32,3,432,2,332,3,43,445,65],3)) 





// class Node{
//     constructor(value){

//         this.value=value
//         this.next=null
//     }

// }


//     class LinkedList{

//         constructor(){
//             this.head=null
//             this.size=0
//         }

//         isEmpty(){

//             return this.size===0
//         }
//         getSize(){
//             return this.size

//         }



//         prepend(value){

//             const node =new Node(value)

//             if(this.isEmpty()){
//                 this.head=node
//             }else{
//                node.next=this.head
//                this.head=node
//             }

//             this.size++
//         }


//                 insert(value,index){

//             if(index<0 && index>=this.size){
//                 console.log('invalid index')
//             }


//             if(index===0){
//                 this.prepend(value)
//             }else{
//                 const node=new Node(value)

//                 let prev=this.head
        
//                 for(let i=0;i<index-1;i++){
//                     prev=prev.next
//                 }

//                 node.next=prev.next
//                 prev.next=node

//                 this.size++
//             }

//         }

//         print(){

//             let curr=this.head
//             let listValues=''
//             while(curr){
//                 listValues=listValues+`${curr.value} `
//                 curr=curr.next
//             }
//             console.log(listValues)
//         }
//     }


//     const list =new LinkedList()

//     list.prepend(100)
//     list.insert(10,1)
//     list.print()


// function fibonacci(n){

//     let fibo=[0,1]

//     for(let i=2;i<n;i++){
     
//         fibo[i]=fibo[i-1]+fibo[i-2]
//     }
//     console.log(fibo)
// }
// fibonacci(5)

function factorial(n){

let sum=1
    for(let i=2;i<=n;i++){
        sum=sum*i

    }

    console.log(sum)
}


factorial(5)