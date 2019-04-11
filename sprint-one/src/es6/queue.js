class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.count = 0;
    this.head = 0;
    this.tail = 0;
  }

  enqueue(value){
    this.storage[this.tail] = value
  this.count ++
  this.tail ++
  }
  dequeue(){
    var placeholder = this.storage[this.head];
    if (this.head < this.tail){
      delete this.storage[this.head]
      this.head++
    }
    this.count -=1
    return placeholder
  }
  size(){
    if (this.count <= 0){
      return 0
    }
    return this.count
  }
}
