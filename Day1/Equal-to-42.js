// You are given an array of N integers. You need to printYesif 42 is present in array, else printNo.

let n = 5;
let arr = [3, 7, 0, 9, 8];

for (let i = 0; i < n; i++) {
  if (arr[i] == 42) {
    console.log("Yes");
    break;
  } else {
    console.log("No");
    break;
  }
}
