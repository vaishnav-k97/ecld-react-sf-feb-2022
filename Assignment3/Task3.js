//Question 1.
//Define a variable count Print your name using while loop the no of times the value assigned to the variable count

var i = 1;
while(i<=5){
    console.log('Vaishnav')
    i = i + 1;
}

//Question 2.
//Define a variable limit Print your name using for loop the no of times the value assigned to the variable limit

for (var i = 1; i <= 5; i++){
    console.log('Vaishnav')
}

//Question 3.
//Using a while loop print the numbers in descending order from the given starting to ending limit. Start - 20 End - 25

var i = 25;
while(i>=20){
    console.log(i)
    i = i - 1;
}

//Question 4.
//Given a starting number and a decrement value, print all numbers from the starting number till zero deducting the decrement value each time. Starting - 13, Decrement - 4
// Output : 
// 13
// 9
// 5
// 1

var i = 13;
while(i>=1){
    console.log(i)
    i = i - 4;
}

//Question 5.
//Print the average of all the numbers from 1 to given limit
// Sample Limit - 5, 
// Output - 3 (1+2+3+4+5 = 15/5 = 3)

var sum = 0;
for (var i = 1; i<=5; i++){
    sum = sum + i
    avg = sum/5
}
console.log(` average = ${avg}`)


//Question 6.
// Find out the average of the first 100 n natural numbers using for loop.

var sum = 0;
for (var i = 1; i<=100; i++){
    sum = sum + i
    avg = sum/100
}
console.log(` average of first n number is = ${avg}`)

//Question 7.
//Print all the multiples of 3 till 100 using for loop

for(var i=1; i<100; i++){
    if(i % 3 == 0){
        console.log(i)    
    }
}

//Question 8.
//Given a string print all the consonants which are not a,e,i,o,u using for loop.
//Hint: use && operator and !== ‘a’ like this inside a conditional statement.

var str ='vaishnav';
for(var i=0;i<str.length;i++) {
    if(str[i]!='a' && str[i]!='e'&& str[i]!='i'&& str[i]!='o'&& str[i]!='u'){
         console.log(str[i]);
    }
}

//Question 9.
//Given a string find out the length of that string

var str = 'vaishnav'
console.log(str.length)

//Question 10.
//Given a string, print the first character and last character of that string.

var str='javascript';
console.log(`first character = ${str[0]}  `);
console.log(`last character = ${str[str.length-1]}  `);

// Question 11.
// Given a string print the odd indexes of that string using for loop
// Example: ‘edstem’ => print d, t, m

let string ='edstem';
   for(let i=0;i<string.length;i++) {
      if(i%2!=0){
           console.log(string[i]);
      }
  }

// Question 12.
// Find out the sum of the first 10 natural numbers using for loop

let sum = 0;  
  for(var i=1; i<=10;i++){
      sum= sum+i;
  }
  console.log(`sum of the first 10 natural numbers : ${sum}`);

