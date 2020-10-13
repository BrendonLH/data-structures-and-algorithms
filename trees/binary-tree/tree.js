'use strict';

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


class BinarySearchTree {
    constructor(value) {
        this.root = new Node(value);
        this.size = 1;
    }
    add(value) {
        let newNode = new Node(value);
        this.size++;

        const search = node => {
            if(value < node.value) {
                if(!node.left) {
                    node.left = newNode
                } else {
                   search(node.left); 
                }
            } 
            else if(value > node.value) {
                if(!node.right) {
                    node.right = newNode
                } else {
                    search(node.right);
                }
            }
        }
        search(this.root);
    }
    inOrder() {
        let result = [];
        const traverse = node => {
            if (node.left)traverse(node.left);
            result.push(node.value);
            if (node.right)traverse(node.right);
        }
        traverse(this.root);
        return result;
    }
    preOrder() {
        let result = [];
        const traverse = node => {
            result.push(node.value);
            if (node.left)traverse(node.left);
            if (node.right)traverse(node.right);
        }
        traverse(this.root);
        return result;
    }
    postOrder() {
        let result = [];
        const traverse = node => {
            if (node.left)traverse(node.left);
            if (node.right)traverse(node.right);
            result.push(node.value);
        }  
        traverse(this.root);
        return result;
    }
    contains(value) {
        let current = this.root;
        while(current) {
            if(value === current.value) {
                return true;
            }
            if (value < current.value) {
                current = current.left;
            }else {
                current = current.right;
            }
        } return false; 
    } 
    
}

let bts = new BinarySearchTree(15);

bts.add(5)
bts.add(10)
bts.add(30)
bts.add(40)
console.log('preorder',bts.preOrder());
