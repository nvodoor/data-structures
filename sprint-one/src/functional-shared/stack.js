var Stack = function() {
  var someInstance = {};

  someInstance.length = 0;

  extend(someInstance, stackMethods);

  return someInstance;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var stackMethods = {};

stackMethods.push = function(value) {
  console.log(this);
  this.length += 1;
};

stackMethods.pop = function() {
  this.length -= 1;
};

stackMethods.size = function() {
  return this.length;
};




// stackMethods._count = function(bool) {
//   if (bool) {
//     this.length++;
//   } else {
//     this.length--;
//   }
// };

