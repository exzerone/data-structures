var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = Node(value)
    if (list.head === null) {
      list.head = node;
      list.tail = node;
    } else {
      list.tail.next = node;
      list.tail = node;
    }
  //if list.head sand list.tail are both equal to null
    //add a node with a value to the list
    //point list.head to that node
    //point list.tail to that node
  //else
    //add additional node with a value to the list
    //change list.tail to point to most recently added node checked
    //change node.next of the first node to the most recent node checked
  };

  list.removeHead = function() {
    //if list.head is != null 
      //change the pointer list.head to node.next
    var result = list.head.next;
    var value = list.head.value;
    delete list.head
    console.log(list)
    list.head  =  result;
    return value;
    console.log(list)
  };

  list.contains = function(target) {
    //loop through the list 
      //see if target exists, and if it does return true.
  
    var head = list.head
    while (head) {
      if(head.value === target) {
        return true;
      }
      head = head.next
    }
    return false;
  }
  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

