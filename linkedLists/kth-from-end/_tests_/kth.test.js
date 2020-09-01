'use strict';

const LinkedList = require('../kth.js');

let list = new LinkedList();



// console.log(list.kthFromEnd(list,0));
// console.log(list);

it('checks if k is greater than linked list', () => {
    expect(list.kthFromEnd(list,4).toBeGreaterThan(list));
});


it('checks if k equals length of list', () => {
    expect(list.kthFromEnd(list,1).toEqual(list[3]));
});

it('checks if k is not a positive integer', () => {
    expect(k).toBeLessThan(1);
})