'use strict';

class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor(head = null) {
      // console.log(length);
      this.head = head;
    }
    
    append(value) {
      // first to add new node, "create the new node" with value
      let node = new Node(value);
      
  
      if(!this.head) {
        this.head = node;
      } 
      else {
        let current = this.head;
        while(current.next) {
          current = current.next;
        }
        current.next = node;
      }
      return this;
    }
   kthFromEnd(list, k){
     var node = list.head,
         i = 0,
         kth;
  
      while(node){
        if(i == k) kth = list.head;
        else if(i-k>0){
         kth = kth.next;
        }
        i++;
  
        node = node.next;
      }
     return kth;
  }
  
  }
  
  let list = new LinkedList();
  
  list.append(1);
  list.append(2);
  list.append(3);
  
  // console.log(list.kthFromEnd(list,0));

  module.exports = Node;
  module.exports = LinkedList;