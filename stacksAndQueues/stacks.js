'use strict';

class Node {
    constructor() {
        this.head = head;
        this.next = null;
    }
}

class Stack {
    constructor(value) {
       this.top = null;
       this.size = 0; 
    }

    push(value) {
        let node = new Node(value);
        if(this.top == null) {
            this.top = node;
        } else {
            let oldTop = this.top; 
            node.next = oldTop;
            this.top = node;
        }
        this.size++;
    }
}


module.exports = Stack;