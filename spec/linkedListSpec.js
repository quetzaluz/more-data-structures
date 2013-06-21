describe("linkedList", function() {
  var linkedList;

  beforeEach(function() {
    linkedList = makeLinkedList();
  });

  it("should have a head and tail", function() {
    expect(Object.keys(linkedList)).toContain("head");
    expect(Object.keys(linkedList)).toContain("tail");
  });

  it("should have methods named 'addToTail', 'removeHead', and 'contains'", function() {
    expect(linkedList.addToTail).toEqual(jasmine.any(Function));
    expect(linkedList.removeHead).toEqual(jasmine.any(Function));
    expect(linkedList.contains).toEqual(jasmine.any(Function));
  });

  it('should have a .addToTail method that adds node to tail of list', function() {
    linkedList.addToTail('a');
    expect(linkedList.tail).toEqual(null);
    linkedList.addToTail('b');
    expect(linkedList.tail.value).toEqual('b');
    linkedList.addToTail('c');
    expect(linkedList.tail.value).toEqual('c');

  });

  it('should have a .head property that stores a node object type', function () {
    linkedList.addToTail('a');
    //Can also have a non value specific solution, see below:
    //expect(linkedList.head.hasOwnProperty('value')).toEqual(true);
    expect(linkedList.head.hasOwnProperty('value')).toEqual(true);
    linkedList.addToTail('b');
    expect(linkedList.head.value).toEqual('a');

  });

  it('should have a .removeHead method that removes first node and returns value', function(){
    linkedList.addToTail('a');
    linkedList.addToTail('b');
    expect(linkedList.removeHead()).toEqual('a');
    expect(linkedList.head.value).toEqual('b');
  });

  it('should have a .contains method that returns true value is present, else false', function () {
    linkedList.addToTail('a');
    linkedList.addToTail('b');
    expect(linkedList.contains('a')).toEqual(true);
    expect(linkedList.contains('b')).toEqual(true);
    expect(linkedList.contains('c')).toEqual(false);
  });
  // add more tests here to test the functionality of linkedList
});