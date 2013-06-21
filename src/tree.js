var makeTree = function(){
  var newTree = {};
  newTree.value = undefined;
  newTree.children = [];
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
//.addChild() method, takes any value, sets that as the
//target of a node, and adds that node as a child of the tree
  newSubtree = makeTree();
  newSubtree.value = value;
  this.children.push(newSubtree);
  return newSubtree;
};

treeMethods.contains = function(value){
  for (var i = 0; i < this.children.length; i++){
  	if (this.children[i].value === value) {
  	  return true;
  	};
  	if (this.children[i].children.length !== 0){
  	  return this.children[i].contains(value);
  	};
  };
  return false;
};

//Removed node code before--realized that nodes are subtrees
