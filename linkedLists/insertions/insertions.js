'use strict';

class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor(head = null) {
      console.log(length);
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
  
    insertBefore(value) {
      let node = new Node(value);
      node.next = this.head;
      this.head = node;
      return this;
    }
  
    insertAfter(value) {
      let node = new Node(value);
      let current = this.head;
      node.next = current.next
      return this;
      
    }
  
  
  }
  
  
  
  // let node1 = new Node(2);
  // let node2 = new Node(3);
  // node1.next = node2;
  
  
  // let node1 = new Node(1);
  // let node2 = new Node(2);
  // node1.next = node2; 
  
  
  const list = new LinkedList();
  // list.append('first');
  // list.append('second node');
  // list.append('third node');
  
  
  // list.insertBefore('test');
  // list.insertBefore('test2');
  // list.insertBefore('test3');
  
  // list.insertBefore('test');
  // list.insertBefore('test2');
  // list.insertBefore('test3');
  
  
  list.insertAfter('test');
  // list.insertAfter('test2');
  // list.insertAfter('test3');
  // list.insertAfter('test4');
  
  console.log(list);