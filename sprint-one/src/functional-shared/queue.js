var Queue = function() {
  var someInstance = {};

  _.extend(someInstance, queueMethods);

  someInstance.length = 0;

  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this[this.length] = value;
  this.length++;
};

queueMethods.dequeue = function() {
  
  var popped = this[0];
  delete this[0];
  this.length--;
  for (var key in this) {
    this[key - 1] = this[key];
  }
  return popped;
};

queueMethods.size = function () {
  if (this.length < 0) {
    return 0;
  }
  return this.length;
};