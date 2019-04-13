var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // fix me
  //since object does not contain order, we use object
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  //assign item to the object
  this._storage[item] = item
};

setPrototype.contains = function(item) {
  //look to see if our container has the item
  //if we find the item in the container
    //return true
  //otherwise
    //return false

  if(this._storage[item]){
    return true
  }
  return false
};

setPrototype.remove = function(item) {
  //delete the item from the list
  delete this._storage[item]
};

/*
 * Complexity: What is the time complexity of the above functions?
  constant time complexity
 */
