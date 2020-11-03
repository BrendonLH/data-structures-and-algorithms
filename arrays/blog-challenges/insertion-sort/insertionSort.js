'us strict';

let input = [8,4,23,42,16,15];

function insertSort(arr) {
        for(let i = 1; i < arr.length; i++) {
            let current = arr[i];
            let j = i-1;
            while((j > -1) && (current < arr[j])) {
                arr[j+1] = arr[j];
                j--;
            }
            arr[j+1] = current;
        }
        return arr;
}


insertSort(input);
console.log(input);