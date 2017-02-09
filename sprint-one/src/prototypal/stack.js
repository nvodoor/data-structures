var Stack = function() {

  var someInstance = Object.create(stackMethods);
  someInstance.length = 0;

  return someInstance;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this[this.length] = value;
  this.length++;
};

stackMethods.pop = function() {
  var length = this.length;
  var popped = this[length - 1];

  delete this[length - 1];
  this.length--;
  return popped;
};

stackMethods.size = function() {
  if (this.length < 0) {
    return 0;
  }
  return this.length;

};


