// function bubbleSort(arr){

//     let changed

//     do{
//         changed=false
//    for(let i=0;i<arr.length;i++){
//         if(arr[i]>arr[i+1]){

//             let temp=arr[i]
//             arr[i]=arr[i+1]
//             arr[i+1]=temp

//             changed=true
//         }
//     }

//     }while(changed==true)

//     return arr

// }

// const arr = [8, 20, -2, 4, -6];
// console.log(bubbleSort(arr));

// function insertionSort(arr){

//     for(let i=1;i<arr.length;i++){
//         let numberToInsert=arr[i]

//         let j=i-1

//         while(j>=0 && arr[j]>numberToInsert){

//             arr[j+1]=arr[j]

//             j--
//         }

//         arr[j+1]=numberToInsert
//     }
// }

// const arr = [8, 20, -2, 4, -6];

// console.log(insertionSort(arr));

// console.log(arr);

// function quickSort(arr){

//         if(arr.length<2){
//             return arr
//         }

//     let pivot=arr[arr.length-1]
//     let leftArr=[]
//     let rightArr=[]

//     for(let i=0;i<arr.length-1;i++){
//         if(arr[i]<pivot){
//             leftArr.push(arr[i])
//         }else{
//             rightArr.push(arr[i])
//         }
//     }

//     return [...quickSort(leftArr),pivot,...quickSort(rightArr)]
// }

// function bubbleSort(arr){

//     let changed

//     do{
// changed=false

//      for(let i=0;i<arr.length;i++){

//         if(arr[i]>arr[i+1]){
//             let temp=arr[i]
//             arr[i]=arr[i+1]
//             arr[i+1]=temp

//             changed=true
//         }
//     }

//     }while(changed==true)

// }

// function insertionSort(arr){

//     for(let i=1;i<arr.length;i++){
//         let numberToInsert=arr[i]

//         let j=i-1

//         while(j>=0 && arr[j]>numberToInsert){
//             arr[j+1]=arr[j]
//             j--
//         }

//         arr[j+1]=numberToInsert

//     }
// }

// const arr = [8, 20, -2, 4, -6];

// console.log(insertionSort(arr));

// console.log(arr);

// function quickSort(arr){

// if(arr.length<2){
//     return arr
// }

//     const pivot=arr[arr.length-1]

//     let left=[]
//     let right=[]

//     for(let i=0;i<arr.length-1;i++){

//         if(arr[i] <pivot ){
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }
//     }

//     return [...quickSort(left),pivot,...quickSort(right)]

// }

// const arr = [8, 20, -2, 4, -6];

// console.log(quickSort(arr));

// console.log(arr);

// function mergeSort(arr){

//     if(arr.length<2){
//         return arr
//     }

//     let mid = Math.floor(arr.length/2);

//     let leftArr=arr.slice(0,mid)

//     let rightArr=arr.slice(mid)

//     return merge(mergeSort(leftArr),mergeSort(rightArr))

// }

// function merge(leftArr,rightArr){

//     const sortedArr=[]

//    while(leftArr.length && rightArr.length){

//     if(leftArr<=rightArr){
//         sortedArr.push(leftArr.shift())
//     }else{
//         sortedArr.push(rightArr.shift());
//     }

//    }

//    return [...sortedArr,...leftArr,...rightArr]

// }

// const arr = [8, 20, -2, 4, -6];

// console.log(mergeSort(arr));

// console.log(arr);

// function selectionSort(arr){

//     for(let i=0;i<arr.length-1;i++){

//         let temp=i

//         for(let j=i+1;j<arr.length;j++){

//             if(arr[j]<arr[temp]){
//                   temp=j
//             }

//         }

//         let bot=arr[i]
//         arr[i]=arr[temp]
//         arr[temp]=bot
//     }

//     return arr

// }

//  const arr = [8, 20, -2, 4, -6];
// console.log(selectionSort(arr));

// function insertionSort(arr){

//     for(let i=1;i<arr.length;i++){

//        let numberToInsert= arr[i]

//        let j=i-1

//        while(j>=0 && arr[j]>numberToInsert){
//         arr[j+1]=arr[j]
//         j--
//        }

//        arr[j+1]=numberToInsert

//     }
//   console.log(arr)

// }

//  const arr = [8, 20, -2, 4, -6];
// insertionSort(arr)

// function bubbleSort(arr){

//      let changed

//      do{

//         changed=false

//      for(let i=0;i<arr.length;i++){

//         if(arr[i]>arr[i+1]){

//             let temp =arr[i]
//             arr[i]=arr[i+1]
//             arr[i+1]=temp

//             changed=true
//         }
//      }

//      }while(changed==true)

// }

//  const arr = [8, 20, -2, 4, -6];
// bubbleSort(arr);
// console.log(arr)

// function quickSort(arr, left = 0, right = null) {
//   if (right === null) {
//     right = arr.length - 1;
//   }

//   if (left < right) {
//     const pivotIndex = partition(arr, left, right);
//     quickSort(arr, left, pivotIndex - 1);
//     quickSort(arr, pivotIndex + 1, right);
//   }
// }

// function partition(arr, left, right) {
//   const pivot = arr[right];
//   let i = left - 1;

//   for (let j = left; j < right; j++) {
//     if (arr[j] <= pivot) {
//       i++;
//       [arr[i], arr[j]] = [arr[j], arr[i]];
//     }
//   }

//   [arr[i + 1], arr[right]] = [arr[right], arr[i + 1]];
//   return i + 1;
// }

// const arr = [8, 20, -2, 4, -6];
// quickSort(arr);
// console.log(arr);

// function selectionSort(arr){

//     for(let i=0;i<arr.length;i++){
//         let temp=arr[i]

//         for(let j=i+1;j<arr.length;j++){

//         }

//     }

// }

// const arr = [8, 20, -2, 4, -6];
// selectionSort(arr);
// console.log(arr);

// class Queue{
//     constructor(){
//         this.items={}
//         this.front=0
//         this.back=0
//     }

//     isEmpty(){
//         return this.back-this.front===0
//     }

//     getSize(){
//         return this.back-this.front
//     }
//    enqueue(element){

//     this.items[this.back]=element
//     this.back++

//    }

//    dequeue(){
//     const item=this.items[this.front]
//     delete this.items[this.front]
//     this.front++
//     return item
//    }

//    print(){
//     console.log(Object.values(this.items));
//    }
// }

// const queue=new Queue()

// queue.enqueue(10)
// queue.enqueue(22)

// queue.print()
// queue.isEmpty()
// console.log(queue.getSize());

// function mergeSort(arr){

//     //base case

//     if(arr.length<2){
//         return arr
//     }

//     let mid=Math.floor(arr.length/2)

//     let left = mergeSort(arr.slice(0, mid));
//     let right = mergeSort(arr.slice(mid))

//     return merge(left,right)

// }

// function merge(left,right){

//     let sortedArr=[]

//     while(left.length && right.length){
//         if(left[0]<right[0]){
//        sortedArr.push(left.shift())
//         }else{
//             sortedArr.push(right.shift())
//         }
//     }

//     return [...sortedArr,...left,...right]

// }

// const arr = [8, 20, -2, 4, -6];

// console.log(mergeSort(arr));

// class hashTable{
//   constructor(size) {
//       this.table=new Array(size)
//       this.size=size
//   }

//   hash(key){

//     let total=0
//     for(let i=0;i<key.length;i++){
//         total=total+key.charCodeAt(i)
//     }

//     return total%this.size

//   }

//   set(key,value){
//     const index=this.hash(key)

//     this.table[index]=value
//   }

//   get(key){
//     const index=this.hash(key)
//     return this.table[index]
//   }

//   display(){

//     for(let i=0;i<this.table.length;i++){
//         if(this.table[i]){
//          console.log(i, this.table[i]);
//         }
//     }
//   }

// }

// const table=new hashTable(50)

// table.set("name","amjadali")

//    console.log(table.get("name"))

//    table.set("age",67)

//    table.display()

