var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;



  list.addToTail = function(value) {
    var newNode = Node(value);

    if (list.head === null) {
      list.head = newNode;
      list.tail = newNode;
    }
    this.tail.next = newNode;
    this.tail = newNode;
  };



  list.removeHead = function() {
    var removed = this.head;
    this.head = this.tail;
    return removed.value;
  };



  list.contains = function(target, node) {
    var loop = true;
    node = node || this.head;

    if (node.value === target) {
      console.log(1);
      return true;
    } else if (node.next) {
      console.log(2);
      list.contains(target, node.next);
    } else {
      console.log(3);
      return false;
    }
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
