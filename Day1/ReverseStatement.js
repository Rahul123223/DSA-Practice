// You are given a strings.

// You need to write a program that reverses the order/sequence in which words are present in the sentence
// keeping the case of each character preserved (upper case character should remain upper and lower case
// character is lower case).

let str = "A Transformation in education";

let s = str.split(" ");
let reverse = "";

for (let i = s.length - 1; i >= 0; i--) {
  reverse += s[i] + " ";
}
console.log(reverse);
