//Question 1.
//Given an array of strings count all the vowel characters
// Sample Input - [‘edstem’, ‘react’, ‘javascript’, ‘html’, ‘css’ ]
// Sample Output - 7

var str = ["vaishnav", "react", "javascript", "python", "Edstem", "technolOgies"];

var value = 0;

for(var i=0; i<str.length; i++){
    for(var j=0; j<str[i].length; j++){
        if (str[i][j] === "a" ||str[i][j] === "e" ||str[i][j] === "i" ||str[i][j] === "o" ||str[i][j] === "u" ||str[i][j] === "A" ||str[i][j] === "E" ||str[i][j] === "I" ||str[i][j] === "O" ||str[i][j] === "U") {
            value++;
        }
    }
}
console.log(value);

//Question 2.
//Given a string print "YES" if it is a palindrome "NO" if it is not one
// A palindrome is a word which reads the same backward as forward, such as madam, bob
// Strings Problem

var str = "malayalam";
var value = []

for (var i = str.length - 1; i >= 0; i--) {
  value += str[i];
}

if (str === value) {
  console.log(`${str} is a palindrome`);
} else {
  console.log(`${str} is not a palindrome`);
}

//Question 3.
//Given an array of marks, find out the Average
// Sample Input: [95, 86, 66, 94, 58]
// Sample Output: 79.8
// Hint: use arr.length

let marks = [45, 49, 33, 29, 47.5];
let total = 0;

for (i = 0; i < marks.length; i++) {
  total += marks[i];
}
let avg = total / marks.length;
console.log(avg);

//Question 4.
//Given an array of strings, remove all the odd length strings from it
// Sample Input: [‘edstem’, ‘react’, ‘html’, ‘foodie’, ‘coder’’  ]
// Sample Output: [ ‘edstem’, ‘html’, ‘foodie’ ]

let array = ["vaishnav", "visruth", "anju", "kerala", "india"];
let savedArray = []

for (let i = 0; i < array.length; i=i+2) {
        savedArray.push(array[i])    
}

array = savedArray
console.log(array);

//Question 5.
//Given an array of numbers, change the multiples of 3 to ‘multiple’
// Sample Input: [5, 9, 8, 12, 22, 18]
// Sample Output: [5, ‘multiple’, 8, ‘multiple’, 22, ‘multiple’ ]

let arr = [30, 13, 9, 40, 18, 11];

for (i = 0; i < arr.length; i++) {
  if (arr[i] % 3 === 0) {
    arr[i] = "multiple";
  }
}

console.log(arr);

//Question 6.
//Given an empty array fill that array with first 10 natural numbers
// Sample Input: []
// Sample Output: [1,2,3,4,5,6,7,8,9,10]

var input = [];
for (i = 1; i <= 10; i++){
    input.push(i)

}
console.log(input)

// Question 7.
// Given a string split it into an array of words
// Sample Input - "Edstem Technologies located at kerala"
// Sample Output - ["Edstem", "Technologies", ‘located’, ‘at’, ‘kerala’]
// Note: Don’t use str.split(‘ ‘) method
// Hint: you can use for loop and push method

let sentance = "my name is vaishnav";
let word = [];
let arrayOfWords = [];

for (let i = 0; i < sentance.length; i++) {
  if (sentance[i] == " ") {
    arrayOfWords.push(word);
    word = [];
  } else {
    word += sentance[i];
  }
}
arrayOfWords.push(word);
console.log(arrayOfWords);

// Question 8.
// Given a string print all the Characters in the odd position (Start counting with 0)
// Sample Input - ‘Edstem’
// Sample Output: dtm

let array = "vaishnav";

for (let i = 1; i < array.length; i=i+2) {
    console.log(array[i]);  
}

//Question 9.
//Given a sentence print the count of words (Separated by a space character)
// Sample Input- "Coding is Easy"
// Sample Output:- 3

let sentance = "My name is vaishnav";
let word = [];
let arrayOfWords = [];

for (let i = 0; i < sentance.length; i++) {
  if (sentance[i] == " ") {
    arrayOfWords.push(word);
    word = [];
  } else {
    word += sentance[i];
  }
}
arrayOfWords.push(word);
console.log(arrayOfWords.length);

//Question 10.
// Given an Array of names find out if edstem is there or not, if the given string is there print true or else print false
// Sample Input:  arr = [‘react’, ‘html’, ‘edstm’], 
//              str = ‘edstem’
// Sample Output: false => edstm spelling mistake :) 

let array = ["vaishnav", "visruth", "anju", "kerala", "india"];
let word = "anju";
var count = 0;

for (let i = 0; i < array.length; i++) {
    if(array[i]==word){
        count =+ 1;
    }
    }
    if (count>0){
        console.log('True')
    }else{
        console.log('False')
    }