// Given an array,arrwhich hasNintegers.

// You need to print the smallest and largest element present in the array each on new lines.

let n = 4;
let arr = [-2, 0, 8, 4];
let small = arr[0]

for(let i = 0; i<n; i++){
    if(arr[i] < small){
        small = arr[i]
    }
}console.log(small)

let large = arr[0]

for(let i = 0; i<n; i++){
    if(arr[i] > large){
        large = arr[i]
    }
}console.log(large)