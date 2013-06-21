// Note: don't use an array to do this.
var makeLinkedList = function(){
  var newLinkedList = {};
  newLinkedList.head = null;
  newLinkedList.tail = null;

  newLinkedList.addToTail = function(value){
    if (newLinkedList.head === null && newLinkedList.tail === null) {
      newLinkedList.head = makeNode(value);
      //do not need to set tail property; it will be null as head.next is null
    } else if (newLinkedList.tail === null) {
      var current = newLinkedList.head; //defined current for traversing list
      while(current.next) {
        current = current.next; //there is a next entry, move to next item
      } //If there is an undefined next property, loop ends, reached end of list.
      current.next = makeNode(value);
      newLinkedList.tail = current.next;
    } else {
      newLinkedList.tail.next = makeNode(value);
      newLinkedList.tail = newLinkedList.tail.next;
    }
  };

  newLinkedList.removeHead = function(){
    //No delete calls necessary--with reassignment old head is garbage collected
    oldHeadValue = newLinkedList.head.value;
    newLinkedList.head = newLinkedList.head.next;
    return oldHeadValue;
  };

  newLinkedList.contains = function(value){
    var current = newLinkedList.head;
    while(current.next) {
      if (current.value === value) {
        return true;
      }
      current = current.next;
    }
    if (current.value === value) {return true;}
    return false;
  };

  return newLinkedList;
};

var makeNode = function(value){
  var newNode = {};
  newNode.value = value;
  newNode.next = null;

  newNode.removeNextNode = function(){
  };

  return newNode;
};
