class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.count = 0;
  }

  push(value){
    this.storage[this.count] = value
    this.count ++
  }
  pop(){
    var lastVal = this.storage[this.count-1]
    delete this.storage[this.count-1]
    this.count -=1
    return lastVal
  }
  size(){
    if (this.count <= 0){
      return 0
    }
    return this.count
  }
}