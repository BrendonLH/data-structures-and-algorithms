'use strict';

let arr = [2,4,6,8];
let num = 5;

let insertShiftArray = (arr, num) => {
  let midArr = Math.ceil((arr.length-1)/2);
  let newArr = [];
  let j = 0; 
  for(let i = 0; i <= arr.length; i++) { 
    if( i == midArr) {
      newArr[i] = num;
    }
    else {
      newArr[i] = arr[j];
      j++;
    }
    
    
  }
  return newArr;
}

console.log(insertShiftArray(arr, num));