// function bubbleSort(arr){

//     let changed

//     do{
//         changed=false
//         for(let i=0;i<arr.length;i++){
//             if(arr[i]>arr[i+1]){
//                 let temp=arr[i]
//                 arr[i]=arr[i+1]
//                 arr[i+1]=temp

//                 changed=true
//             }

//         }
//     }while(changed==true)

//     console.log(arr)

// }

// bubbleSort()

// function selectionSort(arr){

//     for(let i=0;i<arr.length-1;i++){

//         let temp=i

//         for(let j=i+1;j<arr.length;j++){

//         if(arr[j]<arr[temp]){
//             temp=j

//         }

//         let bot=arr[i]
//         arr[i]=arr[temp]
//         arr[temp]=bot

//         }

//     }

//     console.log(arr)
// }

// selectionSort([2, 334, 45543, 33434, 43, 44, 56, 4]);

// function mergeSort(arr){

//     if(arr.length<2){
//         return arr
//     }

//         let mid=Math.floor(arr.length/2)

//         let left= mergeSort(arr.slice(0,mid))
//         let right= mergeSort(arr.slice(mid))

//         return merge(left,right)

// }

// function merge(left,right){

//     let sortedArr=[]
//     while(left.length&&right.length){
//     if (left[0] > right[0]) {
//       sortedArr.push(right.shift());
//     } else {
//       sortedArr.push(left.shift());
//     }
//     }

//     return [...sortedArr,...left,...right]

// }

// console.log( mergeSort([2, 334, 45543, 33434, 43, 44, 56, 4]))

// function insertionSort(arr){

//     for(let i=1;i<arr.length;i++){

//         let numberToInsert=arr[i]

//         let j = i - 1;

//         while(j>=0 && arr[j] > numberToInsert){

//            arr[j+1]=arr[j]

//              j--;
//         }

//         arr[j+1]=numberToInsert

//     }

//     return arr
// }

// console.log( insertionSort([2, 334, 45543, 33434, 43, 44, 56, 4]))

// let name = 'my name is        amjad';

// let newArr = name.split(' ');

// newArr=newArr.filter((item)=>item!=="")

// console.log(newArr);
// let result = [];

// for (let i = newArr.length - 1; i >= 0; i--) {
//   result.push(newArr[i]);
// }

// console.log(result.join(' ').trim())

// let bracket="({[})"

// let newArr=bracket.split('')

// console.log(newArr)
// let stack=[]
// let open=['(','{','[']
// for(let i=0;i<bracket.length;i++){

//     if(open.includes(bracket[i])){
//         stack.push(bracket[i])
//     }
// }
// console.log(stack)

// for(let j=0;j<stack.length;j++){
// let check = stack[j];
// console.log(check)
// if (check === newArr[stack.length - 1]) {
//     console.log(true)
// }else{
//     console.log(false)
// }
// }

// function isValid(s) {
//   const stack = [];

//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === '{' || s[i] === '(' || s[i] === '[') {
//       stack.push(s[i]);
//     } else if (s[i] === '}' || s[i] === ')' || s[i] === ']') {
//       if (isEmpty(stack)) {
//         return false;
//       }

//       const top = stack.pop();

//       if (
//         (s[i] === ')' && top !== '(') ||
//         (s[i] === ']' && top !== '[') ||
//         (s[i] === '}' && top !== '{')
//       ) {
//         return false;
//       }
//     }
//   }

//   return isEmpty(stack);
// }

// function isEmpty(value) {
//   return value.length === 0;
// }

// console.log(isValid('[{}(){}]'));

// function mergeSort(arr){

//     if(arr.length<2){
//         return arr
//     }

//         let mid=Math.floor(arr.length/2)
//         let left =mergeSort( arr.slice(0,mid))
//         let right=mergeSort( arr.slice(mid))

// return merge(left,right)

// }

// function merge(left,right){

//     let sortedArr=[]

//     while(left.length &&right.length){

//         if(left[0]<right[0]){
//             sortedArr.push(left.shift())
//         }else{
//             sortedArr.push(right.shift())
//         }
//     }

//     return [...sortedArr,...left,...right]
// }

// console.log(mergeSort([12, 3, 2343, 42, 34, 45]));

// function insertionSort(arr){

// for(let i=1;i<arr.length-1;i++){
//     let numberToInsert=arr[i]

//     let j=i-1

//     while(j>=0 && arr[j]>numberToInsert){
//         arr[j+1]=arr[j]
//         j--
//     }
//     arr[j+1]=numberToInsert
// }
// return arr
// }

// console.log(insertionSort([12, 3, 2343, 42, 34, 45]));

// function selectionSort(arr){

//     for(let i=0;i<arr.length-1;i++){
//         let temp=i

//         for(let j=i+1 ;j<arr.length;j++){
//           if(arr[j]<arr[temp]){

//             temp=j
//           }

//         }

//         let bot=arr[i]
//         arr[i]=arr[temp]
//         arr[temp]=bot
//     }
//     return arr
// }

// console.log(selectionSort([12, 3, 2343, 42, 34, 45]));

// function quickSort(arr){

//     if(arr.length<2){
//         return arr
//     }

//     let pivot=arr[arr.length-1]
//     let left=[]
//     let right=[]

//     for(let i=0;i<arr.length-1;i++){
//         if(arr[i]<pivot){
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }

//     }

//     return [...quickSort(left),pivot,...quickSort(right)]
// }

// console.log(quickSort([12, 3, 2343, 42, 34, 45]));

// function selectionSort(arr){

//     for(let i=0;i<arr.length-1;i++){
//         let temp=i

//         for(let j=i+1;j<arr.length;j++){
//             if(arr[j]<arr[temp]){
//                 temp=j
//             }
//         }

//         let bot=arr[i]
//         arr[i]=arr[temp]
//         arr[temp]=bot

//     }
//     return arr
// }

// console.log(selectionSort([12, 3, 2343, 42, 34, 45]));

// function quickSort(arr){

//     if(arr.length<2){
//         return arr
//     }
//     let pivot = arr[arr.length - 1];
//     let left=[]
//     let right=[]
//     for(let i=0;i<arr.length-1;i++){
//         if(arr[i]<pivot){
//         left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }
//     }
//     return [...quickSort(left),pivot,...quickSort(right)]
// }

// console.log(quickSort([12, 3, 2343, 42, 34, 45]));

// class Stack{
//     constructor(){
//         this.stack=[]
//     }

//     isEmpty(){
//        return this.stack.length===0
//     }

//     getSize(){
//         return this.stack.length
//     }

// push(element){
//     this.stack.push(element)
// }

// pop(){
//    return this.stack.pop()
// }

// peek(){
//     if(this.isEmpty()){
//         console.log('list is empty cant peek')
//     }else{
//     this.stack[this.stack.length - 1];
//     }

// }

// print(){
//   let listValues=''
//   for(let i=0;i<this.stack.length;i++){
//     listValues=listValues+`${this.stack[i]} `
//   }
//   console.log(listValues);
// }

// }
// const stack=new Stack()

// stack.push(23)
// stack.push(45);

// stack.pop()
// stack.push(63)
// stack.push(333)

// stack.print()
// console.log(stack.peek());
// console.log(stack.getSize());

// class Node{
//     constructor(element){
//         this.value=element
//         this.next=null
//     }
// }

// class stackLinkedList{

//     constructor(){
//         this.top=null
//         this.size=0
//     }

//     isEmpty(){
//         return this.size===0
//     }

//     getSize(){
//         return this.size
//     }

//     push(value){

//         const node=new Node(value)

//         if(this.isEmpty()){
//             this.top=node

//         }else{
//             node.next=this.top
//             this.top=node
//         }
//         this.size++
//     }

//     pop(){

//         if(this.isEmpty()){
//             console.log('list is empty cant pop');
//         }else{
//             let removedNode=this.top
//             this.top =this.top.next

//             this.size--
//             return removedNode.value

//         }
//     }

//     peek(){
//         return this.top.value
//     }

