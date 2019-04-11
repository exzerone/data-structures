var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {};
  obj.storage = {};
  obj.count = 0;
  extend(obj, stackMethods);
  return obj;
};


var extend = function(to, from){
  for (var key in from){
    to[key] = from[key]
  }
};

var stackMethods = {};

stackMethods.push = function(value){
  this.storage[this.count] = value
  this.count ++
}

stackMethods.pop = function(){
  var lastVal = this.storage[this.count-1]
    delete this.storage[this.count-1]
    this.count -=1
    return lastVal

}

stackMethods.size = function(){
  if (this.count <= 0){
    return 0
  }
  return this.count
}

