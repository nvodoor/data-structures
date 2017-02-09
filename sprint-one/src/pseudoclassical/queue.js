var Queue = function() {
  this.length = 0;
};

Queue.prototype.enqueue = function(value) {
  this[this.length] = value;
  this.length++;
};

Queue.prototype.dequeue = function() {
  var popped = this[0];
  delete this[0];
  for (var key in this) {
    this[key - 1] = this[key];
  }
  this.length--;
  return popped;
};

Queue.prototype.size = function() {
  if (this.length < 0) {
    return 0;
  }
  return this.length;
};