//     print(){
//         let listValues=''
//         let curr=this.top
//         while(curr){
//             listValues=listValues+`${curr.value} `
//             curr=curr.next
//         }
//         console.log(listValues)
//     }
// }

// const stack=new stackLinkedList()

// stack.push(20)
// stack.push(34)
// stack.push(54)
// stack.pop()
// stack.pop()
// console.log(stack.peek());
// stack.print()

// class Node{
//     constructor(value){
//          this.value = value;
//          this.next = null;
//          this.prev=null

//     }
// }

// class Queue{
//     constructor(){
//     this.head=null
//     this.rear=null
//     this.size=0

//     }

//     isEmpty(){
//         return this.size===0
//     }

//     getSize(){
//         return this.size
//     }

//     enqueue(value){
//         const node=new Node(value)

//         if(this.isEmpty()){

//             this.head=node
//             this.rear=node
//         }else{

//           this.rear.next=node
//           this.rear=node
//         }

//         this.size++
//     }

//     dequeue(){

//         let removedNode=this.head

//         this.head=this.head.next

//         this.size--
//         return removedNode.value
//     }
// peek(){
//     return this.head.value
// }

//     print(){
//         let listValues=''

//         let curr=this.head

//         while(curr){
//             listValues=listValues+`${curr.value} `
//             curr=curr.next
//         }
//         console.log(listValues)
//     }
// }

// const queue=new Queue()

// queue.enqueue(10)
// queue.enqueue(625)
// queue.enqueue(57)
// queue.enqueue(746)

// queue.dequeue()
// console.log(queue.peek());
// queue.print()

// class Queue{
//     constructor(){
//         this.queue={}
//         this.head=0
//         this.tail=0
//     }

//     enqueue(value){

//         this.queue[this.tail]=value
//         this.tail++

//     }

//     dequeue(){
//         let removedItem=this.queue[this.head]
//         delete this.queue[this.head]

//         this.head++
//         return removedItem
//     }

//     peek(){
//         if(this.isEmpty()){
//             console.log('the list is empty cant peek');
//         }else{
//             return this.queue[this.head]

//         }
//     }

//     isEmpty(){
//         return this.head-this.tail===0
//     }

//     getSize(){
//         return this.tail-this.head
//     }

//     print(){
//         let elements=[]
//         for(let i=this.head;i<this.tail;i++){
//            elements.push(this.queue[i])
//         }
//         return elements
//     }

// }

// const queue=new Queue()

// console.log(queue.print())

// console.log(queue.isEmpty())

// console.log(queue.getSize())

// console.log(queue.peek())

// class hashTable {
//   constructor(value) {
//     this.table = new Array(value);
//     this.size = value;
//   }

//   hash(key) {
//     let total = 0;
//     for (let i = 0; i < key.length; i++) {
//       total = total + key.charCodeAt(i);
//     }
//     return total % this.size;
//   }

//   set(key, value) {
//     const index = this.hash(key);

//     const bucket = this.table[index];

//     if (!bucket) {
//       this.table[index] = [[key, value]];
//     } else {
//       const sameKeyItem = bucket.find((item) => item[0] === key);

//       if (sameKeyItem) {
//         sameKeyItem[1] = value;
//       } else {
//         bucket.push([key, value]);
//       }
//     }
//   }

//   get(key) {
//     const index = this.hash(key);

//     const bucket = this.table[index];

//    if(bucket) {
//       const sameKeyItem = bucket.find((item) => item[0] === key);

//       if (sameKeyItem) {
//         return sameKeyItem[1];
//       }
//     }

//     return undefined
//   }

//   remove(key) {
//     const index = this.hash(key);

//     const bucket = this.table[index];

//     if (bucket) {
//       const sameKeyItem = bucket.find((item) => item[0] === key);

//       if (sameKeyItem) {
//         bucket.splice(bucket.indexOf(sameKeyItem), 1);
//       }
//     }
//   }

//   display() {

//     for (let i = 0; i < this.table.length; i++) {
//       if (this.table[i]) {
//         console.log(i, this.table[i]);
//       }
//     }
//   }
// }

// const table =new hashTable(50)

//   table.set("name","amjadali")
//   table.set("age",45)
//   table.set('mane',"arunghosh")

// //table.set("kane","homes")

//    console.log(table.get("age"));
//    console.log(table.get('name'));

//    console.log(table.get("kane"))
//    table.set('address','thattankandiyil')

//    table.display()

// class hashTable{
//     constructor(size){
//         this.table=new Array(size)
//         this.size=size
//     }

//     hash(key){

//     let total=0
//     for(let i=0;i<key.length;i++){
//         total=total+key.charCodeAt(i)
//     }
//     return total%this.size

//     }
//     set(key,value){

//    const index=this.hash(key)

//    const bucket=this.table[index]

//    if(!bucket){
//     this.table[index]=[[key,value]]
//    }else{
//     const sameKeyItem=bucket.find((item)=>item[0]===key)
//     if(sameKeyItem){
//         sameKeyItem[1]=value
//     }else{
//         bucket.push([key,value])
//     }
//    }
//     }

//     get(key){

//         const index=this.hash(key)

//         const bucket=this.table[index]

//         if(bucket){
//             const sameKeyItem=bucket.find((item)=>item[0]===key)

//             if(sameKeyItem){
//                 return sameKeyItem[1]
//             }
//         }

//     }

//     remove(key){

//         const index=this.hash(key)

//         const bucket=this.table[index]

//         if(bucket){

//             const sameKeyItem=bucket.find((item)=>item[0]===key)

//            const res = bucket.splice(bucket.indexOf(sameKeyItem),1)
//            return res
//         }

//     }

//     display(){

//         for(let i=0;i<this.table.length;i++){

//             if(this.table[i]){
//                 console.log(i,this.table[i])
//             }
//         }
//     }
// }

// const table=new hashTable(50)

// table.set("name","amjadali")
// table.set("mane","ammu")

// console.log(table.get('name'));

// console.log(table.remove('mane'));
// table.display()

// function bubbleSort(arr){

//     let changed

//     do{
//          changed=false
//         for(let i=0;i<arr.length;i++){

//             if(arr[i]>arr[i+1]){

//                 let temp=arr[i]
//                 arr[i]=arr[i+1]
//                 arr[i+1]=temp

//                 changed=true
//             }
//         }
//     }while(changed==true)

//     console.log(arr)
// }

// bubbleSort([34,342,2,23,45,4,35,6])

// function selectionSort(arr){

//     for(let i=0;i<arr.length-1;i++){

//         let temp=i

//         for(let j=i+1;j<arr.length;j++){

//             if(arr[j]<arr[temp]){
//                 temp=j
//             }
//         }

//         let bot=arr[i]
//         arr[i]=arr[temp]
//         arr[temp]=bot
//     }
//     console.log(arr)
// }

// selectionSort([34, 342, 2, 23, 45, 4, 35, 6]);

// function insertionSort(arr){

//     for(let i=1;i<arr.length;i++){

//         let numberToInsert=arr[i]

//         let j=i-1

//         while(arr[j]>numberToInsert){

//             arr[j+1]=arr[j]

//             j--
//         }

//         arr[j+1]=numberToInsert
//     }

//     console.log(arr)
// }

// insertionSort([34, 342, 2, 23, 45, 4, 35, 6]);

// function quickSort(arr){

//     if(arr.length<2){
//         return arr
//     }
//     let pivot=arr[arr.length-1]
//     let left=[]
//     let right=[]
//     for(let i=0;i<arr.length-1;i++){

//         if(arr[i]<pivot){

//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }
//     }

//     return [...quickSort(left),pivot,...quickSort(right)]
// }

// console.log(quickSort([34, 342, 2, 23, 45, 4, 35, 6]))

// function mergeSort(arr){

//     if(arr.length<2){
//         return arr
//     }
//     let mid=Math.floor(arr.length/2)

//     let left=mergeSort(arr.slice(0,mid))
//     let right=mergeSort(arr.slice(mid))

