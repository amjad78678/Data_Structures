class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.back = 0;
  }

  isEmpty() {
    return this.back - this.front === 0;
  }

  enqueue(value) {
    this.queue[this.back] = value;
    this.back++;
  }

  dequeue() {
    if (this.isEmpty()) {
      console.log('list is empty cant deque');
    }
    const removedItem = this.queue[this.front];
    delete this.queue[this.front];

    this.front++;
    return removedItem;
  }

  peek() {
    if (this.isEmpty()) {
      console.log('list is empty cant peek');
    } else {
      return this.queue[this.front];
    }
  }

  push(value) {
    this.front--;
    this.queue[this.front] = value;
  }

  pop() {
    let removedItem = this.queue[this.front];
    delete this.queue[this.front];

    this.front++;
    return removedItem;
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
queue.enqueue(87);
queue.enqueue(3);
queue.enqueue(7);

console.log(queue.dequeue());

queue.push(46);
console.log(queue.pop());
queue.print();
