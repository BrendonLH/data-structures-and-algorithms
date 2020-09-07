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

    add(value) {
        let node = new Node(value);

        if(!this.head) {
            this.head = node;
        } else {
            let current = this.head; 
            while(current.next) {
                current = current.next;
            }
            current.next = node;
        }
        return this;
    }

    includes(value) {
        let current = this.head;
        while(current.next) {
            current = current.next;
        }
        if(current.value == value) {
            console.log(current.value);
        } else {
            return 'no match';
        }
        
    }

    toString(value) {

    }
}

let list = new LinkedList();
list.add('test1');
list.add('test2');
list.add('test3');

console.log(list.includes('test3'));
// console.log(list);

// console.log(list.add('test1'));
// console.log(list.head.value);

module.exports = list;