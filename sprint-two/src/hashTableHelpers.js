/*
 ********** NOTE: **********
 * Do not edit this code unless you see a bug!

 Edited .get and .set to reflect bugs when returning colliding values
 Edited .set to reflect that limits were not getting properly changed.
 */


// This class represents an array with limited functionality and a maximum size.
// It will ensure that you don't accidentally try to use up too much space.
//
// Usage:
//   limitedArray.set(3, 'hi');
//   limitedArray.get(3); // returns 'hi'

var LimitedArray = function(limit) {
  var storage = [];

  var limitedArray = {};
  limitedArray.get = function(index, key) {
    checkLimit(index);

    if (!storage[index]) {
      return;
    }
    return storage[index].reduce(function(acc, keyValue) {
      if (key === keyValue[0]) {
        acc = keyValue[1];
      }
      return acc;
    }, '');
  };
  limitedArray.set = function(index, key, value, limit) {
    checkLimit(index, limit);

    if (!storage[index]) {
      storage[index] = [];
      storage[index].push([key, value]);
    } else {
      storage[index].push([key, value]);
    }

  };
  limitedArray.each = function(callback) {
    for (var i = 0; i < storage.length; i++) {
      callback(storage[i], i, storage);
    }
  };

  var checkLimit = function(index, limit) {
    if (typeof index !== 'number') {
      throw new Error('setter requires a numeric index for its first argument');
    }
    if (limit <= index) {
      throw new Error('Error trying to access an over-the-limit index');
    }
  };

  return limitedArray;
};

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between the
// numbers 0 and `max`
var getIndexBelowMaxForKey = function(str, max) {
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
