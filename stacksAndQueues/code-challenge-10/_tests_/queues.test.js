'use strict';

const Queue = require('../queues.js');
let queue = new Queue();

test('checks if tests are hooked up', () => {
    function add(a,b) {
        return a + b;
    }
    expect(add(1,1)).toBe(2);
});


test('Can successfully enqueue into a queue----1', () => {
    queue.enQueue(1);
    expect(queue.front.value).toBe(1);
});

test('Can successfully enqueue multiple values into a queue---2', () => {
    queue.enQueue(2);
    queue.enQueue(3);
    expect(queue.front.value && queue.rear.value).toBe(1 && 3);
});

test('Can successfully dequeue out of a queue the expected value---3', () => {
    queue.deQueue()
    expect(queue.front.value && queue.rear.value).toBe(2 && 3);
});

test('Can successfully peek into a queue, seeing the expected value---4', () => {
    expect(queue.peek()).toBe(queue.front);
});

test('Can successfully empty a queue after multiple dequeues---5', () => {
    queue.deQueue()
    queue.deQueue()
    console.log(queue);
    expect(queue.front).toBe(null);
    
});

test('Can successfully instantiate an empty queue---6', () => {
    expect(queue.isEmpty()).toBeTruthy();
});

test('Calling dequeue or peek on empty queue raises exception---6', () => {
    console.log(queue.peek());
    expect(queue.peek() && queue.deQueue()).toBe('empty Queue');
});

