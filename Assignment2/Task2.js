//Question 1.
//If the given year is a leap year print "LEAP YEAR" and if it's not a leap year print "NOT LEAP YEAR"

let year = 2024;

if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
    console.log(year + ' is a leap year');
} else {
    console.log(year + ' is not a leap year');
}

//Question 2.
// In India, a person can vote if he crosses 18years of age. Give a person year of birth print "YES" if he can vote otherwise print "NO"

  var age = 21;

  if (age >= 18) {
      console.log('you can vote')
  } else {
      console.log('you cannot vote (under aged category)')
  }

//Question 3.
//Give a single character (small or upper case) if it is a Vowel print "V" in the case of consonant print "C"

let ch = 'e';

if(ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u' || ch == 'A' || ch == 'E' || ch == 'I' || ch == 'O' || ch == 'U') {
    console.log('V')
} else {
    console.log('C')
}

//Question 4.
//Give a string of PIN Code (with all digits) print "VALID" or "INVALID" (a PIN code is only valid if it has 6 digits)

let p = '673010';

if(p.length >= 6) {
    console.log('VALID')
} else {
    console.log('INVALID')
}

//Question 5.
//Based on the state print the region it belongs to "EAST", "WEST", "NORTH", "SOUTH"

let East = 'Meghalaya';
let West = 'Gujarat';
let North = 'Delhi';
let South = 'Kerala';

var place = 'Kerala';

if(place == 'Meghalaya') {
    console.log(`${East} is located in East`)
} else if(place == 'Gujarat'){
    console.log(`${West} is located in West`)
} else if(place == 'Delhi'){
    console.log(`${North} is located in North`)
} else if(place == 'Kerala'){
    console.log(`${South} is located in South`)
}

//Question 6.
//Given a number print if it is either "EVEN" or "ODD" (Use ternary Operators)

let num = 5;
let Ans = num % 2 == 0 ? "Even":"Odd"
console.log(Ans)

//Question 7.
//Given two numbers a, b Print the below statements based on the condition
// "A > B"
// "A < B"
// "A = B" Note: Use Ternary Operators

var a = 30;
var b = 20;

var result = a > b ? "A > B" : a < b ? "A < B" : "A = B";
console.log(result)


//Question 8.
//Given the shirt size code "S", "M", "L", "XL" print the corresponding names "Small", "Medium", "Large", "Extra Large", "None" (For not a valid code)

let S = 'Small';
let M = 'Medium';
let L = 'Large';
let XL = 'Extra Large';

let size = "Double";
let result = size == S ? "Small" : size == M ? "Medium" : size == L ? "Large" : size == XL ? "Extra Large" : "Not a valid code";
console.log(result)
