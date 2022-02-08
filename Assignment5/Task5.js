// Question 1
// Given an array of string join them with a comma ,
// Sample Input - ["HTML", "CSS", "JAVA", "JS"]
// Sample Output - HTML,CSS,JAVA,JS

let array = ["vaishnav", "visruth", "anju", "kerala", "india"];
let string = " ";

for(let i = 0; i < array.length-1; i++){
   string += array[i] + ',' ;
 }
string += array[4] ;
console.log(string);

// Question 2
// Given an array or string print the total no of characters
// Sample Input - ["HTML", "CSS", "JAVA", "JS", "ANDROID"]
// Sample Output - 20

let string = ["vaishnav", "visruth", "anju", "kerala", "india"];
let value = 0;

for (let i = 0; i < string.length; i++) {
  for (let j = 0; j < string[i].length; j++) {
    value++;
  }
}
console.log(value);

// Question 3
// Given an array of game, scores print the highest and lowest score
// Sample Input - [100, 20, 31, 150, 39, 72]
// Sample Output - 150 
// 		              20

let score = [100, 20, 31, 150, 39, 72]
let high = score[0];
let low = score[0];

for (let i = 1; i < score.length; i++) {
  if (score[i] > high) {
    high = score[i];
  } else if (score[i] < low) {
    low = score[i];
  }
}
console.log(`${high} is the highest score`);
console.log(`${low} is the lowest score`);

// Question 4.
// Given a matrix, print the rows and columns
// Sample Input: [[1, 2, 3], [4, 5. 6], [7, 8, 9]]
// Sample Output: 3, 3

let matrix = [
  [1,2,3],
  [4, 5, 6],
  [7, 8, 9]];

let rows = matrix.length;
let coloumn = matrix[0].length;
console.log("Rows = ",rows);
console.log("Cols = ",coloumn);
console.log(`matrix = ${rows} * ${coloumn}`);

// Question 5.
// Given a matrix print the first diagonal
// Sample Input:  [[1, 2, 3], [4, 5. 6], [7, 8, 9]]
// Sample Output: 1, 5, 9

array = [
  [1,2,3],
  [4, 5, 6],
  [7, 8, 9]];

for (let i = 0; i < array.length; i++){
    for (let j = 0; j < array.length; j++){
        if (i == j) {
            console.log(array[i][j]);
        }
    }
}

//Question 6.
//Given an array of string generate an array whose first or last character is a
// Sample Input - ["assignment", "problem", "media", "upload"]
// Sample Output - ["assignment", "media"]

var array = ["assignment", "problem", "media", "upload"];

 for(let i=0; i<array.length; i++){
          if(array[i][0] === 'a' || array[i][array[i].length - 1] === 'a' ){
            console.log(array[i]); 
    }
 } 

// Question 7.
// Given an array of strings print the snake case of the strings [Assume Small case strings]
// Sample Input - ["edstem", "tech"]
// Sample Output - edstem_tech

var array = ["edstem","tech"];
var string = '';

for(var i = 0; i < array.length-1; i++){
        string += array[i] + '_';
} 
string += array[1];
console.log(string);

// Question 8.
// Given an 2d Array print the difference of first and second diagonals sum 
// Sample Input - [
// 		[1, 2, 3],
// 		[4, 5, 6],
// 		[7,  8, 9]
// ]
// 	Sample Output - First Diagonal -> 1+5+9 ->  15
// 			Second Diagonal -> 3+5+7 -> 15
// 			Difference => 15-15 -> 0

let array = [
  [1,2,3],
  [4, 5, 6],
  [7, 8, 9]];

let diag1 = 0;
let diag2 = 0;

for (let i = 0; i < array.length; i++){
    for (let j = 0; j < array[i].length; j++){
        if (i==j) {
            diag1 += array[i][j];
        }
        if (i + j === array.length - 1) {
          diag2 += array[i][j];
        }
    }
}

console.log(` Difference of Diagonal is = ${diag1 - diag2}`);

// Question 9.
// Given an array of numbers print the product of all numbers
// Sample Input - [2,3,4]
// Sample Output - 24

var array = [2, 3, 4];
var product = 1;

for (var i = 0; i < array.length; i++) {
  product *= array[i];
}

console.log(product);

// Question 10.
// Given an 2d array print the mid column
// Sample Input - [
// 		[1, 2, 3],
// 		[4, 5, 6],
// 		[7,  8, 9]
// ]
// 	Sample Output - 2, 5, 8

let array = [
  		[1, 2, 3],
  		[4, 5, 6],
  		[7,  8, 9]
  ];

for(let i = 0; i < array.length; i++){
  for(let j = 1; j < array[i].length - 1; j++){
          console.log(array[i][j]);
  }
}
