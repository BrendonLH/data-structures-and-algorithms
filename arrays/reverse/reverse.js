'use strict';


// arr
let arr = [1,2,3,4,5]


// function
let reverseArr = (arr) => {
    for(let i = 0; i < arr.length / 2; i++){
       //switch the corresponding numbers
       [arr[i], arr[arr.length - i - 1]] = [arr[arr.length - i - 1], arr[i]];
    }
  
  return arr;
}

console.log(reverseArr(arr));