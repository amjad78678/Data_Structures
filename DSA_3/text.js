// // class Graph{
// //     constructor() {

// //         this.adjacencyList = {};
// //     }

// //     addVertex(vertex){

// //         if(!this.adjacencyList[vertex]){
// //             this.adjacencyList[vertex]=new Set()
// //         }

// //     }

// //     addEdge(vertex1,vertex2){

// //         if(!this.adjacencyList[vertex1]){
// //             this.addEdge(vertex1)
// //         }else if(!this.adjacencyList[vertex2]){
// //             this.addEdge(vertex2)
// //         }else{

// //             this.adjacencyList[vertex1].add(vertex2)
// //             this.adjacencyList[vertex2].add(vertex1)
// //     }

// // }

// // hasEdge(vertex1,vertex2){

// //     if(!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]){
// //         return false
// //     }else{

// //         return this.adjacencyList[vertex1].has(vertex2) && this.adjacencyList[vertex2].has(vertex1)

// //     }
// // }

// // removeEdge(vertex1,vertex2){

// //     this.adjacencyList[vertex1].delete(vertex2)
// //     this.adjacencyList[vertex2].delete(vertex1)

// // }

// // removeVertex(vertex){

// //     if(!this.adjacencyList[vertex]){
// //         return
// //     }else{

// //         for(let adjacent of this.adjacencyList[vertex]){
// //             this.removeEdge(vertex,adjacent)
// //         }

// //         delete this.adjacencyList[vertex]

// //     }
// // }

// // display(){
// //     console.log(this.adjacencyList)
// // for(let vertex in this.adjacencyList){

// //     console.log(`${vertex} => ${[...this.adjacencyList[vertex]]}`)
// // }

// // }
// // }

// // const graph =new Graph()

// // graph.addVertex("A")
// // graph.addVertex('B');
// // graph.addVertex('C');

// // graph.addEdge("A",'B')

// //  console.log(graph.hasEdge('A', 'B'));

// // graph.display()

// // class Node{
// //     constructor(value){
// //         this.value=value
// //         this.left=null
// //         this.right=null
// //     }
// // }

// // class BinarySearchTree{
// //     constructor() {

// //         this.root=null
// //     }

// //     isEmpty(){
// //         return this.root===null
// //     }
// //     insert(value){
// //         const node=new Node(value)

// //         if(this.isEmpty()){
// //             this.root=node
// //         }else{

// //             this.insertNode(this.root,node)
// //         }
// //     }

// //     insertNode(root,node){

// //         if(node.value < root.value){

// //             if(root.left===null){
// //                 root.left=node
// //             }else{
// //                 this.insertNode(root.left,node)
// //             }
// //         }else if(node.value>root.value){

// //             if(root.right===null){
// //                 root.right=node
// //             }else{
// //                 this.insertNode(root.right,node)
// //             }
// //         }
// //     }

// // search(root,value){

// //         if(!root){
// //             return false
// //         }else if(value === root.value){
// //             return true
// //         }else if(value < root.value){
// //            return this.search(root.left,value)
// //         }else{
// //            return this.search(root.right,value)
// //         }

// //     }

// //     preOrder(root){
// //         if(root){

// //             console.log(root.value)

// //              this.preOrder(root.left)
// //              this.preOrder(root.right)
// //         }
// //     }

// //     inOrder(root){
// //         if(root){
// //             this.inOrder(root.left)
// //             console.log(root.value)
// //             this.inOrder(root.right)
// //         }
// //     }

// //     postOrder(root){

// //         if(root){
// //             this.postOrder(root.left)
// //             this.postOrder(root.right)
// //             console.log(root.value)
// //         }
// //     }

// //     levelOrder(){

// //         const queue=[]

// //          queue.push(this.root)

// //          while(queue.length){

// //             let curr=queue.shift()

// //             console.log(curr.value);

// //             if(curr.left){
// //                 queue.push(curr.left)
// //             }

// //             if(curr.right){
// //                 queue.push(curr.right)
// //             }

// //          }
// //     }

// //     min(root){

// //         if(!root.left){
// //             return root.value
// //         }else{
// //             return this.min(root.left)
// //         }
// //     }

// //     max(root){

// //         if(!root.right){
// //             return root.value
// //         }else{
// //             return this.max(root.right)
// //         }
// //     }

// //     delete(value){

// //         this.root=this.deleteNode(this.root,value)
// //     }

// //     deleteNode(root,value){

// //         if(root===null){
// //             return root
// //         }

// //         if(value <root.value){
// //             root.left=this.deleteNode(root.left,value)
// //         }else if(value>root.value){
// //             root.right=this.deleteNode(root.right,value)
// //         }else{
// //             if(!root.left && !root.right){
// //                 return null
// //             }

// //             if(!root.left){
// //                 return root.right
// //             }else if(!root.right){
// //                 return root.left
// //             }

// //             root.value=this.min(root.right)

// //             this.deleteNode(root.right,root.value)
// //         }

// //         return root

// //     }

// // }

// // const bst=new BinarySearchTree()

// // bst.insert(66)
// // bst.insert(6)
// // bst.insert(97)
// // bst.insert(9)
// // bst.insert(33)

// // bst.delete(6)
// // bst.levelOrder()

// // class Heap {
// //   constructor() {
// //     this.data = [];
// //   }

// //   parentIndex(i) {
// //     return Math.floor(i - 1 / 2);
// //   }
// //   leftIndex(i) {
// //     return i * 2 + 1;
// //   }
// //   rightIndex(i) {
// //     return i * 2 + 2;
// //   }

// //   swap(i1, i2) {
// //     let temp = this.data[i1];
// //     this.data[i1] = this.data[i2];
// //     this.data[i2] = temp;
// //   }
// //   push(value) {
// //     this.data[this.data.length] = value;
// //     this.upwards();
// //   }

// //   upwards() {
// //     let currIndex = this.data.length - 1;

// //     while (
// //       currIndex > 0 &&
// //       this.data[currIndex] > this.data[this.parentIndex(currIndex)]
// //     ) {
// //       this.swap(currIndex, this.parentIndex(currIndex));

