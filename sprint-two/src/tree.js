var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.parent = null;
  newTree.children = [];

  _.extend(newTree, treeMethods);
  
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = Tree(value);
  child.parent = this;
  this.children.push(child);
};

treeMethods.contains = function(target) {

  if (this.value === target) {
    return true;
  }

  return this.children.reduce(function(acc, child) {
    if (child.contains(target)) {
      acc = true;
    }
    return acc;
  }, false);
};  

treeMethods.removeParent = function removeParent() {
  var parent = this.parent;
  var node = this;

  parent.children.reduce(function(acc, child, i) {
    if (child.value === node.value) {
      acc.splice(i, 1);
    }
    return acc;
  }, parent.children);
};

treeMethods.traverse = function traverse(cb, node) {
  node = node || this;
  
  cb(node);
  node.children.forEach(function(child) {
    traverse(cb, child);
  });

  // cb(this);
  // this.children.reduce(function(acc, node) {
  //   node.traverse(cb);
  // }, cb);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
