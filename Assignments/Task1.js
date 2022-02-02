//Assign 1:

//Print your name, age, Marital Status by storing them in different variables
var name = "vaishnav";
var age = 25;
var maritalStatus = "Single";

console.log(`Name: ${name}`);
console.log(`Age: ${age}`);
console.log(`Marital Status: ${maritalStatus}`);

//Assign 2:

//Define 3 variables to store your gender, height (in inches ), non-veg (food preference) Print all the three variable types (one per line in the given order)

let gender = "male";
let heightInInches = 71.2;
let foodPreference = "Non-Veg";

console.log(typeof gender);
console.log(typeof heightInInches);
console.log(typeof foodPreference);

//Assign 3:

//Given the year of birth of a person, calculate his/her age (You can store the current year in a variable)
var yearOfBirth = 1997;
var currentYear = 2022;
var ageOfThePerson = currentYear - yearOfBirth;
console.log(`Age: ${ageOfThePerson}`);

//Assign 4:

//Given the 3 subjects marks of a particular student calculate the total marks obtained

let subj1 = 39;
let subj2 = 40;
let subj3 = 31;
let total = subj1 + subj2 + subj3;

console.log(`Student scored ${total} marks in total`);


//Assign 5:

//Given the sides of a rectangle print the perimeter and area

let Length = 15;
let Breadth = 10;
let perimeter = 2 * (Length + Breadth);
let area = 15 * 10;

console.log(`Perimeter of Rectangle = ${perimeter}`);
console.log(`Area of Rectangle = ${area}`); 

//Assign 6:

//Given a number of total months find the number of months remaining after converting the total months to years
//Sample Total Months - 26 Remaining Months - 2

let totalMonths = 23;
let remainingMonths = 23 % 12;

console.log(`Remaining Months = ${remainingMonths}`);

//Assign 7:

//Given the Principal Amount, Interest Percentage and Time calculate the simple interest amount
var principalAmount = 22000;
var interestPercentage = 12;
var time = 5;
var interestAmount = (principalAmount * time * interestPercentage) / 100;

console.log(`interestAmount = ${interestAmount}`);

//Assign 8:

//Given the marks of 6 students in a class calculate their average marks
let markOfStudent1 = 37;
let markOfStudent2 = 40;
let markOfStudent3 = 40;
let markOfStudent4 = 45;
let markOfStudent5 = 30;
let markOfStudent6 = 42;
let average = (markOfStudent1 + markOfStudent2 + markOfStudent3 + markOfStudent4 + markOfStudent5 + markOfStudent6) / 6;

console.log(`Average Mark = ${average}`);

//Assign 9:

//Given 3 product prices and their quantity calculate the total amount of items in the cart

var Orange=80;
var quantityOfOrange=8;
var Apple=180;
var quantityOfApple=9;
var pineapple=100;
var quantityOfPineapple=10;

let totalPrice =
Orange * quantityOfOrange +
Apple * quantityOfApple +
pineapple * quantityOfPineapple;

console.log(`Total Price = ${totalPrice}`);

//Assign 10:

//Given the item prices and quantity along with tax, discount and tip calculator the total bill amount

var Orange=80;
var quantityOfOrange=8;
var Apple=180;
var quantityOfApple=9;
var pineapple=100;
var quantityOfPineapple=10;
var taxPercentage = 8;
var discountPercentage = 10;
var tipPercentage = 5;

var totalPrice =
Orange * quantityOfOrange +
Apple * quantityOfApple +
pineapple * quantityOfPineapple;

var finalAmount =
totalPrice *
  [(100 + taxPercentage) / 100] *
  [(100 - discountPercentage) / 100] *
  [(100 + tipPercentage) / 100];

console.log(`TotalPrice: ${totalPrice}`);
console.log(`FinalAmount : ${finalAmount}`);