// //       currIndex = this.parentIndex(currIndex);
// //     }
// //   }

// //   pull() {
// //     let maxValue = this.data[0];

// //     this.data[0] = this.data[this.data.length - 1];

// //     this.data.length--;

// //     this.heapifyDown();

// //     return maxValue;
// //   }

// //   heapifyDown() {
// //     let currIndex = 0;

// //     while (this.data[this.leftIndex(currIndex)] !== undefined) {
// //       let biggestChildIndex = this.leftIndex(currIndex);

// //       if (
// //         this.data[this.rightIndex(currIndex)] !== undefined &&
// //         this.data[this.rightIndex(currIndex)] >
// //           this.data[this.leftIndex[currIndex]]
// //       ) {
// //         biggestChildIndex = this.leftIndex(currIndex);
// //       }

// //       if (this.data[currIndex] < this.data[biggestChildIndex]) {
// //         this.swap(currIndex, biggestChildIndex);

// //         currIndex = biggestChildIndex;
// //       }else{
// //         return
// //       }
// //     }
// //   }
// // }

// // const heap = new Heap();

// // heap.push(36);
// // heap.push(4);
// // heap.push(6);
// // heap.push(55);

// // arr = [];

// // arr.push(heap.pull());
// // arr.push(heap.pull());
// // arr.push(heap.pull());


// // console.log(arr)

// // console.log(heap.data.join(','));


// // class Heap{
// //     constructor() {
// //       this.data=[]
// //     }

// //     parentIndex(i){
        
// //         return Math.floor(i-1/2)

// //     }

// //     leftIndex(i){
// //         return i*2+1
// //     }


// //     rightIndex(i){

// //        return i*2+2
// //     }

// //     swap(i1,i2){
// //     let temp=this.data[i1]
// //     this.data[i1]=this.data[i2]
// //     this.data[i2]=temp
// //     }

// //    push(value){

// //       this.data[this.data.length]=value

// //       this.upwards()
        
// //    }

// //    upwards(){

// //     let currIndex=this.data.length-1

// //       while(currIndex>0 && this.data[currIndex]>this.data[this.parentIndex(currIndex)]){
// //         this.swap(currIndex,this.parentIndex(currIndex))
// //         currIndex=this.parentIndex(currIndex)
// //       }
// //    }

// //    pull(){

// //     let maxValue=this.data[0]
// //     this.data[0]=this.data[this.data.length-1]
// //     this.data.length--

// //     this.heapifyDown()

// //      return maxValue
// //    }

// //    heapifyDown(){

// //     let currIndex=0

    
// //   while(this.data[this.data.length]){
       
       
// //   }
    
// //    }
// // }

// // const heap=new Heap()   

// // heap.push(56)
// // heap.push(5);
// // heap.push(76);

// // console.log(heap.data.join(','))


// // class Node{

// //   constructor(value){
// //     this.value=value
// //     this.left=null
// //     this.right=null
// //   }

// // }

// // class BinarySearchTree {
// //   constructor() {
// //     this.root = null;
// //   }
// //   isEmpty() {
// //     return this.root === null;
// //   }

// //   insert(value) {
// //     const node = new Node(value);

// //     if (this.isEmpty()) {
// //       this.root = node;
// //     } else {
// //       insertNode(this.root, node);
// //     }
// //   }

// //   insertNode(root, node) {
// //     if (node.value < root.value) {
// //       if (root.left === null) {
// //         root.left = node;
// //       } else {
// //         this.insertNode(root.left, node);
// //       }
// //     } else {
// //       if (root.right === null) {
// //         root.right = node;
// //       } else {
// //         this.insertNode(root.right, node);
// //       }
// //     }
// //   }

// //   search(root, value) {
// //     if (!root) {
// //       return false;
// //     } else {
// //       if (value === root.value) {
// //         return true;
// //       } else if (value < root.value) {
// //         return this.search(root.left, value);
// //       } else {
// //         return this.search(root.right, value);
// //       }
// //     }
// //   }

// //   levelOrder() {
// //     const queue = [];
// //     queue.push(this.root);

// //     while (queue.length) {
// //       let curr = queue.shift();
// //       console.log(curr.value);

// //       if (curr.left) {
// //         queue.push(curr.left);
// //       }
// //       if (curr.right) {
// //         queue.push(curr.right);
// //       }
// //     }
// //   }

// //   preOrder(root) {
// //     if (root) {
// //       console.log(root.value);
// //       this.preOrder(root.left);
// //       this.preOrder(root.right);
// //     }
// //   }

// //   inOrder(root) {
// //     this.inOrder(root.left);
// //     console.log(root.value);
// //     this.inOrder(root.right);
// //   }

// //   postOrder() {
// //     this.postOrder(root.left);
// //     this.postOrder(root.right);
// //     console.log(root.value);
// //   }

// //   max(root) {
// //     if (!root.right) {
// //       return root.value;
// //     } else {
// //       this.max(root.right);
// //     }
// //   }
// //   min(root) {
// //     if (!root.left) {
// //       return root.value;
// //     } else {
// //       this.min(root.left);
// //     }
// //   }


// //   delete(value){

// //     this.root=this.deleteNode(this.root,value)

// //   }

// //   deleteNode(root,value){

// //     if(root===null){
// //       return root
// //     }

// //     if(value<root.value){
// //       root.left=this.deleteNode(root.left,value)
// //     }else if(value>root.value){
// //       root.right=this.deleteNode(root.right,value)

// //     }else{

// //       if(!root.left && !root.right){
// //         return null
// //       }else if(!root.left){
// //         return root.right
// //       }else if(!root.right){
// //         return root.left
// //       }

// //       root.value=this.min(this.right)
// //       this.deleteNode(this.right,root.value)

// //     }

// //     return root

// //   }
// // }


// // class Node{
// //   constructor(value){
// //       this.value=value
// //       this.left=null
// //       this.right=null
// //   }

// // }

// // class BinarySearchTree{
// //   constructor(){
// //     this.root=null
// //   }

// //   isEmpty(){
     
// //     return this.root===null
// //   }

// //   insert(value){
    
// //     const node=new Node(value)

