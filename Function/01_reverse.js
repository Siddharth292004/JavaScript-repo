/**
Write a JavaScript function that reverses a number.
Sample Data and output:
Example x = 32243;
Expected Output: 34223
 */

function reverse_a_number(n){
    n = n + "";
    return n.split("").reverse().join("");
}


let num = 12345

console.log(Number(reverse_a_number(num)));