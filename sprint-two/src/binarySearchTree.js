var BinarySearchTree = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

BinarySearchTree.prototype.insert = function insert(nodeValue) {
  var node = new Node(nodeValue);

  var current = this;

  while (current) {
    if (node.value < current.value) {
      if (!current.left) {
        current.left = node;
        return;
      } else {
        current = current.left;
      }
    } else if (node.value > current.value) {
      if (!current.right) {
        current.right = node;
        return;
      } else {
        current = current.right;
      }
    } else {
      return undefined;
    }
  }
};

BinarySearchTree.prototype.contains = function contains(value) {
  var current = this;

  while (current) {
    if (value === current.value) { 
      return true;
    } else {
      if (value > current.value && current.right) {
        current = current.right;
      } else if (value < current.value && current.left) {
        current = current.left;
      } else {
        return false;
      }
    }
  }
};

BinarySearchTree.prototype.depthFirstLog = function depthFirstLog(cb, node) {
  node = node || this;
  cb(node);
  if (node.left) {
    depthFirstLog(cb, node.left);
  }
  if (node.right) {
    depthFirstLog(cb, node.right);
  }
};

BinarySearchTree.prototype.Node = function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
};


/*
 * Complexity: What is the time complexity of the above functions?
 insert - log(n)
 contains - log(n)
 depthFirstLog - o(n)
 */