// //     if(this.isEmpty()){
// //       this.root=node
// //     }else{

// //       this.insertNode(this.root,node)
// //     }
// //   }


// //   insertNode(root,node){

// //     if(node.value<root.value){
// //       if(root.left===null){
// //         root.left=node
// //       }else{
// //         this.insertNode(root.left,node)
// //       }
// //     }else{
      
// //       if(root.right===null){
// //         root.right=node
// //       }else{
// //         this.insertNode(root.right,node)
// //       }

// //     }

// //   }

// //   search(root,value){

// //     if(!root){
// //       return false
// //     }

// //     if(value===root.value){

// //        return true


// //    }else if(value<root.value){

// //     return this.search(root.left,value)

// //   }else{

// //     return this.search(root.right,value)

// //   }
   
// //   }

  
// //   preOrder(root){

// //     if(root){
// //       console.log(root.value)
// //       this.preOrder(root.left)
// //       this.preOrder(root.right)
// //     }
// //   }

// //   inOrder(root){

// //     if(root){
// //       this.inOrder(root.left)
// //       console.log(root.value)
// //       this.inOrder(root.right)
      
// //     }
// //   }

// //   postOrder(root){

// //     if(root){
// //       this.postOrder(root.left)

// //       this.postOrder(root.right)
      
// //       console.log(root.value)
// //     }
// //   }


// //   levelOrder(){
// //     const queue=[]
// //     queue.push(this.root)
    
// //     while(queue.length){
// //       let curr=queue.shift()

// //       console.log(curr.value)

// //       if(curr.left){
// //         queue.push(curr.left)
// //       }
// //       if(curr.right){
// //         queue.push(curr.right)
// //       }
// //     }
// //   }

// //   min(root){

// //     if(!root.left){
// //       return root.value
// //     }else{
// //       return this.min(root.left)
// //     }
// //   }

// //   max(root){

// //     if(!root.right){
// //       return root.value
// //     }else{
// //       return this.max(root.right)
// //     }
// //   }


// //   delete(value){

// //     this.root=this.deleteNode(this.root,value)

// //   }

// //   deleteNode(root,value){

// //     if(root===null){
// //       return root
// //     }

// //     if(value<root.value){
// //        root.left= this.deleteNode(root.left,value)
// //     }else if(value>root.value){
// //        root.right= this.deleteNode(root.right,value)
// //     }else{

// //       if( !root.left &&  !root.right ){
// //         return null
// //       }else if(!root.left){
// //          return root.right
// //       }else if(!root.right){
// //         return root.left
// //       }

// //       root.value=this.min(root.right)
// //       root.right=this.deleteNode(root.right,root.value)

// //     }

// //     return root

// //   }

// // }

// // const bst=new BinarySearchTree()

// // bst.insert(23)
// // bst.insert(3)
// // bst.insert(87)
// // bst.insert(68)
// // bst.insert(5)


// // bst.delete(87)

// // bst.levelOrder()



// // class Graph {
// //   constructor() {
// //     this.adjacencyList = {};
// //   }

// //   addVertex(vertex) {
// //     if (!this.adjacencyList[vertex]) {
// //       this.adjacencyList[vertex] = new Set();
// //     }
// //   }

// //   addEdge(vertex1,vertex2) {

// //     if(!this.adjacencyList[vertex1]){
// //       this.addVertex(vertex1)
// //     }else if(!this.adjacencyList[vertex2]){
// //       this.addVertex(vertex2)
// //     }

// //      this.adjacencyList[vertex1].add(vertex2)
// //      this.adjacencyList[vertex2].add(vertex1)
// //   }


// //   hasEdge(vertex1,vertex2){

// //      if(!this.adjacencyList[vertex1]||this.adjacencyList[vertex2]){
// //       return false
// //      }

// //       return(
// //         this.adjacencyList[vertex1] && this.adjacencyList[vertex2]
// //       )  
// // }

// // removeEdge(vertex1,vertex2){

// //   this.adjacencyList[vertex1].delete(vertex2)
// //   this.adjacencyList[vertex2].delete(vertex1)

// // }

// // removeVertex(vertex){

// //   if(!this.adjacencyList[vertex]){

// //     return

// //   }


// //   for(let neighbor of this.adjacencyList[vertex]){

// //      this.removeEdge(vertex,neighbor)
// //   }

// //   delete this.adjacencyList[vertex]

// // }

// // display(){

// //   for(let vertex in this.adjacencyList){
// //     console.log(`${vertex} => ${[...this.adjacencyList[vertex]]}`)
// //   }
// // }

// // }

// // const graph=new Graph()

// // graph.addVertex(35);
// // graph.addVertex(10);
// // graph.addVertex(30);
// // graph.addVertex(60);
// // graph.addVertex(5);
// // graph.addVertex(20);

// // graph.addEdge(35, 10);
// // graph.addEdge(30, 10);
// // graph.addEdge(35, 30);
// // graph.addEdge(5, 20);

// // graph.display()


// // class Graph{

// //   constructor(){
// //     this.adjacentList={}
// //   }


// //   addVertex(value){

// //      if(!this.adjacentList[value]){
// //       this.adjacentList[value]=new Set()
// //      }
// //   }

// //   addEdge(v1,v2){

// //     if(!this.adjacentList[v1]){
// //       this.addVertex(v1)
// //     }
// //     if(!this.adjacentList[v2]){
// //       this.addVertex(v2)
// //     }


// //     this.adjacentList[v1].add(v2)
// //     this.adjacentList[v2].add(v1)
// //   }

// //   removeEdge(v1,v2){

// //     this.adjacentList[v1].delete(v2)
// //     this.adjacentList[v2].delete(v1)
// //   }

// //   removeVertex(vertex){

// //     if(!this.adjacentList[vertex]){
// //       return
// //     }

// //      for(let neighbor of this.adjacentList[vertex]){
// //         this.removeEdge(vertex,neighbor)

// //      }

// //     delete this.adjacentList(vertex)
// //   }

// //   display(){

// //     console.log(this.adjacentList);

// //     for(let vertex in this.adjacentList){

// //       console.log(`${vertex} => ${[...this.adjacentList[vertex]]}`)
// //     }
// //   }


