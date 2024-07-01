class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let prev = this.head;

      while (prev.next) {
        prev = prev.next;
      }
      prev.next = node;
    }
    this.size++;
  }

  insert(value, index) {
    if (index === 0) {
      this.prepend(value);
    } else {
      const node = new Node(value);
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }

      node.next = prev.next;
      prev.next = node;
      this.size++;
    }
  }
  removeFrom(index) {
    let removedNode;

    if (index < 0 || index >= this.size) {
      console.log("invalid index");
      return null;
    }
    if (index === 0) {
      removedNode = this.head;
      this.head = this.head.next;
    } else {
      let prev = this.head;

      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }

      removedNode = prev.next;
      prev.next = removedNode.next;
    }

    this.size--;
    return removedNode.value;
  }

  removeValue(value) {
    let removedNode;

    if (this.isEmpty()) {
      console.log("List is empty");
    }

    if (this.head.value === value) {
      removedNode = this.head;
      this.head = this.head.next;

      this.size--;
      return value;
    } else {
      let prev = this.head;

      while (prev.next && prev.next.value !== value) {
        prev = prev.next;
      }

      if (prev.next) {
        removedNode = prev.next;
        prev.next = removedNode.next;
        this.size--;
        return removedNode.value;
      }

      return null;
    }
  }

  search(value) {
    if (this.isEmpty()) {
      console.log("the List is empty");
      return -1;
    }

    let curr = this.head;
    let i = 0;
    while (curr) {
      if (curr.value === value) {
        return i;
      }

      curr = curr.next;
      i++;
    }

    return -1;
  }

  reverse() {
    let prev = null;
    let curr = this.head;

    while (curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }

    this.head = prev;
  }

  arrayToLinkedList(arr) {
    arr.forEach((val) => {
      this.append(val);
    });
  }

  print() {
    if (this.isEmpty()) {
      console.log("List is empty");
    } else {
      let curr = this.head;
      let listValues = "";
      while (curr) {
        listValues = listValues + `${curr.value} `;
        curr = curr.next;
      }
      console.log(listValues);
    }
  }

  removeEvenNumbers() {
    if (this.isEmpty()) {
      console.log("you cant remove bcz linked list is empty");
    } else {
      let prev = this.head;
      while (prev.next.value % 2 === 0) {
        prev = prev.next;
      }

      let removedNode = prev.next;
      prev.next = removedNode.next;
      this.size--;
      console.log(removedNode.value);
    }
  }
}

const list = new LinkedList();

list.prepend(20);
list.prepend(23);
list.append(200);
list.arrayToLinkedList([11, 23, 22, 34]);
list.print()
list.removeEvenNumbers()
list.print();
