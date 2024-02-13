class CircularQueue {
  constructor(capacity) {
    this.queue = new Array(capacity);
    this.capacity = capacity;
    this.size = 0;
    this.front = 0; // Keep track of the front index
  }

  enqueue(value) {
    if (this.size === this.capacity) {
      console.log('Queue is full. Cannot enqueue.');
      return;
    }
    this.queue[(this.front + this.size) % this.capacity] = value;
    this.size++;
  }

  dequeue() {
    if (this.size === 0) {
      console.log('Queue is empty. Cannot dequeue.');
      return;
    }
    this.queue[this.front] = null;
    this.front = (this.front + 1) % this.capacity;
    this.size--;
  }

  getSize() {
    return this.size;
  }

  isEmpty() {
    return this.size === 0;
  }

  print() {
    if (this.isEmpty()) {
      console.log('Queue is empty.');
    } else {
      console.log(this.queue.toString());
    }
  }
}

const queue = new CircularQueue(3);

queue.enqueue(10);
queue.enqueue(67);
queue.enqueue(42); // Queue is full

console.log(queue.getSize()); // Should print 2

queue.dequeue();
queue.enqueue(434757)

console.log(queue.dequeue());
queue.print(); // Should print [10, 67]

console.log(queue.getSize()); // Should print 1
queue.print(); // Should print [null, 67]