// //   dfs(startingVertex){

// //     let allValues=new Set(Object.keys(this.adjacentList))

// //     let visited={}


// //     for(let vertex of allValues){
// //       visited[vertex]=false
// //     }




// //     const dfsHelper=(vertex)=>{

// //       visited[vertex]=true
// //       console.log(vertex)
// //       allValues.delete(vertex)

// //       for(let neighbor of this.adjacentList[vertex]){

// //           if(!visited[neighbor]){
// //             dfsHelper(vertex)
// //           }
// //       }

// //     }

// //     dfsHelper(startingVertex)


// //     for(let vertex of this.adjacentList){
// //       if(!visited[vertex]){
// //         dfsHelper(vertex)
// //       }
// //     }

// //   }
// // }


// // const graph=new Graph()

// // graph.addEdge(10,20)
// // graph.addEdge(2,5)
// // graph.addEdge(12,34)

// // graph.dfs(2)


// // class Node{
// //   constructor(value){

// //     this.value=value
// //     this.left=null
// //     this.right=null
// //   }
// // }
// // class BinarySearchTree {
// //   constructor() {
// //     this.root = null;
// //   }

// //   isEmpty() {
// //     return this.root === null;
// //   }

// //   insert(value) {
// //     const node = new Node(value);

// //     if (this.isEmpty()) {
// //       this.root = node;
// //     } else {
// //       this.insertNode(this.root, node);
// //     }
// //   }

// //   insertNode(root, node) {
// //     if (node.value < root.value) {
// //       if (root.left === null) {
// //         root.left = node;
// //       } else {
// //         this.insertNode(root.left, node);
// //       }
// //     } else {
// //       if (root.right === null) {
// //         root.right = node;
// //       } else {
// //         this.insertNode(root.right, node);
// //       }
// //     }
// //   }

// //   search(value, root = this.root) {
// //     if (!root) {
// //       return false;
// //     } else {
// //       if (value === root.value) {
// //         return true;
// //       } else if (value < root.value) {
// //         return this.search(value, root.left);
// //       } else if (value > root.value) {
// //         return this.search(value, root.right);
// //       }
// //     }
// //   }

// //   min(root) {
// //     if (!root.left) {
// //       return root.value;
// //     } else {
// //       return this.min(root.left);
// //     }
// //   }

// //   max(root) {
// //     if (!root.right) {
// //       return root.value;
// //     } else {
// //       return this.max(root.value);
// //     }
// //   }

// //   levelOrder() {
// //     const queue = [];

// //     queue.push(this.root);

// //     while (queue.length) {
// //       let curr = queue.shift();
// //       console.log(curr.value);

// //       if (curr.left) {
// //         queue.push(curr.left);
// //       }
// //       if (curr.right) {
// //         queue.push(curr.right);
// //       }
// //     }
// //   }

// //   delete(value) {
// //     this.root = this.deleteNode(this.root, value);
// //   }

// //   deleteNode(root, value) {
// //     if (root === null) {
// //       return root;
// //     }

// //     if (value < root.value) {
// //       root.left = this.deleteNode(root.left, value);
// //     } else if (value > root.value) {
// //       root.right = this.deleteNode(root.right, value);
// //     } else {
// //       if (!root.left && !root.right) {
// //         return null;
// //       } else if (!root.left) {
// //         return root.right;
// //       } else if (!root.right) {
// //         return root.left;
// //       } else {
// //         root.value = this.min(root.right);
// //         root.right = this.deleteNode(root.right, root.value);
// //       }
// //     }
// //     return root
// //   }
// // }



// // const bst= new BinarySearchTree()

// // bst.insert(56)
// // bst.insert(67)
// // bst.insert(78)
// // bst.insert(5)
// // bst.insert(6)
// // bst.insert(7)

// // bst.delete(78)

// // console.log(bst.isEmpty())
// // bst.levelOrder()


// class Sample {



//   // levelOrder() {
//   //   const queue = [];

//   //   queue.push(this.root)

//   //    while(queue.length){

//   //     let curr= queue.shift()

//   //     console.log(curr.value)

//   //     if(curr.left){
//   //       queue.push(curr.left)
//   //     }
//   //     if(curr.right){
//   //       queue.push(curr.right)
//   //     }
//   //    }
//   // }

// //  delete(value){

// //   this.root=this.deleteNode(this.root,value)
// //    console.log(this.root)
// //  }

// //  deleteNode(root,value){
// //   if(root===null){
// //     return root
// //   }

// //   if(value < root.value){
// //     root.left=this.deleteNode(root.left,value)
// //   }else if(value > root.value){
// //     root.right=this.deleteNode(root.right,value)
// //   }else{
// //     if(!root.left && !root.right){
// //       return null
// //     }else if(!root.left){
// //       return root.right
// //     }else if(!root.right){
// //       return root.left
// //     }

// //     root.value=this.min(root.right)
// //     root.right=this.deleteNode(root.right,root.value)
// //   }
// //   return root
// //  }



// // closestValue(target,root=this.root){

// // let closest = root.value;
// //   while(root!==null){

// //        if (Math.abs(target - root.value) < Math.abs(target - closest)){
// //          closest = root.value;
// //        }

// //        if (target < root.value) {
// //         root=root.left
// //        }else if(target>root.value){
// //         root=root.right
// //        }else{
// //         break;
// //        }

// //   }

// //   return closest

// // }

// // isValidBst(){

// //    return this.checkBst(this.root,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY)
// // }

// // checkBst(root,min,max){

// //   if(root===null){
// //     return true
// //   }

// //   if(root.value<=min || root.value>=max){
// //     return false
// //   }


// //     return (this.checkBst(root.left,min,root.value) && this.checkBst(root.right,root.value,max))
// // }

// // }



// // isValidBst(){

// //    return this.checkBst(this.root,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY)

// // }

// // checkBst(root,min,max){


// //   if(root===null){
// //     return true
// //   }

// //   if(root.value <= min || root.value >=max){
// //     return false
// //   }

// //   return (checkBst(root.left,min,root.value) && checkBst(root.right,root.value,max))
   
  
// // }







