describe("tree", function() {
  var tree;

  beforeEach(function() {
    tree = makeTree();
  });

  it("should have methods named 'addChild' and 'contains', and a property named 'value'", function() {
    expect(tree.addChild).toEqual(jasmine.any(Function));
    expect(tree.contains).toEqual(jasmine.any(Function));
    expect('value' in tree).toBe(true);
  });

  it("should have a .children property which is an array", function() {
    expect(Array.isArray(tree.children)).toEqual(true);
  });

  it("should have a .addChild method, takes any value, sets that as the target of a node, and adds that node as a child of the tree", function() {
    //
  });

  // Add more tests here to test the functionality of tree.
});