//     return merge(left,right)
// }

// function merge(left,right){

//     let sortedArr=[]
//     while(left.length && right.length){
//         if(left[0]<right[0]){
//          sortedArr.push(left.shift())
//         }else{
//             sortedArr.push(right.shift())
//         }
//     }
//     return [...sortedArr,...left,...right]

// }
// console.log(mergeSort([34, 342, 2, 23, 45, 4, 35, 6]));

// class Queue {
//   constructor() {
//     this.queue = [];
//     this.front = 0;
//     this.back = 0;
//   }

//   enqueue(value) {
//     this.queue[this.back] = value;
//     this.back++;
//   }

//   dequeue() {
//     if (this.isEmpty()) {
//       console.log('Queue is empty, cannot dequeue.');
//       return undefined;
//     }

//     let removedItem = this.queue[this.front];
//     delete this.queue[this.front];
//     this.front++;

//     return removedItem;
//   }

//   peek() {
//     if (this.isEmpty()) {
//       console.log('The queue is empty, cannot peek.');
//     } else {
//       return this.queue[this.front];
//     }
//   }

//   isEmpty() {
//     return this.back - this.front===0;
//   }

//   getSize() {
//     return this.back - this.front;
//   }

//   print() {
//     let listValues = '';

//     for (let i = this.front; i < this.back; i++) {
//       listValues = listValues + `${this.queue[i]} `;
//     }
//     console.log(listValues);
//   }
// }

// const queue = new Queue();

// queue.enqueue(34);
// queue.enqueue(763);
// queue.enqueue(45);

// console.log(queue.dequeue());

// console.log(queue.dequeue())
// console.log(queue.peek());
// queue.enqueue(47)

// queue.print();

// class Stack{
//     constructor(){
//         this.stack=[]

//     }

//     push(value){

//         this.stack.push(value)
//     }

//     pop(){

//         this.stack.pop()
//     }

//     peek(){
//         this.stack[this.stack.length-1]
//     }

//     isEmpty(){
//         return this.stack.length===0
//     }

//     size(){
//         return this.stack.length
//     }

//     reverse(){

//         let arr=this.stack
//         for(let i=0;i<arr.length/2;i++){

//             let temp=arr[i]
//             arr[i]=arr[arr.length-1-i]
//             arr[arr.length-1-i]=temp
//         }

//         return this.stack
//     }

//     print(){
//         if(this.isEmpty()){
//         console.log('list is empty bro');
//         }
//         let listValues=''

//         for(let i=0;i<this.stack.length;i++){
//             listValues=listValues+`${this.stack[i]} `
//         }

//         console.log(listValues)
//     }
// }

// const stack=new Stack()

// let str='amjadali'
// for(let i=0;i<str.length;i++){
//     stack.push(str[i])
// }
// stack.push(45)
// stack.print()

// console.log(stack.reverse());
// stack.print()

// let str='amjadaliii'

// let result=[]
// for(let i=0;i<str.length;i++){
//    let count=1
//     for(let j=i+1;j<str.length;j++){
//         if(str[i]===str[j]){
//          count++

//         }
//     }
//     result.push([str[i],count])
// }

// let largest=0
//   result.forEach((item)=>{

//        if(item[1]>largest){
//         largest=item[1]
//        }
//   })

//  let res= result.find((item)=>item[1]===largest)

// console.log(result)

// console.log(res)

// let str='amjadaliii'

// let result=[]
// for(let i=0;i<str.length;i++){
//    let count=1
//     for(let j=i+1;j<str.length;j++){
//         if(str[i]===str[j]){
//          count++

//         }
//     }
//     result.push([str[i],count])
// }

// let largest=0
//   result.forEach((item)=>{

//        if(item[1]>largest){
//         largest=item[1]
//        }
//   })

//  let res= result.find((item)=>item[1]===largest)

// console.log(result)

// console.log(res)

//   class Queue {
//   constructor() {
//     this.queue = [];
//     this.head = 0;
//     this.tail = 0;
//   }

//   enqueue(value){

//     this.queue[this.tail]=value
//     this.tail++

//   }

//   dequeue(){
//    let removedItem= this.queue[this.head]
//    delete this.queue[this.head];
//    this.head++

//    return removedItem
//   }

//   isEmpty(){
//     return this.tail-this.head===0
//   }

//   getSize(){
//     return this.tail-this.head
//   }

//   peek(){
//     return this.queue[this.head]
//   }

//   print(){
//     let listValues=''

//     for(let i=this.head;i<this.tail;i++){
//         listValues=listValues+`${this.queue[i]} `
//     }
//     console.log(listValues);
//   }

// }

// let queue=new Queue()
// // console.log(queue.dequeue());

// queue.enqueue(10)

// queue.enqueue(33)

// // console.log(queue.dequeue());
// console.log(queue.peek())

// console.log(queue.isEmpty());

// console.log(queue.getSize());
// queue.print()

// class Stack{
//     constructor() {
//         this.stack=[]

//     }

//     push(value){
//    this.stack.push(value)
//     }
//     pop(){
//         if (this.isEmpty()){
//             console.log('cant pop list is empty');
//         }

//        return this.stack.pop()
//     }
//     peek(){
//    return this.stack[this.stack.length-1]
//     }
//     isEmpty(){

//         return this.stack.length===0
//     }
//     getSize(){
//      return this.stack.length
//     }
//     print(){

//         let listValues=''

//         for(let i=0;i<this.stack.length;i++){
//             listValues=listValues+`${this.stack[i]} `
//         }
//         console.log(listValues)
//     }
// }

// const stack=new Stack()

// stack.push(39)
// stack.push(92)

// console.log(stack.peek());

// console.log(stack.getSize());
// stack.print()

// class Node{
//     constructor(value){

//         this.value=value
//         this.next=null
//     }
// }
// class stackLinkedList{
//     constructor(){
//     this.head=null
//     this.size=0

//     }

//     isEmpty(){
//         return this.size===0
//     }

//     push(value){
//             const node = new Node(value);

//         if(this.isEmpty()){
//         this.head=node

//         }else{

//        node.next=this.head
//        this.head=node
//         }
//         this.size++

//     }
//     peek(){
//         return this.head.value
//     }

//     pop(){

//         if(this.isEmpty()){
//             console.log('list is empty cant pop');
//             return -1
//         }

//         this.head=this.head.next
//     }

//     print(){
//         let listValues=''

//         let curr=this.head
//         while(curr){
//             listValues=listValues+`${curr.value} `
//             curr=curr.next
//         }
//         console.log(listValues);
//     }

// }

// const stack=new stackLinkedList()

// stack.push(83)
// stack.push(65)
// stack.pop()

// console.log(stack.peek());

// stack.print()

// class Node{
//     constructor(value){

//         this.value=value
//         this.next=null
//     }
// }

// class Queue{
//     constructor(){
//         this.head=null
//         this.tail=null
//         this.size=0
//     }

//     isEmpty(){

//         return this.size===0

//     }

//     enqueue(value){

//         const node=new Node(value)
//         if(this.isEmpty()){

//             this.head=node
//             this.tail=node
//         }else{
//             this.tail.next=node
//             this.tail=node
//         }
//         this.size++
//     }

//     dequeue(){
//         let removedNode=this.head
//         this.head=this.head.next

//         this.size--

//         return removedNode.value
//     }

//     peek(){
//         return this.head.value
//     }

//     print(){
//         let listValues=''

//         let curr=this.head

//         while(curr){
//             listValues=listValues+`${curr.value} `
//             curr=curr.next
//         }

//         console.log(listValues);
//     }
// }

// const queue=new Queue()

// queue.enqueue(20)
// queue.enqueue(365)

// queue.dequeue()
// console.log(queue.peek());
// queue.print()

// class Stack{
//     constructor(){

//         this.stack=[]
//         this.size=0
//     }

//     push(value){
//         this.stack[this.size]=value
//         this.size++
//     }

//     pop(){

//         let removedItem = this.stack[this.size-1];

