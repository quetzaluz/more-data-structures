var makeTree = function(){
  var newTree = {};
  newTree.value = undefined;
  newTree.children = undefined;
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(){

};

treeMethods.contains = function(){
};

//Method below copied and modified from linkedList problem.
//Kept separate from makeTree because you want to only add to
//trees by using the tree.addChild method, which calls this.

var makeNode = function(value){
  var newNode = {};
  newNode.value = value;
  newNode.children = null;
  return newNode;
};
