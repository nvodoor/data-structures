describe('set', function() {
  var set;

  beforeEach(function() {
    set = Set();
  });

  it('should have methods named "add", "contains", and "remove"', function() {
    expect(set.add).to.be.a('function');
    expect(set.contains).to.be.a('function');
    expect(set.remove).to.be.a('function');
  });

  it('should add values to a set', function() {
    set.add('Susan Sarandon');
    set.add('Danny Glover');
    expect(set.contains('Danny Glover')).to.equal(true);
    expect(set.contains('Susan Sarandon')).to.equal(true);
  });

  it('should remove values from a set', function() {
    set.add('Mel Gibson');
    set.remove('Mel Gibson');
    expect(set.contains('Mel Gibson')).to.equal(false);
  });

  it('adding same value twice should not increase size', function() {
    set.add('Mel Gibson');
    set.add('Mel Gibson');
    expect(set.length).to.equal(1);
  });

  it('should not have duplicate values', function() {
    set.add('Mel Gibson');
    set.add('Mel Gibson');
    expect(set.length).to.equal(1);
  });

  it('should be capable of adding different types of values to the set', function () {
    set.add('Mel Gibson');
    set.add(1);
    set.add(true);
    set.add(({Eugene: 'Jon Stewart'}));
    expect(set.contains(1)).to.equal(true);
    expect(set.contains(true)).to.equal(true);
  });

  it('should be capable of removing different types of values from set', function () {
    set.add('Mel Gibson');
    set.add(1);
    set.add(true);
    set.add(({Eugene: 'Jon Stewart'}));
    set.remove('Mel Gibson');
    set.remove(true);
    set.remove(({Eugene: 'Jon Stewart'}));
    expect(set.contains(1)).to.equal(true);
    expect(set.contains(true)).to.equal(false);
    expect(set.contains({Eugene: 'Jon Stewart'})).to.equal(false);
  });

  it('should differentiate data types', function () {
    set.add('1');console.log(set);
    expect(set.contains(1)).to.equal(false);
  });

});