//         this.stack[this.size-1]=undefined
//         this.size--

//         return removedItem
//     }

//     peek(){
//      return this.stack[this.size-1]
//     }

//     getSize(){
//         return this.size
//     }

//     print(){

//         let listValues=''

//          for(let i=0;i<this.size;i++){
//             listValues=listValues+`${this.stack[i]} `
//          }

//          console.log(listValues)
//     }
// }

// const stack=new Stack()

// stack.push(30)
// stack.push(34)
// stack.push(64)
// stack.push(74)

// console.log(stack.pop());

// stack.print()
// console.log(stack.peek());
// console.log(stack.getSize());

// class hashTable{
//     constructor(size){
//         this.table=new Array(size)
//         this.size=size
//     }

//     hash(key){

//         let total=0
//         for(let i=0;i<key.length;i++){
//             total=total+key.charCodeAt([i])
//         }
//         return total%this.size
//     }
//     set(key,value){

//         const index=this.hash(key)

//         this.table[index]=value

//     }

//     get(key){

//         const index=this.hash(key)
//         return this.table[index][1]
//     }

//     print(){
//         console.log(this.table)
//     }
// }

// const table=new hashTable(50)

// table.set("name","amjadali")
// table.set("age",47)

// console.log(table.get("name"));
// console.log(table.get('age'));

// table.print()

// class HashTable{
//     constructor(size){

//         this.table=new Array(size)
//         this.size=size

//     }

//     hash(key){

//         let total=0
//         for(let i=0;i<key.length;i++){

//             total=total+key.charCodeAt(i)
//         }
//         return total%this.size
//     }

//     set(key,value){

//         const index=this.hash(key)

//         const bucket=this.table[index]

//         if(!bucket){
//           this.table[index]=[[key,value]]
//         }else{
//             const sameKeyItem=bucket.find((item)=>item[0]===key)

//             if(sameKeyItem){
//                 sameKeyItem[1]=value
//             }else{
//                 bucket.push([key,value])
//             }
//         }
//     }

//     get(key){

//         const index=this.hash(key)

//         const bucket= this.table[index]

//         if(bucket){
//          const sameKeyItem=bucket.find((item)=>item[0]===key)

//          if(sameKeyItem){
//           return sameKeyItem[1]
//          }

//         }else{
//             console.log('the key is not available')
//         }
//     }

//     remove(key){

//         const index=this.hash(key)

//        const bucket = this.table[index]

//        if(bucket){
//         const sameKeyItem=bucket.find((item)=>item[0]===key)

//        let removedItem = bucket.splice(bucket.indexOf(sameKeyItem),1)

//         return removedItem

//        }
//     }

//     print(){

//         for(let i=0;i<this.table.length;i++){
//             if(this.table[i]){
//              console.log(i,this.table[i]);
//             }
//         }

//     }

// }

// const table=new HashTable(50)

// table.set(20,'amjadali')
// table.set(67,"ammu")
// table.set("name",'amjadali')
// table.set("mane","ammu")

// console.log(table.get(20));

// table.print()

// function selectionSort(arr){

//     for(let i=0;i<arr.length-1;i++){
//         let temp=i

//         for(let j=i+1;j<arr.length;j++){

//             if(arr[j]<arr[temp]){
//               temp=j
//             }
//         }

//         let bot=arr[i]
//         arr[i]=arr[temp]
//         arr[temp]=bot
//     }

//     console.log(arr)
// }

// selectionSort([12,12,33,223,44,34,4,3,6,4334,5])

// function insertionSort(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     let numberToInsert = arr[i];

//     let j = i - 1;

//     while (j >= 0 && arr[j] > numberToInsert) {
//       arr[j + 1] = arr[j];
//       j--;
//     }

//     arr[j + 1] = numberToInsert;
//   }
//   console.log(arr);
// }

// insertionSort([12, 12, 33, 223, 44, 34, 4, 3, 6, 4334, 5]);

// function QuickSort(arr,low=0,high=arr.length-1){

// if(low<high){
//     let partition = Partition(arr, low, high);

//     QuickSort(arr, low, partition - 1);
//     QuickSort(arr, partition + 1, high);
// }

// return arr

// }

// function Partition(arr,low,high){

//     let pivot=arr[high]
//     let i=low-1

//     for(let j=low;j<high;j++){

//         if(arr[j]<pivot){
//             i++
//           [arr[i],arr[j]]=[arr[j],arr[i]]
//         }
//     }

//     [arr[i+1],arr[high]]=[arr[high],arr[i+1]]

//     return i+1
// }

// console.log( QuickSort([12, 12, 33, 223, 44, 34, 4, 3, 6, 4334, 5]))

// class Queue{
//     constructor(){
//         this.queue=[]
//         this.front=0
//         this.back=0
//     }

//     isEmpty(){

//        return this.back-this.front===0
//     }
//     getSize(){
//         return this.back-this.front
//     }
//     enqueu(value){

//         this.queue[this.back]=value
//         this.back++

//     }

//     dequeue(){

//         let removedItem=this.queue[this.front]
//         delete this.queue[this.front]
//         this.front++
//         return removedItem
//     }
//     peek(){
//         return this.queue[this.front]
//     }

//     print(){
//         let listValues=''
//         for(let i=this.front;i<this.back;i++){
//             listValues=listValues+`${this.queue[i]} `
//         }
//         console.log(listValues);
//     }

// }

// const queue=new Queue()

// queue.enqueu(35)
// queue.enqueu(46)
// queue.enqueu(4);

// console.log(queue.dequeue());

// queue.print()
// console.log(queue.getSize())
// console.log(queue.peek());

// class Node{
//     constructor(value){
//         this.value=value
//         this.next=null
//     }
// }

// class queueLinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this.size = 0;
//   }

//   isEmpty() {
//     return this.size === 0;
//   }
//   enqueue(value) {
//     const node = new Node(value);
//     if (this.isEmpty()) {
//       this.head = node;
//       this.tail = node;
//     } else {
//       this.tail.next = node;
//       this.tail = node;
//     }

//     this.size++;
//   }

//   dequeue() {
//     if (this.isEmpty()) {
//       console.log('list is empty bro');
//     } else {
//       let removedNode = this.head;
//       this.head = this.head.next;

//       this.size--;
//       return removedNode.value;
//     }
//   }

//   removeFromEnd() {
//     let prev=this.head

//     while(prev.next.next){
//         prev=prev.next
//     }
//     let removedNode=prev.next
//     prev.next=null
//     return removedNode.value
//   }

//   print(){
//     let listValues=''
//     let curr=this.head
//     while(curr){
// listValues=listValues+`${curr.value} `
// curr=curr.next
//     }
//     console.log(listValues)
//   }
// }

// const queue=new queueLinkedList()

// queue.enqueue(37)
// queue.enqueue(47)
// console.log(queue.removeFromEnd());
// queue.print()

// function QuickSort(arr,low=0,high=arr.length-1){

//     if(low<high){
//         let partition=Partition(arr,low,high)

//         QuickSort(arr,low,partition-1)
//         QuickSort(arr,partition+1,high)

//     }

//     return arr

// }

// function Partition(arr,low,high){

//     let pivot=arr[high]
//     i=low-1

//     for(let j=low;j<high;j++){
//       if(arr[j]<pivot){
//         i++
//    [arr[i],arr[j]]=[arr[j],arr[i]]
//       }
//     }

//      [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];

//     return i+1
// }

// console.log(QuickSort([8, 20, -2, 4, -6]));

//  function mergeSort(arr){

//   if(arr.length<2){
//     return arr
//   }

//     let mid=Math.floor(arr.length/2)

//     let left = mergeSort(arr.slice(0, mid));
//     let right = mergeSort(arr.slice(mid));

//   return merge(left,right)

//  }

// function  merge(left,right){
// let sortedArr=[]
// while(left.length && right.length){
//     if (left[0] < right[0]) {
//       sortedArr.push(left.shift());
//     } else {
//       sortedArr.push(right.shift());
//     }
// }

