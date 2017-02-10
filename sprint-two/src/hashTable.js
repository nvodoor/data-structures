

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._length = 0;  
};

HashTable.prototype.insert = function(k, v) {
  var index = this.getIndexBelowMaxForKey(k, this._limit);
  this._length++;
  if (this._length >= (this._limit * .75)) {
    this._limit *= 2;
    console.log(this._limit);
  }
  this._storage.set(index, v);
};

HashTable.prototype.retrieve = function(k) {
  var index = this.getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(index);
};

HashTable.prototype.remove = function(k) {
  var index = this.getIndexBelowMaxForKey(k, this._limit);
  var self = this;
  self._storage.each(function(value, i, collection) {
    if (index === i) {
      delete collection[i];
      self._length--;
    }
  });
};

HashTable.prototype.getIndexBelowMaxForKey = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


