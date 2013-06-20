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
    linkedList.addToTail('b');
    expect(linkedList.tail.value).toEqual('b');
  });

  it('should have a .head property that stores a node object type', function () {
    linkedList.addToTail('a');
    expect(linkedList.head.value).toEqual('a');
  });


  // add more tests here to test the functionality of linkedList
});