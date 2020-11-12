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
            node.next = this.head;
            this.head = node;
        }
     
    }
}

class HashMap {
    constructor(size) {
        this.size = size;
        this.buckets = new Array(size);
    }

    hash(key){
            return key.split('').reduce((accumulator, current, index) => {
                return accumulator + current.charCodeAt(0);
            }, 0) * 19 % this.size;
    }

    set(key, value) {
        let hash = this.hash(key);
        if(!this.buckets[hash]) {
            let linkedList = new LinkedList();
            linkedList.append([key,value]);
            this.buckets[hash] = linkedList;
        } 
        else {
            this.buckets[hash].append([key, value]);
        }
    }

    get(key) {
        for(let i = 0; i <= this.buckets.length; i++) {
            console.log(this.buckets[i]);
            }
            return this; 
        
    }

    contains(key) {

    }
}

const hashMap = new HashMap(5);
hashMap.set('apple', 2);
hashMap.get();


// console.log(hashMap.buckets);

