'use strict';

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
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
    pop() {
        if(this.size > 0) {
            this.size--;
            let top = this.top;
            this.top = this.top.next; 
            return top.Value; 
        } else {
            return 'Stack is Empty';
        }
    }
    peek() {
        if(this.size = 0){
            return 'Empty Stack'
        }else {
        return this.top;
        }
    }

    isEmpty() {
        if(this.size == null) {
            return `${false}: Nothing in stack`;
        } else { 
            return `${true}: Data Available`;
        }
    }
}

module.exports = Stack;
module.exports = Node; 