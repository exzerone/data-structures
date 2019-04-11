var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {};
  obj.storage = {};
  obj.head = 0;
  obj.tail = 0;
  obj.count = 0;
  extend(obj, queueMethods);
  return obj;
};

var extend = function(to, from){
  for (var key in from){
    to[key] = from[key]
  }
};

queueMethods = {};

queueMethods.enqueue = function(value){
  this.storage[this.tail] = value
  this.count ++
  this.tail ++
}

queueMethods.dequeue = function(){
  var placeholder = this.storage[this.head];
  if (this.head < this.tail){
    delete this.storage[this.head]
    this.head++
  }
  this.count -=1
  return placeholder
}

queueMethods.size = function(){
  if (this.count <= 0){
    return 0
  }
  return this.count
}


