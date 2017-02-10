var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  set.length = 0;
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (!this[item]) {
    this.length++;
  }
  this[item] = item;
};

setPrototype.contains = function(item) {
  if (this[item]) {
    return true;
  } else {
    return false;
  }
};

setPrototype.remove = function(item) {
  this.length--;
  delete this[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 0 (1)
 */
