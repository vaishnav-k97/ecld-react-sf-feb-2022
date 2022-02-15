// Question 1
// Given an array of numbers print the square of those numbers
// Sample Input:  [2, 3, 5, 7, 9]
// Sample Output: 4 9 25 49 81
// Bonus: use square() function and forEach HOF

square([2,3,5,7,9,13]);
function square(array){
    array.forEach(function(num){
       console.log(num*num);
   })
}

// Question 2
// Given an array of numbers generate an array containing the double value of the numbers
// Sample Input [1, 2]
// Sample Output [2, 4]

numbers = [2, 4, 6, 8, 13];

let array = numbers.map(function (e) {
  return e * 2;
});
console.log(array);

// Question 3
// Given an array of numbers extract the numbers divisible by 3
// Sample Input - [1,2,3]
// Sample Output - [3]

numbers = [2, 4, 6, 8, 10, 15, 31, 60];
let array = numbers.filter(function (num) {
  return num % 3 === 0;
});
console.log(array);

// Question 4
// Given an array of numbers print the product of all numbers
// Sample Input - [2,3,4]
// Sample Output - 24

numbers = [2, 4, 6, 8, 13];

let product = numbers.reduce(function (prod, num) {
  return prod * num
});
console.log(product);

// Question 5
// Given an array of strings print the length of each string

var string = ['edstem', 'react','html','javascript','css'];
string.forEach(function(str){
      console.log(str.length);
  })

// Question 6
// Given an array of string generate an array with their first characters
// Sample Input - ["Edstem", "Tech"]
// Sample Output - ["E", "T"]

var string = ['Edstem', 'React','Html','Javascript','Css'];
var result = string.map(function(str){
    return str[0];
})
console.log(result);

// Questiuon 7
// Given an array of string generate an array whose first or last character is a
// Sample Input - ["assignment", "problem", "media", "upload"]
// Sample Output - ["assignment", "media"]

var input = ["assignment", "problem", "media", "upload"];
var result = input.filter(function(string){
               return string.startsWith("a") || string.endsWith("a");
      }) 
console.log(result);

// Question 8
// Given an array of strings print the snake case of the strings [Assume Small case strings]
// Sample Input - ["edstem", "tech"]
// Sample Output  edstem_tech

let string = ["edstem", "technologies"];
let result= string.reduce(function() { 
    return string.join("_"); 
})
console.log(result);

// Question 9
// Create a user object with name, age, gender, skills as properties and add the below methods to it
// i.addSkill method => user.addSkill(‘react’) => react should be added to user.skills property which is an array of strings
// ii. getSkills method => user.getSkills() => It should return all the skills of the user
//  Note: user this keyword

let user ={
    name: 'vaishnav',
    age: 25,
    gender: 'M',
    skills: ['javascript', 'html','css'], 
    addSkill: function (skill){
        return this.skills.push(skill);
    },
    getSkills: function () {
        return this.skills;
    }
}
user.addSkill('react');
console.log(user.getSkills());
 

