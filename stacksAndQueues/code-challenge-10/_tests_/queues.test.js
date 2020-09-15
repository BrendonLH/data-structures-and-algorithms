'use strict';

const queues = require('../stacks.js');


test('checks if tests are hooked up', () => {
    function add(a,b) {
        return a + b;
    }
    expect(add(1,1)).toBe(2);
    console.log('hooked up');
})