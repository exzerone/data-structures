var Queue = function() {
  var someInstance = {};
  var count = 0;
  // Use an object with numeric keys to store values
  var storage = {};
  var head = 0;
  var tail = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[tail] = value;
    count ++
    tail ++
  };

  someInstance.dequeue = function() {
    var placeholder = storage[head];
    if (head < tail){
      delete storage[head]
      head++
    }
    count -=1
    return placeholder
  };

  someInstance.size = function() {
    if (count <= 0){
      return 0
    }
    return count
  };

  return someInstance;
};