//     return [...sortedArr,...left,...right]
//  }
//  console.log(mergeSort([8, 20, -2, 4, -6]));

// class Node{
//    constructor(value){
//     this.value=value
//     this.next=null
//     this.prev=null
//    }
// }

// class stackLinkedList{
//   constructor(){

//     this.head=null
//     this.tail=null
//     this.size=0

//   }

// isEmpty(){
//   return this.size===0
// }
//   push(value){

//     const node =new Node(value)
//     if(this.isEmpty()){

//       this.head=node
//       this.tail=node

//     }else{
//       node.next=this.head
//       this.head.prev=node
//       this.head=node
//     }

//     this.size++

//   }

//   pop(){
//    if(this.isEmpty()){
//     console.log('list is empty man');
//    }else{
//     let removedNode=this.head
//     this.head=this.head.next

//     this.size--
//     return removedNode.value
//    }
//   }

//   peek(){
//     return this.head.value
//   }

//   getSize(){
//     return this.size
//   }

//   print(){

//     let curr=this.head
//  let listValues = '';
//     while(curr){

// listValues=listValues+`${curr.value} `

// curr=curr.next
//     }
//     console.log(listValues);
//   };
// }

// const stack=new stackLinkedList()

// stack.push(545)
// stack.push(857)
// stack.push(76)

// stack.pop()
// stack.print()

// class Node{
//     constructor(value){
//         this.value=value
//         this.next=null
//         this.prev=null
//     }
// }

// class queueLinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this.size = 0;
//   }

//   isEmpty() {
//     return this.size === 0;
//   }
//   enqueue(value) {
//     const node = new Node(value);
//     if (this.isEmpty()) {
//       this.head = node;
//       this.tail = node;
//     } else {
//       node.prev=this.tail
//       this.tail.next = node;
//       this.tail = node;
//     }

//     this.size++;
//   }

//   dequeue() {
//     if (this.isEmpty()) {
//       console.log('list is empty bro');
//     } else {
//       let removedNode = this.head;
//       this.head = this.head.next;

//       this.size--;
//       return removedNode.value;
//     }
//   }

//   removeFromEnd() {

//     let removedNode=this.tail
//     this.tail=this.tail.prev
//     this.tail.next=null

//     this.size--
//    return removedNode.value

//   }

//   print(){
//     let listValues=''
//     let curr=this.head
//     while(curr){
// listValues=listValues+`${curr.value} `
// curr=curr.next
//     }
//     console.log(listValues)
//   }
// }

// const queue=new queueLinkedList()

// queue.enqueue(37)
// queue.enqueue(47)
// queue.enqueue(64)
// console.log(queue.removeFromEnd());
// queue.print()

// let arr = [2,2,3,4,5,4,3,9];

// let seen=[]
// let newArr=[]

// for(let i=0;i<arr.length;i++){
//   if(!seen[arr[i]]){
//     seen[arr[i]]=true
//     newArr.push(arr[i])
//   }
// }

// console.log(newArr)

// class HashTable{
//   constructor(size){
//     this.table=new Array(size)
//     this.size=size

//   }

//   hash(key){

//     let total=0
//     for(let i=0;i<key.length;i++){
//       total=total+key.charCodeAt(i)
//     }

//     return total%this.size
//   }

//   set(key,value){

//     const index=this.hash(key)

//     const bucket=this.table[index]

//     if(!bucket){
//       this.table[index]=[[key,value]]
//     }else{
//       const sameKeyItem=bucket.find((item)=>item[0]===key)

//       if(sameKeyItem){

//         sameKeyItem[1]=value
//       }else{
//         bucket.push([key,value])
//       }

//     }

//   }

//   get(key){

//     const index=this.hash(key)

//       const bucket = this.table[index]

//       if(!bucket){
//         console.log('there is no item on the key');
//       }else{

//         const sameKeyItem=bucket.find((item)=>item[0]===key)

//         if(sameKeyItem){
//           return sameKeyItem[1]
//         }
//       }

//   }

//   remove(key){
//    const index=this.hash(key)

//    const bucket=this.table[index]

//    if(!bucket){
//     console.log('there is no key item');
//    }else{
//     const sameKeyItem=bucket.find((item)=>item[0]===key)

//     if(sameKeyItem){
//       const removedItem=sameKeyItem
//       bucket.splice(bucket.indexOf(sameKeyItem),1)
//       return removedItem
//     }
//    }
//   }

//   print(){

//        for(let i=0;i<this.table.length;i++){

//           if(this.table[i]){
//             console.log(i,this.table[i])
//           }
//        }
//   }

// }

// const table=new HashTable(50)

// table.set("name","amjadali")

// table.set("age",18)

// table.set("mane","amju")

// console.log(table.get('mane'));

// table.print()

// class Queue{
//   constructor(){
//     this.queue=[]
//     this.front=0
//     this.back=0
//   }

//   isEmpty(){
//     return this.back-this.front===0
//   }

//   enqueue(value){
//     this.queue[this.back]=value
//     this.back++
//   }

//   dequeue(){
//     if(this.isEmpty()){
//       console.log('list is empty cant deque');
//     }
//    const removedItem= this.queue[this.front]
//    delete this.queue[this.front]

//    this.front++
//    return removedItem
//   }

//   peek(){
//     if(this.isEmpty()){

//       console.log('list is empty cant peek');

//     }else{

//     return this.queue[this.front];

//     }

//   }

//   push(value){

//       this.front--
//       this.queue[this.front]=value

//   }

//   pop(){
//    let removedItem= this.queue[this.front]
//    delete this.queue[this.front]

//    this.front++
//    return removedItem

//   }
//   print(){
//     let listValues=''

//     for(let i=this.front;i<this.back;i++){
//       listValues=listValues+`${this.queue[i]} `
//     }

//     console.log(listValues)
//   }

// }

// const queue=new Queue()
// queue.enqueue(34)
// queue.enqueue(87)
// queue.enqueue(3)
// queue.enqueue(7)

// console.log(queue.dequeue());

// queue.push(46)
// console.log(queue.pop());
// queue.print()

//  class Stack{
//   constructor(){
//     this.stack=[]
//     this.size=0
//   }

//   push(value){

//     this.stack[this.size]=value
//     this.size++

//   }

//   pop(){
//    let removedItem= this.stack[this.size-1]

//    delete this.stack[this.size - 1];

//    this.size--

//    return removedItem
//   }

//   enqueue(value){
//     this.stack[this.size]=value
//     this.size++
//   }

//   dequeue(){
//    let removedItem=this.stack[0]

//    this.stack.splice(0,1)
//    this.size--
//     return removedItem
//   }

//   peek(){
//     return this.stack[this.size-1]
//   }

//   getSize(){
//     return this.stack.length
//   }

//   print(){
//     let listValues=''

//     for(let i=0;i<this.size;i++){
//        listValues=listValues+`${this.stack[i]} `
//     }
//     console.log(listValues);
//   }
//  }

//  const stack=new Stack()

//  stack.push(47)
//  stack.push(67)
//  stack.push(56)

//  console.log(stack.dequeue());

//  stack.enqueue(78)
//  console.log(stack.pop());
//  stack.print()

// function bubbleSort(arr){

//     let changed

//     do{
//       changed=false
//       for(let i=0;i<arr.length;i++){
//         if(arr[i]>arr[i+1]){
//           let temp=arr[i]
//           arr[i]=arr[i+1]
//           arr[i+1]=temp

//           changed=true
//         }
//       }
//     }while(changed==true)

//     console.log(arr)
// }

// bubbleSort([23,2,43,45,3,34,56,67,8,96,])

// function insertionSort(arr){

//      for(let i=1;i<arr.length;i++){
//       let numberToInsert=arr[i]
//       let j=i-1

//       while(j>=0 && arr[j]>numberToInsert){
//           arr[j+1]=arr[j]
//           j--
//       }

//       arr[j+1]=numberToInsert

//      }

//      console.log(arr)
// }

