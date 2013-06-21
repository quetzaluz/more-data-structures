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

  it("should have a .addChild method that creates a new subtree with value", function() {
    expect(tree.children).toEqual([]);
    tree.addChild('subtree1');
    expect(tree.children[0].value).toEqual('subtree1');
    tree.addChild('subtree2');
    expect(tree.children[1].value).toEqual('subtree2');

  });

  // Add more tests here to test the functionality of tree.
});