// // }

// // class heap {
// //   constructor() {

// //     this.data=[]

// //   }

// //   getParentIndex(i){
// //     return Math.floor(i-1/2)
// //   }
// //   getLeftChildIndex(i){

// //      return i*2+1
// //   }
// //   getRightChildIndex(i){
// //     return i*2+2
// //   }

// //   push(value){

// //     this.data[this.data.length]=value

// //      this.heapifyUp()
// //   }

// //   heapifyUp(){

// //     let currIndex=this.data.length-1
// //     while(currIndex>0 && this.data[currIndex]>this.data[this.getParentIndex(currIndex)]){
      
// //        this.swap(currIndex,this.getParentIndex(currIndex))
// //        currIndex=this.getParentIndex(currIndex)
// //     }
// //   }

// //   pull(){
    
// //     const maxValue=this.data[0]
// //     this.data[0]=this.data[this.data.length-1]

// //     this.data.length--
// //    this.heapifyDown()

// //     return maxValue
// //   }

// //   heapifyDown(){
  
// //     let currIndex=0
  
// //     while(this.data[this.getLeftChildIndex[currIndex] !== undefined]) {
// //       let biggestChildIndex=this.getLeftChildIndex[currIndex]
    

// //     if (
// //       this.data[this.getRightChildIndex[currIndex] !== undefined] &&
// //       this.data[this.getLeftChildIndex(currIndex)] >
// //         this.data[this.getRightChildIndex(currIndex)]
// //     ) {
// //       biggestChildIndex = this.getRightChildIndex(currIndex);
// //     }

// //     if(this.data[currIndex]<this.data[biggestChildIndex]){
// //         this.swap(currIndex,biggestChildIndex)
// //         currIndex=biggestChildIndex
// //     }
// //   }
// // }
// // }
// }



// // class Graph {

// //   constructor(){
// //     this.adjacencyList={}
// //   }

// //   addVertex(value){

// //     if(!this.adjacencyList[value]){
// //       this.adjacencyList[value]=new Set()
// //     }
// //   }

// //   addEdge(vertex1,vertex2){

// //      if(!this.adjacencyList[vertex1]){
// //        this.addVertex(vertex1)
// //      }
// //      if(!this.adjacencyList[vertex2]){
// //       this.addVertex(vertex2)
// //      }


// //      this.adjacencyList[vertex1].add(vertex2)
// //      this.adjacencyList[vertex2].add(vertex1)
// //   } 


// //   hasEdge(vertex1,vertex2){

// //     return(this.adjacencyList[vertex1].has(vertex2) && this.adjacencyList[vertex2].has(vertex1))

// //   }

// //   removeEdge(v1,v2){

// //       this.adjacencyList[v1].delete(v2)
// //       this.adjacencyList[v2].delete(v1)
// //   }

// //   removeVertex(vertex){

// //      for(let neighbor of this.adjacencyList[vertex]){

// //        this.removeEdge(vertex,neighbor)

// //      }

// //      delete this.adjacencyList[vertex]

// //   }

// //   display(){

// //     for(let vertex in this.adjacencyList){
// //       console.log(`${vertex} => ${[...this.adjacencyList[vertex]]}`)
// //     }
// //   }

// // bfs(){

// //   const queue=[]
// //   const visited={}
// //   queue.push(this.root)
// //   while(queue.length){

// //   const vertex=queue.shift()
    
// //       console.log(vertex)


// //       for (let neighbor of this.adjacencyList[vertex]){
          
              
// //            if(!visited[neighbor]){
              
// //              visited[neighbor]=true
              
// //              queue.push(neighbor)

// //            }
             
// //       }

// //   }



// //    for (let vertex of this.adjacencyList){


// //       if(!visited[vertex]){
// //         visited[vertex]=true
// //         console.log(vertex)
// //       }

// //    }
// // }


// // bfs(startingVertex){
// //   const queue=[]
// //   let visited={}

// //   visited[startingVertex]=true
// //   queue.push(startingVertex)

// //   while(queue.length){
// //     let vertex=  queue.shift()
// //     console.log(vertex)


// //     for(let neighbor of this.adjacencyList[vertex]){

// //          if(!visited[neighbor]){
// //            visited[neighbor]=true
// //           queue.push(neighbor)
// //          }
// //     }
// //   }


// // }

// // }

// // const graph=new Graph()


// // graph.addEdge(23,1)
// // graph.addEdge(3,12)
// // graph.addEdge(43,4)
// // graph.addEdge(26,1)

// // graph.display()


// // dfs(startingVertex){

// //     const allValues=new Set(Object.keys(this.adjacencyList))

// //     let visited={}

// //     for(let vertex of ){
// //       visited[vertex]=false
// //     }

    
// // const dfsHelper=(vertex)=>{

// //     visited[vertex]=true
// //     console.log(vertex)
// //     allValues.delete(vertex)


// //     for(let neighbor of this.adjacencyList[vertex]){
// //       if(!visited[neighbor]){
// //         dfsHelper(neighbor)

// //       }
// //     }
// // }


// //     dfsHelper(startingVertex)

// // for(let vertex of adjacencyList){
// //    if(!visited[vertex])
// //    dfsHelper(vertex)
// // }

// // }


// // levelOrder(){

// //   const queue=[]

// //   queue.push(this.root)
// //   while(queue.length){

// //      let curr= queue.shift()

// //       console.log(curr.value)


// //      if(curr.left){
// //       queue.push(curr.left)
// //      }

// //      if(curr.right){
// //       queue.push(curr.right)
// //      }

// //   }
// // }

// // class Node{

// //   constructor(){

// //      this.children={}
// //      this.isWordEnd=false
// //   }
// // }

// // class Trie {
// //   constructor() {
// //     this.root = new Node();
// //   }

// //   insert(word) {
// //     let curr = this.root;

// //     for (let i = 0; i < word.length; i++) {
// //       let insertData = word[i];

// //       if (!(insertData in curr.children)) {
// //         curr.children[insertData] = new Node();
// //       }

// //      curr = curr.children[insertData];

// //     }

// //     curr.isWordEnd = true;
// //   }


