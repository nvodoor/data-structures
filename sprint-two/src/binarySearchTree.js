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

  var current = this;
  var loop = true;

  while (loop) {
    console.log(current, this);
    if (node.value < current.value) {
      if (!current.left) {
        current.left = node;
        loop = false;
      } else {
        current = current.left;
      }
    } else if (node.value > current.value) {
      if (!current.right) {
        current.right = node;
        loop = false;
      } else {
        current = current.right;
      }
    } else {
      loop = false;
    }
  }
};

BinarySearchTree.prototype.contains = function contains(value) {
  // current is set to this
  // loop = true
  // while loop is true
    // if value !== current.value
      //if value > current.value && current.right !== null
        // current = current.right
      // else if value !== current.value && value < current.value && current.left !== null 
        // current = current.left
      // else 
        // return false 
    // else 
      // return true;

  var current = this;
  var loop = true;

  while (loop) {
    if (value !== current.value) {
      if (value > current.value && current.right) {
        current = current.right;
      } else if (value < current.value && current.left) {
        current = current.left;
      } else {
        return false;
      }
    } else {
      return true; 
    }
  }
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
