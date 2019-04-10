var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0

  // Implement the methods below
  someInstance.push = function(value) {
    storage[count] = value
    count ++
  };

  someInstance.pop = function() {
    var lastVal = storage[count-1]
    delete storage[count-1]
    // console.log(storage)
    count -=1
    return lastVal
  };

  someInstance.size = function() {
    if (count <= 0){
      return 0
    }
    return count
  };

  return someInstance;
};

