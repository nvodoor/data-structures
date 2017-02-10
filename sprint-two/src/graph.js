

// Instantiate a new graph
var Graph = function() {
  this.value = 0;
  this.nodeList = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(value) {
  var node = new Graph.prototype.generateNode(value);
  this.nodeList.push(node);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(target) {

  return this.nodeList.reduce(function(acc, node) {
    if (node.value === target) {
      acc = true;
    }
    return acc;
  }, false);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(nodeValue) {

  return this.nodeList.reduce(function(acc, eachNode, index) {
    if (nodeValue === eachNode.value) {
      acc.splice(index, 1);
    }
    return acc;
  }, this.nodeList);
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

Graph.prototype.generateNode = function(value) {
  this.value = value;
  this.edgeList = [];
};
/*
 * Complexity: What is the time complexity of the above functions?
 */



  // var exists = false;
  // var nodeSearch = function nodeSearch (node) {

  //   if (node.value === target) {
  //     return exists = true;
  //   } else if (node.nodeList) {
  //     node.nodeList.forEach(function(miniNode) {
  //       nodeSearch(miniNode);
  //     });
  //   }
  // };
  // nodeSearch(this);
  // return exists;
