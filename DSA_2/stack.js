// class Stack{

//     constructor(){
//        this.stack=[]

//     }

//     isEmpty(){
//         return this.stack.length===0
//     }
//     getSize(){
//         return this.stack.length
//     }
//     push(element){

//         this.stack.push(element)
//     }

//     pop(){
//            if (this.isEmpty()) {
//              console.log('list is empty cant pop');
//            }
//         this.stack.pop()
//     }

//     peek(){
//         if(this.isEmpty()){
//               console.log('list is empty cant peek');
//         }
//       return this.stack[this.getSize()-1]
//     }

//     print(){
//        console.log( this.stack.toString())
//     }

// }

// const stack=new Stack()

// stack.push(100)
// stack.push(33)
// stack.push(76)

// console.log(stack.peek())
// stack.pop()
// console.log(stack.peek());
// stack.print()

class Stack {
  constructor() {
    this.items = [];
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    console.log(this.size);
  }

  push(element) {
    this.items[this.size] = element;
    this.size++;
  }

  pop() {
    if (this.isEmpty()) {
      return undefined;
    }
    let removedItem = this.items[this.size - 1];
    delete this.items[this.size - 1];
    this.size -= 1;
    return removedItem;
  }

  peak() {
    if (this.isEmpty()) {
      console.log("empty");
    } else {
      console.log(this.items[this.size - 1]);
    }
  }

  print() {
    let str = "";
    for (let i = 0; i < this.size; i++) {
      str += this.items[i] + " ";
    }

    console.log(str);
  }
}

const stack = new Stack();

console.log(stack.isEmpty());
stack.push(12);
stack.push(13);
stack.push(23);
stack.push(43);
stack.pop();

stack.peak();
stack.print();