// insertionSort([23, 2, 43, 45, 3, 34, 56, 67, 8, 96]);

//  function mergeSort(arr){

//   if(arr.length<2){
//     return arr
//   }
//      let mid= Math.floor(arr.length/2)

//      let left=mergeSort(arr.slice(0,mid))
//      let right=mergeSort(arr.slice(mid))

//      return merge(left,right)
//  }

//  function merge(left,right){

//   let sortedArr=[]
//       while(left.length&&right.length){

//           if(left[0]<right[0]){
//             sortedArr.push(left.shift())
//           }else{
//             sortedArr.push(right.shift())
//           }
//       }

//       return [...sortedArr,...left,...right]

//  }

//  console.log(mergeSort([23, 2, 43, 45, 3, 34, 56, 67, 8, 96]));

// function quickSort(arr,low=0,high=arr.length-1){

// if(low<high){
//      let partition=Partition(arr,low,high)

//      quickSort(arr,low,partition-1)
//      quickSort(arr,partition+1,high)

// }

// return arr

//  }

//  function Partition(arr,low,high){

//   let pivot=arr[high]
//   let i=low-1

//   for(let j=low;j<arr[high];j++){
//      if (arr[j] < pivot) {
//          i++
//       [arr[i],arr[j]]=[arr[j],arr[i]]

//      }
//   }

//   [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];

//   return i+1

//  }

//   console.log(quickSort([23, 2, 43, 45, 3, 34, 56, 67, 8, 96]));

// function selectionSort(arr){

//   for(let i=0;i<arr.length;i++){
//     let temp=i

//     for(let j=i+1;j<arr.length;j++){
//  if (arr[j] < arr[temp]) {
//    temp = j;
//  }
//     }

//     let bot=arr[i]
//     arr[i]=arr[temp]
//     arr[temp]=bot
//   }
//   return arr
// }
// console.log(selectionSort([23, 2, 43, 45, 3, 34, 56, 67, 8, 96]));

// function quickSort(arr, low = 0, high = arr.length - 1) {
//   if (low < high) {
//     let partition = Partition(arr, low, high);

//     quickSort(arr, low, partition - 1);
//     quickSort(arr, partition + 1, high);
//   }

//   return arr;
// }

// function Partition(arr, low, high) {
//   let pivot = arr[high];
//   let i = low - 1;

//   for (let j = low; j < high; j++) {
//     if (arr[j] < pivot) {
//       i++;
//       [arr[i], arr[j]] = [arr[j], arr[i]];
//     }
//   }

//   [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];

//   return i + 1;
// }

// console.log(quickSort([23, 2, 43, 45, 3, 34, 56, 67, 8, 96]));

// function insertionSort(arr){

// for(let i=1;i<arr.length;i++){

//     let numberToInsert=arr[i]
//     let j=i-1

//     while(j>=0 && arr[j]>numberToInsert){

//        arr[j+1]=arr[j]

//        j--
//     }

//     arr[j+1]=numberToInsert
// }
// return arr

// }

// console.log(insertionSort([23, 2, 43, 45, 3, 34, 56, 67, 8, 96]));

// function QuickSort(arr,low=0,high=arr.length-1){

//   if(low<high){
// let partition = Partition(arr, low, high);

//  QuickSort(arr,low,partition-1)
//  QuickSort(arr,partition+1,high)

//   }

// return arr

// }

// function Partition(arr,low,high){

//   let pivot=arr[high]
//   let i=low-1
//      for(let j=low;j<high;j++){

//       if(arr[j]<pivot){

//         i++

//         [arr[j],arr[i]]=[arr[i],arr[j]]
//       }

//      }

//      [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];

//      return i+1
// }
// console.log(QuickSort([23, 2, 43, 45, 3, 34, 56, 67, 8, 96]));

//   class Stack{
//     constructor(){
//       this.stack=[]
//       this.size=0
//     }

//     push(value){

//        this.stack[this.size]=value
//        this.size++
//     }

//     pop(){

//      const removedItem= this.stack[this.size-1]

//      delete this.stack[this.size-1]

//      this.size--
//      return removedItem
//     }
//     reverse(){

//        for(let i=0;i<this.stack.length/2;i++){

//            let temp=this.stack[i]
//            this.stack[i]=this.stack[this.stack.length-1-i]
//            this.stack[this.stack.length - 1 - i]=temp

//        }

//        return this.stack
//     }

//     popReverse(){
//      let result=''

//       for(let i=0;i<this.stack.length;i++){
//          result = result + `${this.pop()} `;
//       }
//       return result

//     }

//     print(){

//       let listValues=''
//       for(let i=0;i<this.size;i++){
//            listValues=listValues+`${this.stack[i]} `
//       }
//       console.log(listValues);
//     }
//   }

//   const stack=new Stack()

// let str='amjadali'
// for(let i=0;i<str.length;i++){
// stack.push(str[i]);
// }

// stack.print()

// function quickSort(arr,low=0,high=arr.length-1){

//     if(low<high){
//       let partition=Partition(arr,low,high)

//       quickSort(arr,low,partition-1)
//       quickSort(arr,partition+1,high)

//     }
//    return arr
// }

// function Partition(arr,low,high){

//    let pivot=arr[high]
//    let j=low-1
//    for(let i=low;i<high;i++){

//     if(arr[i]<pivot){
//        j++
//       [arr[i],arr[j]]=[arr[j],arr[i]]
//     }
//    }

//    [arr[j+1],arr[high]]=[arr[high],arr[j+1]]

//    return j+1
// }

//  console.log(quickSort([3,2,3,45,6,7,8,9,5,4443]));

// function insertionSort(arr) {

//     for(let i=1 ; i<arr.length;i++){
//       let numberToInsert=arr[i]
//       let j=i-1

//       while(j>=0 && arr[j]>numberToInsert){
//          arr[j+1]=arr[j]
//          j--
//       }

//       arr[j+1]=numberToInsert
//     }

//     return arr

// }

// console.log(insertionSort([3, 2, 3, 45, 6, 7, 8, 9, 5, 4443]));

     

   // class HashTable {
   //   constructor(size) {
   //     this.table = new Array(size);
   //     this.size = size;
   //   }

   //   hash(key) {
   //     let total = 0;
   //     for (let i = 0; i < key.length; i++) {
   //       total = total + key.charCodeAt(i);
   //     }

   //     console.log('iam hash', total);
   //     return total % this.size;
   //   }

   //   set(key, value) {
   //     const index = this.hash(key);

   //     const bucket = this.table[index];

   //     if (!bucket) {
   //       this.table[index] = [[key, value]];
   //     } else {
   //       const sameKeyItem = bucket.find((item) => item[0] === key);

   //       if (sameKeyItem) {
   //         sameKeyItem[1] = value;
   //       } else {
   //         bucket.push([key, value]);
   //       }
   //     }
   //   }

   //   get(key) {
   //     const index = this.hash(key);

   //     const bucket = this.table[index];

   //     if (!bucket) {
   //       console.log('the key not found');
   //     } else {
   //       const sameKeyItem = bucket.find((item) => item[0] === key);

   //       if (sameKeyItem) {
   //         return sameKeyItem[1];
   //       }
   //     }
   //   }

   //   remove(key) {
   //     const index = this.hash(key);

   //     const bucket = this.table[index];

   //     if (!bucket) {
   //       console.log('the key not found');
   //     } else {
   //       const sameKeyItem = bucket.find((item) => item[0] === key);

   //       if (sameKeyItem) {
   //         let removedItem = sameKeyItem[1];
   //         bucket.splice(bucket.indexOf(sameKeyItem), 1);

   //         return removedItem;
   //       }
   //     }
   //   }

   //   isKey(key) {
   //     const index = this.hash(key);

   //     const bucket = this.table[index];

   //     if (!bucket) {
   //       return false;
   //     } else {
   //       const sameKeyItem = bucket.find((item) => item[0] === key);
   //       if (sameKeyItem) {
   //         return true;
   //       } else {
   //         return false;
   //       }
   //     }
   //   }

   //   isValue(value) {
   //     for (let i = 0; i < this.size; i++) {
   //       const bucket = this.table[i];
   //       if (bucket) {
   //         const sameValue = bucket.find((item) => item[1] === value);
   //         if (sameValue) {
   //           return true;
   //         }
   //       }
   //     }
   //     return false;
   //   }

   //   print() {
   //     for (let i = 0; i < this.size; i++) {
   //       if (this.table[i]) {
   //         console.log(i, this.table[i]);
   //       }
   //     }
   //   }
   // }

   // const table=new HashTable(50)
   // table.set('name',"amjadali")
   // table.set('age',18)

   // console.log(table.get('age'));
   // table.print()


   
   // console.log(table.isKey('mane')); 

   // console.log(table.isValue('amjadali'))


