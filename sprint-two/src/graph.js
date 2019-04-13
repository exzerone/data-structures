

// Instantiate a new graph
var Graph = function() {
  // this.something = {}
  
};



Graph.prototype.addNode = function(node) {
  this[node] = [];
};



// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (var key in this){
    if (key === String(node)){
      return true;
    } else {
      return false;
    } 
  }
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  //look at the items of the node list 
  //with each item, i would find the item within the edges array  
  //store item im looking at so i can access it
  //and then, i want to find the node associated with the item in the storage value
  //then remove the node from the edges of the associated storage value within graph
  //go again until the end of the node list, then delete the node
  for (var i = 0; i < this[node].length; i++){
    var storage = this[node][i];   
    for (var j =  0; j < this[storage].length; j++){
      if (this[storage][j] === node){
        this[storage].splice(j, 1);
        break;
      }
    }
  }

  delete this[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  for (var i = 0; i < this[fromNode].length; i++){
    if (this[fromNode][i] === toNode){
      return true;
    }  
  } 
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this[fromNode].push(toNode);
  this[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  //Go through the edges stored in the array with the key of fromNode
    //See if the item currently being looked at match to the item that i want
    //if they match
      //want to remove from the list of items
    //if they dont match
      //continue to look through the list
  //Go through the edges stored in the array with the key of toNode
    //See if the item currently being looked matches to the item that i want 
    //if they match
      //remove the item from the list im currently looking at
    //if they dont match
      //continue to look for the next item in the list
  for (var i = 0; i < this[fromNode].length; i++){
    if(this[fromNode][i] === toNode){
      this[fromNode].splice(i, 1);
      break;  
    } 
  }
  for(var j = 0; j < this[toNode].length; j++){
    if(this[toNode][j] === fromNode){
      this[toNode].splice(j, 1);
      break;
    }
  }

};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  //looking at every node
  //for every node, i want to pass it into the cb function
  
  for (var key in this){
    console.log(key, this[key])
    if(Array.isArray(this[key])){
      cb(key)
    }
  }

  // for (var key in this){
  //   if (Number(key) >= 0){
  //   cb(key)
  //   }
  // }
  
};

/*
 * Complexity: What is the time complexity of the above functions?
 */































 