var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;



  list.addToTail = function(value) {
    var newNode = Node(value);
    if (this.head === null) {
      this.head = newNode;
    } 
    this.tail = newNode;
    this.head.next = this.tail;
  };



  list.removeHead = function() {
    var removed = this.head;
    this.head = this.tail;
    return removed.value;
  };



  list.contains = function(target) {
    return this.head.value === target || this.tail.value === target;
  };

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
