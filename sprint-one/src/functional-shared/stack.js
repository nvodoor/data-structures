var Stack = function() {
  var someInstance = {};

  someInstance.length = 0;

  _.extend(someInstance, stackMethods);

  return someInstance;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this[this.length] = value;
  this.length++;
};

stackMethods.pop = function() {
  var popped = this[this.length - 1];
  delete this[this.length - 1];
  this.length--;
  return popped;
};

stackMethods.size = function() {
  if (this.length < 0) {
    return 0;
  }
  return this.length;
};

