// class Queue{
//     constructor(){
//         this.items={}
//         this.front = 0;
//         this.back=0
//     }

//     enqueue(element){
//         this.items[this.back]=element
//         this.back++

//     }

//     dequeue(){
//         const item=this.items[this.front]
//         delete this.items[this.front]
//         this.front++
//         return item
//     }

//     isEmpty(){

//     return this.back - this.front===0

//     }

//     peek(){

//    return this.items[this.front]
   
//    }

//    getSize(){
//     return this.back-this.front
//    }

//    print(){
//     console.log(this.items)
//    }
// }

// const queue=new Queue()

// console.log(queue.isEmpty())
// queue.enqueue(22)
// queue.enqueue(18)
// queue.enqueue(2)
// queue.enqueue(1)

// queue.dequeue()
// queue.dequeue()
// queue.dequeue()
// console.log(queue.peek())


// queue.print()
// console.log(queue.getSize()); 


class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.back = 0;
  }

  enqueue(value) {
    this.queue[this.back] = value;
    this.back++;
  }

  dequeue() {
    if (this.isEmpty()) {
      console.log('Queue is empty, cannot dequeue.');
      return undefined;
    }

    let removedItem = this.queue[this.front];
    delete this.queue[this.front];
    this.front++;

    return removedItem;
  }

  peek() {
    if (this.isEmpty()) {
      console.log('The queue is empty, cannot peek.');
    } else {
      return this.queue[this.front];
    }
  }

  isEmpty() {
    return this.back - this.front === 0;
  }

  getSize() {
    return this.back - this.front;
  }

  print() {
    let listValues = '';

    for (let i = this.front; i < this.back; i++) {
      listValues = listValues + `${this.queue[i]} `;
    }
    console.log(listValues);
  }
}

const queue = new Queue();
queue.enqueue(34);
queue.enqueue(763);
queue.enqueue(45);

console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.peek());

queue.print();