// //   contains(word){

// //     let curr=this.root

// //     for(let i=0;i<word.length;i++){
// //       let searchData=word[i]

// //       if(!(searchData in curr.children)){

// //         return false

// //       }
// //       curr=curr.children[searchData]

// //     }

// //     return curr.isWordEnd

// //   }


// //   searchPrefix(word){

// //     let curr=this.root
// //     let words=[]
// //      for(let i=0;i<word.length;i++){
// //       let searchData=word[i]

// //       if(!(searchData in curr.children)){

// //         return words
// //       }

// //     curr=curr.children[searchData]

// //      }

// //      this.collection(curr,word,words)
// //      return words
// //   }

// //   collection(curr,word,words){

// //       if(curr.isWordEnd==true){

// //         words.push(word)

// //       }

// //       for(let child in curr.children){
// //         this.collection(curr.children[child],word+child,words)
// //       }
// //   }



// // }


// // const trie=new Trie()

// // trie.insert('amjad')
// // trie.insert('ammu')
// // trie.insert('amju')

// // console.log(trie.searchPrefix('amj'));





// // class Node{

// //   constructor(){
// //     this.children={}
// //     this.isWordEnd=false
// //   }
// // }

// // class Trie{

// //   constructor(){
// //     this.root=new Node()
// //   }

// //   insert(word){

// //     let curr=this.root

// //     for(let i=0;i<word.length;i++){
// //      let insertData=word[i]

// //          if(!(insertData in curr.children)){
// //            curr.children[insertData]=new Node()
// //          }

// //          curr=curr.children[insertData]
// //     }

// //     curr.isWordEnd=true

// //   }

 

// //   searchPrefix(word){

// //      let curr=this.root
// //      let words=[]

// //      for(let i=0;i<word.length;i++){

// //        let searchData=word[i]

// //        if(!(searchData in curr.children)){
 
// //           return words

// //        }

// //        curr=curr.children[searchData]
// //      }

// //      this.collection(curr,word,words)
// //      return words
// //   }

// //   collection(curr,word,words){

// //       if(curr.isWordEnd==true){
// //         words.push(word)
// //       }

// //       for(let child in curr.children){
// //      this.collection(curr.children[child],word+child,words)        
// //       }

      
// //   }
// // }

// // const trie=new Trie()

// // trie.insert('amjad')
// // trie.insert('ammu')
// // trie.insert('amju')

// // console.log(trie.searchPrefix('amj'));


// // min(root){

// //     if(!root.left){
// //    return root.value
// //     }else{
// //      return this.min(root.left)
// //     }
  
// // }

// // delNode(value){


// //   this.root=this.deleteNode(this.root,value)

// // }

// //   deleteNode(root,value){

// //     if(root===null){
// //       return root
// //     }

// //     if(value<root.value){
// //       root.left=this.deleteNode(root.left,value)
// //     }else if(value>root.value){
// //       root.right=this.deleteNode(root.right,value)
// //     }else{

// //       if(!root.left && !root.right){
// //         return null
// //       }else if(!root.left){
// //         return root.right
// //       }else if(!root.right){
// //         return root.left
// //       }

// //       root.value=this.min(root.right)
// //       root.right=this.deleteNode(root.right,root.value)
// //     }
// //     return root
// //   }

  

// // class Node{
// //   constructor(){

// //     this.children={}
// //     this.isWordEnd=false
// //   }
// // }

// // class Trie{

// //   constructor(){
// //     this.root=new Node()
// //   }



// //   insert(word){
// // let curr = this.root;

// //     for(let i=0;i<word.length;i++){
// //       let insertData=word[i]

// //       if(!(insertData in curr.children)){

// //           curr.children[insertData]=new Node()
// //       }
// //       curr=curr.children[insertData]
// //     }

// //     curr.isWordEnd=true
// //   }


// //   contains(word){

// //     let curr=this.root
// //      for(let i=0;i<word.length;i++){
// //        let searchData=word[i]
// //     if(!(searchData in curr.children)){
// //       return false
// //     }

// //     curr=curr.children[searchData]

// //      }

// //      return curr.isWordEnd
// //   }


// //   searchPrefix(word){

// //     let curr=this.root
// //     let words=[]
// //      for(let i=0;i<word.length;i++){
// //       let searchData=word[i]

// //       if(!(searchData in curr.children)){
// //           return words
// //       }

// //       curr=curr.children[searchData]
// //      }


// //      this.collection(curr,word,words)

// //       return words

// //   }

// //   collection(curr,word,words){

// //    if(curr.isWordEnd==true){
// //     words.push(word)
// //    }

// //     for(let child in curr.children){

// //       this.collection(curr.children[child],word+child,words)
// //     }

// //   }

// //   delete(word){

// //      this.deleteWord(this.root,word,0)
// //   }

// //   deleteWord(root,word,index){

// //     if(!root){
// //       return false
// //     }

// //     if(index===word.length){

// //        if(!root.isWordEnd){
// //         return false
// //        }

// //         root.isWordEnd=false

// //         return Object.keys(root.children).length===0
// //     }

// //     let char = word[index]
// //     if(this.deleteWord(root.children[char],word,index+1)){
       
// //       delete root.children[char]

// //       return Object.keys(root.children).length===0
// //     }
// //   }


// // }

// // const trie=new Trie()

// // trie.insert("amjad")

// // trie.insert('amjadali');

// // trie.insert('amju');

// // trie.delete("amjad")

// // console.log(trie.searchPrefix('am')); 



// // class Heap{

// //   constructor(){
// //     this.data=[]
// //   }

// //   getParentIndex(i){
 
// //     return Math.floor(i-1)/2
// //   }
// //   getLeftChildIndex(i){

// //     return i*2+1
// //   }
// //   getRightChildIndex(i){

// //     return i*2+2
// //   }

// //   swap(i1,i2){

// //     let temp=this.data[i1]
// //     this.data[i1]=this.data[i2]
// //     this.data[i2]=temp

// //   }

// //   push(value){

// //     this.data[this.data.length]=value

// //     heapifyUp()

// //   }

// //   heapifyUp(){
// //     let currIndex=this.data.length-1

