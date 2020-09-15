'use strict';

let Node = require('./stacks.js');

class Queue {
    constructor() {
       this.front = null;
       this.rear = null;
       this.size = 0;
    }

    enQueue(value) {
        let node = new Node(value)
        if(this.front == null) {
            this.front = node;
            this.rear = node; 
        } else {
            this.rear.next = node;
            this.rear = node; 
        }
        this.size++;
    }
    deQueue() {
        if(this.size <= 0) {
            return 'empty Queue';
        } else {
            let oldFront = this.front; 
            this.front = this.front.next;  
            this.size--;
            if(this.size <= 0) {
                this.rear = null; 
            }
            return oldFront;    
        }
    }
    peek() {
        if(this.front == null) {
            return 'empty Queue';
        }
        return this.front; 
    }

    isEmpty() {
        if(this.front == null) {
            return true;
        } else { 
            return false;
        }
    }
}

module.exports = Queue; 


