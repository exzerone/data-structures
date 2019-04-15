var BinarySearchTree = function(value) {
  var binaryTree = Object.create(binaryTreePrototype)
  binaryTree.value = value;
  binaryTree.left = null;
  binaryTree.right = null;
  return binaryTree;
};

var binaryTreePrototype = {};

binaryTreePrototype.insert = function(val){
//first we want to know if the value already exist in the tree, and we need to do some comparison. If it doesn't match, check if it's smaller or larger. 
//if it's larger, move to the right and continue to see next tree contains subtree and if any tree contains node that is larger or smaller
//if it's smaller, move to the left and continue to see if next tree contain  subtree and if any tree contain tree that is smaller or larger 
//recursive
//else
  //do thing since value already exist in the tree
  if (val > this.value){
    if (this.right === null){
      this.right = BinarySearchTree(val);
    } else {
      this.right.insert(val);
    }
  } else if (val < this.value){
    if (this.left === null){
      this.left = BinarySearchTree(val);
    }else {
      this.left.insert(val);
    }
  } 
};

binaryTreePrototype.contains = function(val){
  //first we want to check if current tree has value that matches to the desired query
  //if not, we want to know if the query is smaller or larger than the value of our current tree
  //if query is larger than the value of current tree
    //we check if the current tree has any subtree to its right, if not, we check if current value equals to query with recursive call
  //if query is smaller thant he value of current tree
    //we check if the current tree has any subtree to its left, if not, we check if current value equals to query with recursive call
  //eventually if none of the conditionals happen, we return false as the query never match to any of the value of the existing trees
  if (val === this.value){
    return true;
  } else if (val > this.value){
    if (this.right !== null){
      return this.right.contains(val);
    }
  } else if (val < this.value){
    if(this.left !== null){
      return this.left.contains(val);
    }
  }
  return false;
};

binaryTreePrototype.depthFirstLog = function(cb){
//we pass the value of current tree to the callback function
//if the current tree has a subtree to its left, we go into that tree and perform the callback function to its value
//if the current tree has a subtree to its right, we also go into that tree and perform the callback function to its value
//since we do not know the depth of the tree, we recursively call the function when we try to go deeper to the right or left subtree when they exist

cb(this.value)
if (this.left){
  this.left.depthFirstLog(cb)
}
if(this.right){
  this.right.depthFirstLog(cb)
}
}


/*
 * Complexity: What is the time complexity of the above functions?
 */