// //     while(currIndex>0 && this.data[currIndex]<this.data[this.getParentIndex(currIndex)]) {
// //       this.swap(currIndex,this.getParentIndex(currIndex))
// //       currIndex=this.getParentIndex(currIndex)

// //     }
// //   }

// //   pull(){
  
// //     let maxValue=this.data[0]

// //     this.data[0]=this.data[this.length-1]

// //     this.heapifyDown()

// //     this.data.length--

// //     return maxValue

// //   }

// //   heapifyDown(){

// //     let currIndex=0



// //     while(this.data[this.getLeftChildIndex(currIndex)]!==undefined){

// //       let lowestIndex=this.getLeftChildIndex(currIndex)

// //       if(this.data[this.getRightChildIndex]!==undefined && this.data[this.getRightChildIndex(currIndex)]<this.data[this.getLeftChildIndex(currIndex)]){
// //         lowestIndex=this.data[this.getRightChildIndex(currIndex)]
// //       }

// //       if(this.data[lowestIndex]<this.data[currIndex]){
// //         this.swap(lowestIndex,currIndex)
// //         currIndex=lowestIndex
// //       }else{
// //         return
// //       }

// //     }

// //   }
// // }


// // closestValue(target,root=this.root){
// //  let closest=root.value

// //   while(root!==null){

   

// //     if(Math.abs(target-root.value)<Math.abs(target-closest)){
// //       closest=root.value
// //     }

// //     if(target<root.value){
// //       root=root.left
// //     }else if(target>root.value){
// //       root=root.right
// //     }else{
// //       break;
// //     }
// //   }


// // }

// // isValidBst(){

// //   return chackBst(this.root,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY)
// // }

// // checkBst(root,min,max){

// //   if(root===null){
// //     return true
// //   }
 
// //   if(root.value >=max || root.value <=min){
// //     return false
// //   }

// //  return (checkBst(root.left,min,root.value) && chackBst(root.right,root.value,max))

// // }

// // closest(target,root=this.root){

// //   let closest=root.value

// //   while(root !== null){

// //      if(Math.abs(target-root.value)<Math.abs(target-closest)){
// //       closest=root.value
// //      }

// //      if(target<root.value){
// //       root=root.left
// //      }else if(target>root.value){
// //       root=root.right
// //      }else{
// //       break;
// //      }

// //   }

// // }



// // class Node{
// //   constructor(value){
// //     this.value=value
// //     this.left=null
// //     this.right=null
// //   }
// // }

// // this.root=null




// // bfs(startingIndex){


// //     const queue=[]
 
// //     let visited={}

// //     visited[startingIndex]=true

// //     queue.push(startingIndex)

// //     while(queue.length>0){
    
// //       let curr=queue.shift()
// //        console.log(curr.value)

// //       for(let neighbor of this.adjacencyList(curr)){
         
// //         if(!visited[neighbor]){

// //           visited[neighbor]=true

// //           queue.push(neighbor)

// //         }
// //       }

// //       for(let vertex in this.adjacencyList)
      
// // }




// // // dfs(){

// // //   let allValues=new Set(Object.keys(this.adjacencyList))
// // //   let visited={}

// // //   for(let vertex in allValues){
// // //      visited[vertex]=false
// // //   }

// // //   const dfsHelper=(vertex)=>{



// // //        visited[vertex]=true
// // //        console.log(vertex)
// // //        allValues.delete(vertex)


// // //        for(let neighbor of adjacencyList(vertex)){

// // //           if(!visited[neighbor]){
// // //             visited[neighbor]=true
// // //             dfsHelper(neighbor)
// // //           }
// // //        }
    
// // //   }

// // //   dfsHelper(startingIndex)
// // // }


// // dfs(startingVertex){

// //   let allValues=new Set(Object.keys(this.adjacencyList))
// //   let visited={}

// //     for(let vertex in allValues){
// //       visited[vertex]=false

// //     }

// //     const dfsHelper=(vertex)=>{

// //       visited[vertex]=true
// //       console.log(vertex)
// //       allValues.delete(vertex)


// //       for(let neighbor of this.adjacencyList[vertex]){

// //           if(!visited[neighbor]){
// //             dfsHelper(neighbor)
// //           }
// //       }

// //     }




// //     dfsHelper(startingVertex)

// // for (let vertex of adjacencyList){
// //      if(!visited[vertex]){
// //       dfsHelper(vertex)
// //      }
// // }


// // }



// // closestValue(targe){


// // }


// class Node{

//   constructor(){
//     this.children={}
//     this.isWordEnd=false
//   }
// }

// class Trie{
//  constructor(){
//    this.root=new Node()
//  }

//  insert(word){

//   let curr=this.root
//   for(let i=0;i<word.length;i++){

//      let insertData=word[i]

//      if(!(insertData in curr.children)){

//        curr.children[insertData]=new Node
//      }

//      curr=curr.children[insertData]
     
//   }

//   curr.isWordEnd=true
//  }


//  contains(word){

//   let curr=this.root

//   for(let i=0;i<word.length;i++){
//     let searchData=word[i]

//     if(!(searchData in curr.children)){
//       return false
//     }

//     curr=curr.children[searchData]

//   }

//      return curr.isWordEnd
//  }


//  searchPrefix(word){

//   let curr=this.root
//   let words=[]

//   for(let i=0;i<word.length;i++){
//     let searchData=word[i]

//     if(!(searchData in curr.children)){
//       return words
//     }
//     curr=curr.children[searchData]
//   }
//   this.collection(curr,word,words)
//   return words
//  }


// collection(curr,word,words){

//   if(curr.isWordEnd==true){
//     words.push(word)
//   }

  
//   for(let child in curr.children){

//     this.collection(curr.children[child],word+child,words)

//   }

// }




// delete(word){
  
//   this.deleteWord(this.root,word,0)


// }

// deleteWord(root,word,index){

//    if(!root){
//     return false
//    }

//    if(index===word.length){
//     if(root.isWordEnd==true){
//       return false
//     }
//     root.isWordEnd=false

//    return Object.keys(root.children).length===0

  
//    }

