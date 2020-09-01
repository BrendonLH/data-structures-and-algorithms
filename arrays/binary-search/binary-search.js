'use strict';
let array = [4,8,16,23,42];
let value = 5;
function binarySearch(arr, val) {
    let first = 0;
    let last = arr.length -1;
    let found = false;
    let position = -1;
    let mid;
    while( found === false && first <= last) {
        mid = Math.floor((first+last)/2);
        if(arr[mid] == val) {
            found = true;
            position = mid;
        }
        else if(arr[mid] > val) {
            last = mid -1;
        }
        else {
            first = mid +1;
        }
    }
    return position;

}

console.log(binarySearch(array, value));



module.exports = binarySearch;