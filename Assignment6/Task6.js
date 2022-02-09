// Question 1.
// Write a function named addNumbers which takes two numbers as input and return their sum

 function sum(a, b){
     var sum = a + b;
    return sum
 }

 var answer = sum(12, 12)
 console.log(answer)

// Question 2.
// Write a function to find the absolute difference of two numbers
// Sample Input-1 12,4
// Sample Output-1 8
// Sample Input-2 4,18
// Sample Output-2 14

 function diff (a, b){
     var diff = a - b;
     if (b >= a){
         return -1 * diff
     }else {
         return diff
     }
    return diff
 }
 var answer = diff(24, 38)
 console.log(answer)

// Question 3.
// Write a function isOdd which returns a boolean value based the number is odd or not

function Odd(num) {
    if (num % 2 == 1) {
        return true
    } else {
        return false
    }
}

let answer = Odd(21)

console.log(answer);

// Question 4.
// Write a function function which prints the odd numbers from 0 to a given limit(included)

function printOdd(limit) {
    for (let i = 1; i <= limit; i += 2){
        console.log(i);
    }
}

printOdd(50)

// Question 5.
// Write a function to calculate the average of an array. If there are no items in the array it should return 0
// let marks = [45, 49, 33, 29, 47.5];
function avgArray (values){
    let total = 0;

for (let i = 0; i < values.length; i++) {
  total += values[i];
}
let avg = total / values.length;
if(values.length>0){
    return avg;
}else{
    return 0;
}

}
console.log(avgArray([45, 49, 33, 29, 47.5]));

//Question 6.
// Write a function to convert a character to lower case

function lower(string) {
    return string.toLowerCase()
}

let result = lower("EDSTEM TECHNOLOGIES")

console.log(result);