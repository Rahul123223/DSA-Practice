//You are given an array of N integers.

// Find the total count of negative integers present in the array.

let n = 5;
let arr = [-3, 0, -5, 9, 8];

let count = 0

for(let i = 0; i<n; i++){
    if(arr[i] < 0){
        count++
    }
}console.log(count)
