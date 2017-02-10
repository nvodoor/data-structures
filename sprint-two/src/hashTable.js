

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._length = 0;  
};

HashTable.prototype.insert = function(k, v) {
  if (this._length >= 6) {
    this._limit = 16;
  }

  var index = getIndexBelowMaxForKey(k, this._limit);
  this._length++;
  this._storage.set(index, k, v, this._limit);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(index, k);
};

HashTable.prototype.remove = function(k) {
  if (this._length < 6) {
    this._limit = 8;
  }
  
  var index = getIndexBelowMaxForKey(k, this._limit);
  var self = this;
  self._storage.each(function(value, i, collection) {
    if (index === i) {
      delete collection[i];
      self._length--;
    }
  });
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


