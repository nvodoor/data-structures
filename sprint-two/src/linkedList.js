var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  list.previous = null;



  list.addToTail = function(value) {
    var newNode = Node(value);

    if (list.head === null) {
      list.head = newNode;
      list.tail = newNode;
    }
    this.tail.next = newNode;
    newNode.previous = this.tail;
    this.tail = newNode;
  };



  list.removeHead = function() {
    var removed = this.head;
    this.head = this.head.next;
    return removed.value;
  };



  list.contains = function(target, node) {
    node = node || this.head;

    while (node) {
      if (node.value === target) {
        return true;
      }
      node = node.next;
    }
    return false;
  };

  return list;
};



var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;
  node.previous = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
