var makeTree = function(){
  var newTree = {};
  newTree.value = undefined;
  newTree.children = [];
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(){
//.addChild() method, takes any value, sets that as the
//target of a node, and adds that node as a child of the tree

};

treeMethods.contains = function(){
};

//Removed node code before--realized that nodes are subtrees