//    class Node{
//       constructor(value){

//          this.value=value
//          this.next=null
//          this.prev=null
//       }
//    }
//    class queueLinkedList{
//       constructor(){
    
//          this.head=null
//          this.tail=null
//          this.size=0
//       }

//       isEmpty(){
//          return this.size===0
//       }
//       enqueue(value){

//          const node=new Node(value)

//          if(this.isEmpty()){
//             this.head=node
//             this.tail=node
//          }else{
//             this.tail.next=node
//             node.prev=this.tail
//             this.tail=node
//          }

//          this.size++
//       }

//       dequeue(){

//          let removedNode=this.head

//          this.head=this.head.next

//          this.size--
//          return removedNode.value
//       }

//       pop(){
//          let removedNode=this.tail

//          this.tail=this.tail.prev

//          this.tail.next=null

//          return removedNode.value
//       }

//       reverse(){

//          let curr=this.head
//          let prev=null

//          while(curr){
//     let next = curr.next;
//     curr.next = prev;
//     prev = curr;
//     curr = next;
//          }

//          this.head=prev 
//       }

//       print(){
//          let curr=this.head
//          let listValues=''
//          while(curr){
            
//            listValues=listValues+`${curr.value} `
//            curr=curr.next
//          }

//          console.log(listValues);
//       }
//    }

//    const queue=new queueLinkedList()


// let str='amjadali'

//  for(let i=0;i<str.length;i++){
//       queue.enqueue(str[i])
//  }




//    queue.reverse()
//    queue.print()


   // function selectionSort(arr){

   //        for(let i=0;i<arr.length;i++){
   //          let temp=i

   //          for(let j=i+1;j<arr.length;j++){
   //             if(arr[j]<arr[temp]){
   //                temp=j
   //             }
   //          }

   //          let bot =arr[i]
   //          arr[i]=arr[temp]
   //          arr[temp]=bot
   //        }
   //        return arr
   // }


   // function quickSort(arr,low=0,high=arr.length-1){

   //      if(low<high){
   //        let partition=Partition(arr,low,high)

   //         quickSort(arr,low,partition-1)
   //         quickSort(arr,partition+1,high)

   //      }

   //      return arr
   // }

   // function Partition(arr,low,high){

   //     let pivot=arr[high]
   //     let i=low-1

   //     for(let j=low;j<high;j++){
   //       if(arr[j]<pivot){
   //          i++
   //        [arr[j],arr[i]]=[arr[i],arr[j]]
   //       }
   //     }

   //    [arr[i+1],arr[high]=arr[high],arr[i+1]]

   //    return i+1
   // }


   // function mergeSort(arr){

   //     if(arr.length<2){
   //   return arr
   //     }

   //     let mid=Math.floor(arr.length/2)
   //     let left = mergeSort(arr.slice(0, mid)); 
   //     let right = mergeSort(arr.slice(mid));

   //     return Merge(left,right)
   // }

   // function Merge(left,right){
 
   //    let sortedArr=[]
   //    while(left.length && right.length){

   //        if(left[0]<right[0]){
   //         sortedArr.push(left.shift())
   //        }else{
   //          sortedArr.push(right.shift())
   //        }
   //    }

   //    return [...sortedArr,...left,...right]
   // }





   // function insertionSort(arr){

   //    for(let i=1;i<arr.length;i++){
   //       let numberToInsert=arr[i]
   //        let j=i-1
   //        while(j>=0 && arr[j]>numberToInsert){

   //           arr[j+1]=arr[j]

   //           j--
   //        }

   //        arr[j + 1] = numberToInsert;
   //    }

   //    return arr

   // }


   // console.log(insertionSort([2, 3, 4, 56, 76, 75, 4, 33, 345]));  


//    class Stack{
//       constructor(){

//          this.stack=[]
//          this.size=0
//       }


//       push(value){

//      this.stack[this.size]=value
//      this.size++

//       }

//       isEmpty(){
//          return this.size===0
//       }

//       pop(){
//          if(this.isEmpty()){
//             console.log('you are in underflow');
//          }else{
//        let removedItem = this.stack[this.size - 1];
//        delete this.stack[this.size - 1];
//        this.size--;

//        return removedItem;
//          }
 
//       }

//       peek(){
//          return this.stack[this.size-1]
//       }

//       print(){
//          if(this.isEmpty()){
//             console.log('list is empty bro');
//          }else{
// let listValues = '';
// for (let i = 0; i < this.size; i++) {
//   listValues = listValues + `${this.stack[i]} `;
// }
// console.log(listValues);
//          }
  
//       }


//    }

//    const stack=new Stack()


//    console.log(stack.pop());


//    stack.print()

// class Queue{
//      constructor(){
//       this.queue=[]
//       this.front=0
//       this.back=0
//      }

//      isEmpty(){
//       return this.back-this.front===0
//      }
// enqueue(value){


//    this.queue[this.back]=value
//    this.back++
   

// }
// dequeue(){
//    if(this.isEmpty()){
//       console.log('list is empty cant dequeue');
//    }else{
//     let removedItem=  this.queue[this.front]
//     delete this.queue[this.front]
//     this.front++
//     return removedItem

//    }
// }

// peek(){
//    return this.queue[0]
// }

// getSize(){
//    return this.back-this.front
// }

// print(){
//    let listValues=''
//    for(let i=this.front;i<this.back;i++){
//    listValues=listValues+`${this.queue[i]} `
//    }
//    console.log(listValues)
// }
// }

// const queue=new Queue()

// queue.enqueue(465)
// queue.enqueue(767)
// queue.enqueue(45)
// queue.enqueue(77)

// console.log(queue.dequeue());

// console.log(queue.getSize());
// queue.print()


function mergeSort(arr){

   if(arr.length<2){
      return arr
   }
   let mid=Math.floor(arr.length/2)

    let left=mergeSort(arr.slice(0,mid))
    let right=mergeSort(arr.slice(mid))

    return merge(left,right)

}

function merge(left,right){

   let sortedArr=[]
   while(left.length && right.length){

      if(left[0]<right[0]){
         sortedArr.push(left.shift())
      }else{
         sortedArr.push(right.shift())
      }
   }

   return [...sortedArr,...left,...right]

}



  function quickSort(arr,low=0,high=arr.length-1){


      if(low<high){

         let partition=Partition(arr,low,high)

          quickSort(arr,low,partition-1)
          quickSort(arr,partition+1,high)
      }

      return arr
  }

  function Partition(arr,low,high){

      let pivot=arr[high]
      let i=low-1

      for(let j=low;j<high;j++){
         if(arr[j]<pivot){

            i++

            [arr[j],arr[i]]=[arr[i],arr[j]]


         }
      }

      [arr[i+1],arr[high]]=[arr[high],arr[i+1]]

      return i+1
  }




  function insertionSort(arr){

     for(let i=1;i<arr.length;i++){
      let numberToInsert=arr[i]
       let j=i-1

       while(j>=0 && arr[j]>numberToInsert){

          arr[j+1]=arr[j]

          j--
       }

       arr[j+1]=numberToInsert

     }
     return arr
  }
   console.log(insertionSort([3, 43, 45, 4, 356, 75, 5])); 