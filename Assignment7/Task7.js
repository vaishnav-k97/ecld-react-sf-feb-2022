// Question 1.
// Given an array with name, age and gender convert it to object and print keys and values by looping over it using for in loop
// Sample Input: [‘radhe’, 22, ‘M’]
// Sample Output: name - radhe
// 		  age - 22
// 		  gender - M

var key = ["name", "age", "gender"]
var value = ["vaishnav", 25, "M"];
var result = []

for (let i = 0; i < value.length; i++){
    result[key[i]] = value[i]
}

console.log(result)


// Question 2.
// Given a string , calculate the occurrence of each and every character and print the output.
// Sample Input: ‘edstem’
// Sample Output: e - 2
// 		 d - 1
// 		 s - 1
// 		 t - 1
// 		 m - 1

let key="vaishnav"
let array=[]
let count=0;

for(let i=0;i<key.length;i++){
    if(!array[key[i]]){
        array[key[i]]=true
        count=1;
        console.log(key[i]+" : "+count)   
    }
    else{
        count++
        console.log(key[i]+" : "+count)      
    }
}


// Question 3.
// Given user's names and their phone numbers , query the given user and find the phone number .

let details = {
     "Raju": 9536681673,
     "sakeer": 9561247512,
     "ravi": 8567890231
 }
console.log(details.ravi)

// Question 4.
// Given an array , find the unique elements .
// Sample Input: [10, 20, 30, 10, 40, -2]
// Sample Output: 20, 40, -2

let numbers=[10,20,30,10,30,40,-2]
let unElement=[]
for(i=0;i<numbers.length;i++){
    if(!unElement[numbers[i]]){
        unElement[numbers[i]]=true;        
    }
    else{
        unElement[numbers[i]]=false;    
    }  
}
for(i=0;i<numbers.length;i++){
    if(unElement[numbers[i]]==true){
        console.log(numbers[i]);
    }
}

// Question 5.
// Given two words (small case) if they are anagrams print "TRUE" otherwise "FALSE" https://en.wikipedia.org/wiki/Anagram
// Sample Input 1 - den , end
// Sample Output 1 - TRUE
// Sample Input 2 - hello, heloo
// Sample Output 2 - FALSE

var word1 = "low"
var word2 = "owl"
var str1 = word1.split('').sort().join('');
var str2 = word2.split('').sort().join('');
   if(str1 === str2){
      console.log("True");
   } else { 
      console.log("False");
   }

// Question 6.
// Given an employees database query the employees who are from hyderabad and having experience more than 3 years
// Sample Input: var database = [ { name: 'vicky', age: 24, married: false, address: { city: 'hyderabad', state: 'andhra', pincode: '516003' }, skills: ['react', 'html', 'nodejs'], experience: 2 }, { name: 'nirmal', age: 20, married: true, address: { city: 'hyderabad', state: 'telengana', pincode: '500004' }, skills: ['css', 'figma'], experience: 4 }, { name: 'neeraj', age: 26, married: false, address: { city: 'bengaluru', state: 'karnataka', pincode: '510006' }, skills: ['aws', 'angular', 'nodejs'], experience: 5 } ]
// Sample Output: nirmal

var database = [
    {
      name: "vicky",
      age: 24,
      married: false,
      address: { city: "hyderabad", state: "andhra", pincode: "516003" },
      skills: ["react", "html", "nodejs"],
      experience: 2,
    },
    {
      name: "nirmal",
      age: 20,
      married: true,
      address: { city: "hyderabad", state: "telengana", pincode: "500004" },
      skills: ["css", "figma"],
      experience: 4,
    },
    {
      name: "neeraj",
      age: 26,
      married: false,
      address: { city: "bengaluru", state: "karnataka", pincode: "510006" },
      skills: ["aws", "angular", "nodejs"],
      experience: 5,
    },
  ];
  
  for (var i = 0; i < database.length; i++) {
      if (database[i].address.city === "bengaluru" && database[i].experience > 3) {
          console.log(database[i].name)
      }
  }