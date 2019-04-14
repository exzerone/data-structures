

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //We need to go through the storage to see if index is nonexistent
    //If it doesn't exist we want to make a new bucket, and put the item inside the bucket.
    //Otherwise, 
      //Go through the bucket and see if the item exists in the bucket 
        //If it does, update the item with the new value
        //Otherwise, add it to the end of the bucket list
    if(!this._storage.get(index)) {
      this._storage.set(index, [])
      var bucket = this._storage.get(index);
      bucket.push([k,v]);
      // console.log(bucket)
    } else {
      //we need to redefine bucket
      //then we can see if the key is inside of the bucket
      //if the key is inside of the bucket
        //update the key inside the bucket to the new key
      //Otherwise
        //add the key pair to the bucket
     var bucket = this._storage.get(index);
     var found = false;
     for (var i = 0; i < bucket.length; i++){
      if (bucket[i][0] === k){
        bucket[i][1] = v;
        found = true;
      }
     }
      if (found === false){
        bucket.push([k, v]);
      }
    }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (bucket){
    for (var i = 0; i < bucket.length; i++){
      if (bucket[i][0] === k){
        return bucket[i][1]
      } 
    }
  }
  return undefined
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  for (var i = 0; i < bucket.length; i++){
    if (bucket[i][0] === k){
      bucket.splice(i, 1)
    }
  }


};



/*
 * Complexity: What is the time complexity of the above functions?
 */






