'use strict';

const Stack = require('../stacks.js');


test('checks if tests are hooked up', () => {
    function add(a,b) {
        return a + b;
    }
    expect(add(1,1)).toBe(2);
    console.log('hooked up');
});

test('can succefully push onto a stack', () => {
    let stack = new Stack();
    stack.push(1);
    expect(stack.top.value).toBe(1);

});
test('can succefully pop from a stack', () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.pop();
    console.log(stack);
    expect(stack.top.value).toBe(2);

});
test('can succefully peek the next item from a stack', () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.peek();
    console.log(stack);
    expect(stack.top.value).toBe(2);
});
test('can succefully instantiate an empty stack', () => {
    let stack = new Stack();
    console.log(stack);
    expect(stack.top && stack.value).toBe(null && 0);
});
test('calling peek or pop on empty stack causes exception', () => {
    let stack = new Stack();
    console.log(stack);
    stack.peek();
    expect(stack.top).toBe(null);
});
