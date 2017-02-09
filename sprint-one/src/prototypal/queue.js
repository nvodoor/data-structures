var Queue = function() {
  // assign someInstance to Object.create(queueMethods)
  // someInstance.length = 0
  var someInstance = Object.create(queueMethods);

  someInstance.length = 0;

  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  // this referring to 'Queue' object.
  // use length as key, assign value to object. 
  // increment length
  this[this.length] = value;
  this.length++;
};

queueMethods.dequeue = function() {
  // save the variable we will remove, to return it later.
  // delete from object. 
  // decrement length by 1. 
  // iterate over object. Reassign keys to new indexes. 
  // Return saved variable. 
  var popped = this[0];
  delete this[0];
  this.length--;
  for (var key in this) {
    this[key - 1] = this[key];
  }
  return popped;
};

queueMethods.size = function() {
  // if size less than 0, return 0, otherwise return size.
  if (this.length < 0) {
    return 0;
  }
  return this.length;
};


