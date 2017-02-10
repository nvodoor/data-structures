var BinarySearchTree = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

BinarySearchTree.prototype.left = function left() {
  return this.left;
};

BinarySearchTree.prototype.right = function right() {
  return this.right;
};

BinarySearchTree.prototype.insert = function insert(nodeValue) {
  var node = new Node(nodeValue);

  // set current to this.value
  // while true
    // if node.value < current.value
      // if current.left is null
        // current.left is node
        // return
      // else 
        // current is current.left

    // if node.value > current.value
      // if current.right is null
        // current.right is node
          // return 
      // else 
        // current = current.right

};

BinarySearchTree.prototype.contains = function contains() {

};

BinarySearchTree.prototype.depthFirstLog = function depthFirstLog() {

};

BinarySearchTree.prototype.Node = function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
