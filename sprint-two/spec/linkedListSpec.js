describe('linkedList', function() {
  var linkedList;

  beforeEach(function() {
    linkedList = LinkedList();
  });

  it('should have a head and tail', function() {
    expect(linkedList).to.have.property('head');
    expect(linkedList).to.have.property('tail');
  });

  it('should have methods named "addToTail", "removeHead", and "contains"', function() {
    expect(linkedList.addToTail).to.be.a('function');
    expect(linkedList.removeHead).to.be.a('function');
    expect(linkedList.contains).to.be.a('function');
  });

  it('should designate a new tail when new nodes are added', function() {
    linkedList.addToTail(4);
    expect(linkedList.tail.value).to.equal(4);
    linkedList.addToTail(5);
    expect(linkedList.tail.value).to.equal(5);
    linkedList.addToTail(6);
    expect(linkedList.tail.value).to.equal(6);
    linkedList.addToTail(7);
    expect(linkedList.tail.value).to.equal(7);
  });

  it('should remove the head from the list when removeHead is called', function() {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    expect(linkedList.head.value).to.equal(4);
    linkedList.removeHead();
    expect(linkedList.head.value).to.equal(5);
  });

  it('should return the value of the former head when removeHead is called', function() {
    linkedList.addToTail(4);
    expect(linkedList.removeHead()).to.equal(4);
  });

  it('should contain a value that was added', function() {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    linkedList.addToTail(10);
    linkedList.addToTail(7);
    linkedList.addToTail(8);
    expect(linkedList.contains(4)).to.equal(true);
    expect(linkedList.contains(8)).to.equal(true);
    expect(linkedList.contains(6)).to.equal(false);
  });

  it('should not contain a value that was removed', function() {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    linkedList.removeHead();
    expect(linkedList.contains(4)).to.equal(false);
  });

  it('Should link to next node starting at head', function() {
    linkedList.addToTail(1);
    linkedList.addToTail(2);
    linkedList.addToHead(20);
    linkedList.addToTail(3);
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    linkedList.addToTail(6);
    linkedList.addToTail(7);
    linkedList.addToTail(8);
    linkedList.addToTail(9);
    expect(linkedList.tail.next).to.equal(null);
    expect(linkedList.head.next.next.next.next.next.value).to.equal(5);
  });

  it('Should link to previous node starting at tail', function() {
    linkedList.addToTail(1);
    linkedList.addToTail(2);
    linkedList.addToTail(3);
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    linkedList.addToTail(6);
    linkedList.addToTail(7);
    linkedList.addToTail(8);
    linkedList.addToTail(9);
    expect(linkedList.tail.next).to.equal(null);
    expect(linkedList.tail.previous.value).to.equal(8);
    expect(linkedList.tail.previous.previous.value).to.equal(7);
  });

  it('Should traverse list executing callback on each node', function() {
    var array = [];
    linkedList.addToTail(1);
    linkedList.addToTail(2);
    linkedList.addToTail(3);
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    linkedList.addToTail(6);
    linkedList.addToTail(7);
    linkedList.addToTail(8);
    linkedList.addToTail(9);
    linkedList.traverse(function(node) {
      array.push(node.value);
    });
    expect(array).to.eql([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

});
