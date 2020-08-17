'use strict';

const binarySearch = require('../binary-search.js');

test('checks if console is logging binary search func', () => {
    
    expect(binarySearch([4,8,16,23,42], 5)).toBe(-1);
});