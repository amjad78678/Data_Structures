class Heap {
  constructor() {
    this.data = [];
  }

  getParentIndex(i) {
    return Math.floor((i - 1) / 2);
  }

  getLeftChildIndex(i) {
    return i * 2 + 1;
  }

  getRightChildIndex(i) {
    return i * 2 + 2;
  }

  swap(i1, i2) {
    const temp = this.data[i1];
    this.data[i1] = this.data[i2];
    this.data[i2] = temp;
  }

  push(value) {
    this.data[this.data.length] = value;
    this.heapifyUp();
  }

  heapifyUp() {
    let currIndex = this.data.length - 1;

    while (
      currIndex > 0 &&
      this.data[currIndex] > this.data[this.getParentIndex(currIndex)]
    ) {
      this.swap(currIndex, this.getParentIndex(currIndex));
      currIndex = this.getParentIndex(currIndex);
    }
  }

  heapifyDown() {

    let currIndex = 0;

    while (this.data[this.getLeftChildIndex(currIndex)] !== undefined) {
      let biggestChildIndex = this.getLeftChildIndex(currIndex);

      if (
        this.data[this.getRightChildIndex(currIndex)] !== undefined &&
        this.data[this.getRightChildIndex(currIndex)] >
          this.data[this.getLeftChildIndex(currIndex)]
      ) {
        biggestChildIndex = this.getRightChildIndex(currIndex);
      }

      if (this.data[currIndex] < this.data[biggestChildIndex]) {
          this.swap(currIndex, biggestChildIndex);
        currIndex = biggestChildIndex;
      } else {
        return;
      }
    }
  }

  poll() {
    const maxValue = this.data[0];
    this.data[0] = this.data[this.data.length - 1];
    this.data.length--;
    this.heapifyDown();
    return maxValue;
  }
}

const heap = new Heap();

console.log(heap);

heap.push(56);
heap.push(6);
heap.push(64);
heap.push(8);
heap.push(23);

console.log(heap.data.join(','));

a = [];

a.push(heap.poll());
a.push(heap.poll());
a.push(heap.poll());
a.push(heap.poll());
a.push(heap.poll());

console.log('top 5 items', a);
console.log(heap.data.join(','));
