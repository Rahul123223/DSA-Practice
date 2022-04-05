// You are given an integern. Your task is to find if the string420is present in it or not.

// If 420 is present in it PrintCaughtor PrintEscaped.

let str = "97420";

let k = "420";
let count = 0;

for (let i = 0; i < str.length; i++) {
  if (str[0] == str[i]) {
    if (str[0] == str[i] && str[1] == str[i + 1] && str[2] == str[i + 2]) {
      console.log("Caught");
      count++;
      break;
    }
  }
}
if (count == 0) {
  console.log("Escaped");
}
