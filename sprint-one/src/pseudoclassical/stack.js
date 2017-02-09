var Stack = function() {

  this.length = 0; 
};

Stack.prototype.push = function (value) {
  this[this.length] = value;
  this.length++;
};

Stack.prototype.pop = function () {
  var length = this.length;
  var popped = this[length - 1];
  delete this[length - 1];
  this.length--;
  return popped;
};

Stack.prototype.size = function () {
  if (this.length < 0) {
    return 0;
  }
  return this.length;
};