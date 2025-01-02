function Palindrome(str) {
    let j = str.length - 1
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] != str[j]) {
            return false;
        }
        j--;
    }
    return true;
}

let str1 = "tabat";
let str2 = "rever";
let str3 = "reza";

console.log(Palindrome(str1));
console.log(Palindrome(str2));
console.log(Palindrome(str3));