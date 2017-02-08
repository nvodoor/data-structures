var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var n = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    if (size > 0) {
      n++;
    }
    someInstance[size] = value;
    size++;
  };

  someInstance.dequeue = function() {
    var popped = someInstance[0];
    delete someInstance[0];
    size--;
    for (var key in someInstance) {
      someInstance[key - 1] = someInstance[key];
    }
    return popped;
  };

  someInstance.size = function() {
    if (size < 0) {
      return 0;
    }
    return size;
  };

  return someInstance;
};
