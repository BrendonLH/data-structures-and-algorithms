'use strict';

class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor(head = null) {
      this.head = head;
    }
  
    append(value) {
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
  }
  
//   Create Linked lists
  let list = new LinkedList();
  let list2 = new LinkedList();

//   append Linked lists
  
  list.append('1');
  list.append('2');
  list.append('3');
  
  
  list2.append('4');
  list2.append('5');
  list2.append('6');
  
  
  function mergeTwoLists (l1, l2) {
  
      let mergedListHead = { val : -1, next : null };
      let runner = mergedListHead;
  
      while(list && list2) {
          if(list.val > list2.val) {
              runner.next = list2;
              list = list2.next;
          } else {
              runner.next = list;
              list = list.next;
          }
          runner = runner.next;
      }
  
      runner.next = list || list2;
  
      return mergedListHead.next;
  }
  
  console.log(mergeTwoLists(list,list2));