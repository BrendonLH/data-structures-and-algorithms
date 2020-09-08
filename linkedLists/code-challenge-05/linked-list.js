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
        if(this.head == null){
            return 'No Match';
        }
        let current = this.head;
        while(current != null) {
            if(current.value == value) {
                console.log(current.value);
                return; 
            }
            current = current.next;
        }
        return 'no match';
        
    }

    toString(value) {
        let newStr = '';
        let current = this.head;
        while(current != null) {
            newStr += `${current.value} => `; 

            current = current.next;
        }
        newStr += 'NULL';
        return newStr; 
    }
}

let list = new LinkedList();
list.add('1');
list.add('2');
list.add('3');

// console.log(list.includes('test3'));
console.log(list.toString(list));

module.exports = list;