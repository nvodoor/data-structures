var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    someInstance[size] = value;
    size++;
  };

  someInstance.pop = function() {
    var popped = someInstance[size - 1];
    delete someInstance[size - 1];
    size--;
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
