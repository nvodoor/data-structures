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
  var exists = false;

  var childSearch = function childSearch (child) {

    if (child.value === target) {
      return exists = true;
    } else if (child.children) {
      child.children.forEach(function(kid) {
        childSearch(kid);
      });
    }
  };
  childSearch(this);
  return exists;
};

treeMethods.removeParent = function removeParent() {
  // iterate over parents children
  var parent = this.parent;

  parent.children.reduce(function(acc, child, i) {
    if (child.value === this.value) {
      acc.splice(i, 1);
    }
    return acc;
  }, parent.children);
    // find node that called remove parent
      // remove node from child list

  // set current nodes parent to null
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
