class Stack {
  constructor() {
    this.stack = [];
    this.size = 0;
  }

  push(value) {
    this.stack[this.size] = value;
    this.size++;
  }

  pop() {
    let removedItem = this.stack[this.size - 1];

    delete this.stack[this.size - 1];

    this.size--;

    return removedItem;
  }

  enqueue(value) {
    this.stack[this.size] = value;
    this.size++;
  }

  dequeue() {
    let removedItem = this.stack[0];

    this.stack.splice(0, 1);
    this.size--;
    return removedItem;
  }

  peek() {
    return this.stack[this.size - 1];
  }

  getSize() {
    return this.stack.length;
  }

  print() {
    let listValues = '';

    for (let i = 0; i < this.size; i++) {
      listValues = listValues + `${this.stack[i]} `;
    }
    console.log(listValues);
  }
}

const stack = new Stack();

stack.push(47);
stack.push(67);
stack.push(56);

console.log(stack.dequeue());

stack.enqueue(78);
console.log(stack.pop());
stack.print();
