// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class LinkedList {
//   constructor() {
//     this.head = null;
//     this.top = null;
//     this.size = 0;
//   }

//   isEmpty() {
//     return this.size === 0;
//   }

//   push(value) {
//     const node = new Node(value);
//     if (this.isEmpty()) {
//       this.head = node;
//       this.top = node;
//     } else {
//       this.top.next = node;
//       this.top = node;
//     }
//     this.size++;
//   }

//   pop() {
//     if (this.isEmpty()) {
//       console.log("Stack is empty you cant pop");
//     } else {
//       const removedNode = this.top.value;
//       let prev = this.head;
//       while (prev.next.next) {
//         prev = prev.next;
//       }
//       prev.next = removedNode.next;
//       this.top = prev;
//       this.size--;
//       console.log(removedNode);
//     }
//   }

//   print() {
//     let listValues = "";
//     let curr = this.head;
//     while (curr) {
//       listValues += " " + curr.value;
//       curr = curr.next;
//     }

//     console.log(listValues);
//   }
// }

// const list = new LinkedList();

// list.push(23);
// list.push(34);
// list.push(55);
// list.push(87);
// list.pop();
// list.pop();
// list.print();

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  push(value) {
    const newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
    this.size++;
  }

  pop() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    const poppedValue = this.top.value;
    this.top = this.top.next;
    this.size--;
    return poppedValue;
  }

  print() {
    let current = this.top;
    let result = '';
    while (current) {
      result = result ? `${current.value}, ${result}` : `${current.value}`;
      current = current.next;
    }
    console.log(result);
  }
}

const list = new LinkedList();

list.push(23);
list.push(34);
list.push(55);
list.push(87);
list.pop();
list.pop();
list.print();
