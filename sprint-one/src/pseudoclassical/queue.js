var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.head = 0;
  this.tail = 0;
  this.count = 0;
};

Queue.prototype.enqueue = function(value){
  this.storage[this.tail] = value
  this.count ++
  this.tail ++
}

Queue.prototype.dequeue = function(){
  var placeholder = this.storage[this.head];
  if (this.head < this.tail){
    delete this.storage[this.head]
    this.head++
  }
  this.count -=1
  return placeholder
}

Queue.prototype.size = function(){
  if (this.count <= 0){
    return 0
  }
  return this.count
}


