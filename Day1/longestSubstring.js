let n = 12;
let arr = [1, 2, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1];

let max = 1;
let len = 1;

for (let i = 0; i < n; i++) {
  if (arr[i] > arr[i - 1]) len++;
  else {
    if (max < len) {
      max = len;
    }
    len = 1;
  }
}
if (max < len) {
  max = len;
}
console.log(max);