//    let char=word[index]
//    if(this.deleteWord(root.children[char],index+1)){


//     delete root.children[char]

//     return Object.keys(root.children).length===0

//    }
// }

// }

// let tries = new Trie();
// tries.insert('rithas');
// tries.insert('rithu')
// tries.insert("apple");
// tries.insert('appledata');
// tries.insert('applemon');

// // console.log(tries.delete('apple')); 

// console.log(tries.searchPrefix('rith'));



// class Node{
//   constructor(value) {
//     this.value=value
//     this.left=null
//     this.right=null
//   }
// }
// class BST{

//   constructor(){
//     this.root=null
//   }


//   isEmpty(){
//     return this.root===null
//   }


//   insert(value){
//     const node=new Node(value)
//     if(this.isEmpty()){
//       this.root=node
//     }else{

//       this.inserValue(this.root,node)
//     }
//   }

//   inserValue(root,node){

//     if(node.value<root.value){
//       if(root.left===null){
//         root.left=node
//       }else{
//         this.inserValue(root.left,node)
//       }
//     }else if(node.value>root.value){
//       if(root.right===null){
//         root.right=node
//       }else{
//         this.inserValue(root.right,node)
//       }
//     }
//   }



//   search(value,root=this.root){

//     if(value===root.value){
//       return true
//     }else if(value<root.value){
//        this.search(value,root.left)
//     }else if(value>root.value){
//       this.search(value,root.right)
//     }
      
//   }

//   preOrder(root=this.root){
//     console.log(root.value)
//     this.preOrder(root.left)
//     this.preOrder(root.right)
//   }

//   inOrder(root=this.root){

//       this.inOrder(root.left)

//       console.log(root.value)

//       this.inOrder(root.right)
//   }

//   postOrder(root=this.root){

//     this.postOrder(root.left)
//     this.postOrder(root.right)
//     console.log(root.value)
//   }


//   levelOrder(){
//     let curr=this.root

//     const queue=[]

//     queue.push(curr)

//     while(queue.length){
    
//       let curr= queue.shift()
//       console.log(curr.value)

//       if(curr.left){
//         queue.push(curr.left)
//       }
//       if(curr.right){
//         queue.push(curr.right)
//       }
//     }
//   }

//   min(root){

//     if(!root.left){
//       return root.left
//     }else{
//       this.min(root.left)
//     }
//   }

//   max(root){
//     if(!root.right){
//       return root.right
//     }else{
//       this.max(root.right)
//     }
//   }

//   delete(value){

//     this.root=this.deleteValue(this.root,value)
     

//   }

//   deleteValue(root,value){

//     if(root===null){
//       return root
//     }

//     if(value<root.value){
//       root.left=this.deleteValue(root.left,value)
//     }else if(value>root.value){
//       root.right=this.deleteValue(root.right,value)
//     }else{

//     if(!root.left && !root.right){
//       return null
//     }else if(!root.left){
//       return root.right
//     }else if(!root.right){
//       return root.left
//     }

//     root.value=this.min(root.right)
//     root.right=this.deleteValue(root.right,root.value)
//     }
//   return root 
//   }


// closestValue(target,root=this.root){

//   let closest=root.value

//   while(root!==null){
//    if (Math.abs(target - root.value) < Math.abs(target - closest)) {
//      closest = root.value;
//    }
//    if(target<root.value){
//     root=root.left
//    }else if(target>root.value){
//     root=root.right
//    }else{
//     break
//    }

//   }
 
// return closest
    
   
// }

// isAllBst=
// }

// const bst=new BST()



// bst.insert(10);
// bst.insert(5);
// bst.insert(15);
// bst.insert(3);
// bst.insert(54);

// console.log('iamclosest', bst.closestValue(6));

// // console.log(bst.isValidBst());

// bst.levelOrder(); 


// class Graph{
//   constructor(){

//     this.adjacencyList={}
//   }

//   addVertex(vertex){

//     if(!this.adjacencyList[vertex]){
//       this.adjacencyList[vertex]=new Set()
//     }
//   }

//   addEdge(v1,v2){

//     if(!this.adjacencyList)
//   }
// }


// min(root){
//   if(!root.left){
//     return root.value
//   }else{
//     this.min(root.left)
//   }
// }
// delete(value){

//  this.root= this.deleteValue(this.root,value)

// }

// deleteValue(root,value){


//     if(root===null){
//       return root
//     }

//     if(value<root.value){

//        root.left=this.deleteValue(root.left,value)
//     }else if(value>root.value){

//       root.right=this.deleteValue(root.right,value)
//     }else{

//         if(!root.left && !root.right){
//           return null
//         }else if(!root.left){
//           return root.right
//         }else if(!root.right){

//           return root.left
//         }

//         root.value=this.min(root.right)
//         root.right=this.deleteValue(root.right,root.value)
//     }
//     return root
// }



// isValidBst(){

//    return this.checkBst(this.root,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY)

// }

// checkBst(root,min,max){

//     if(root===null){

//       return true
//     }

//     if(root.value<=min ||root.value>=max){
//       return false
//     }

//     return (this.checkBst(root.left,min,root,value) && this.checkBst(root.right,root.value,max))

// }


// delete(word){
//     this.deleteWord(this.root,word,0)
// }
// deleteWord(root,word,index){

//  if(index===word.length){
//   if(!root.isWordEnd){

//     return false

//   }

//   root.isWordEnd=false

//   return Object.keys(root.children).length===0
//  }

// let char=word[index]

//  if (this.deleteWord(root.children[char],word,index+1)){
    
//      delete root.children[char]

//      return Object.keys(root.children).length===0


//  }
   
// }





// TransitionEvent.deleteWord("amjad")



   searchPrefix(word){

    let curr=this.root
     let words=[]

    for(let i=0;i<word.length;i++){
      let searchData=word[i]

      if(!(searchData in curr.children)){
        return words
      }

      curr=curr.children[searchData]
    }

    this.collection(curr,word,words)
    return words
   }

   collection(curr,word,words){

      
    if(curr.isWordEnd){
      words.push(word)
    }
        for(let child in curr.children){

          this.collection(curr.children[child],word+child,words)
        }
   }


