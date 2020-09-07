'use strict';

let list = require('../linked-list');

it('checks if head node value was what was added', () => {
    list.add('test1');
    console.log(list);
    expect(list.head.value).toEqual('test1');
});

it('checks if something was added to the list', () => {
    expect(list.head).toBeTruthy();
})