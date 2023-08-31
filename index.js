console.log("hello this is assaignment week 4!")


console.log(`Question # 1:\n Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
Programmatically subtract the value of the first element in the array from the value in the last element of the array.
Do not use numbers to reference the last element, find it programmatically.
ages[7] - ages[0] is not allowed!
Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
Use a loop to iterate through the array and calculate the average age.`);
console.log("Answer: \n")
let ages=[3,9,23,2,8,28,93];
console.log(ages[6] - ages[0]);


console.log(`Question #2: \n Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
Use a loop to iterate through the array and calculate the average number of letters per name.
Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.\n`);
console.log(`Answer 2:\n`)

let names=['Sam','Tommy','Tim', 'Sally','Buck','Bob']
let length = names.map(function(element){
   return element.length;
});
let numberOfLetters=0;
let avgNumberofLetters=0;
// we use for loop to calculate the sume and average. 
for (let i of length){
   numberOfLetters+=i;
}
avgNumberofLetters=numberOfLetters/6;
console.log("a:"  + avgNumberofLetters);

for( let a of names){
   console.log("b:"+ names.join(" "));
}
console.log ("second method of b:" + names[0]+ "  ", names[1]+ "  ", names[2]+ "  " ,names[3]+ " " ,names[4]+" ",names[5]+" ");


console.log( ` Question 3:\n How do you access the last element of any array?\n`);
console.log(`Answer:\n by using the "length -1 we can get the last element of an array.`)

console.log(names[names.length -1]);

console.log (`Question 4:\n How do you access the first element of any array?`);
console.log(`Answer: \n We can access the first element of an array by its index [0]`)
console.log(names[0]);

console.log(` Question #5:\n Create a new array called nameLengths. Write a loop to iterate over the previously 
created names array and add the length of each name to the nameLengths array.`);
console.log(`Answer: \n`)
let i=names;
let nameLengths=[3,5,3,5,4,3]
for(let i of names){
console.log(names +" " + nameLengths);
}

console.log(` Question 6:\n Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.`);
console.log(`Answer: \n`)
let sum=0;
for(let b=0;b<nameLengths.length;b++){
   sum=sum+nameLengths[b];
   console.log(sum);
}

console.log(` Question 7:\n Write a function that takes two parameters, word and n, as arguments and returns the word concatenated 
to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').`);
console.log(`Answer:\n`)


function a(word,n){
  for(let n of word){
   console.log(word + n)
  }

  
   }




console.log(` Question 8:\n Write a function that takes two parameters, firstName and lastName,
 and returns a full name. The full name should be the first and the last name separated by a space.`);
console.log("Answer:\n")
 function fullName( firstName,lastName){
   return firstName+lastName;
 }
 console.log(fullName("Zabeehullah", "  Yadgar"));

console.log( ` Question 9:\n Write a function that takes an array of numbers and returns true if the sum of all
 the numbers in the array is greater than 100.`);
 console.log("Answer:\n")

 let number=[20,67,54]
function numberv(n){
for(let i = 0;i<100;i++){
   let result=n+[i]
   if(result>100){
      console.log(true);
   }else{
      console.log(false);
   }
}
}
numberv(200)

console.log(`Question #10: \n Write a function that takes an array of numbers and returns the average of all the elements in the array.`)
console.log(`Answer:\n`)

const numbers=[1,2,3,4]
   let sum1 = 0;
   for(let i = 0; i < numbers.length; i++)
   sum1 += numbers[i]
   avg=sum1/4
   
console.log(avg);


console.log(`Question 12:\nWrite a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket,
 and returns true if it is hot outside and if moneyInPocket is greater than 10.5`);
 console.log(`Answer:\n`)

 function willBuyDrink(isHotOutside,moneyInPocket){
   if(isHotOutside===true && moneyInPocket>10.5){
      console.log(true)
   }else{
      console.log(false)

   }
  
 }
 willBuyDrink(true,11.5);


console.log(` Question 12:\n Create a function of your own that solves a problem.
 In comments, write what the function does and why you created it.`)
console.log(`Answer:\n`)

// in this function I just made an example of fail and pass. as functions are made for future use. I made this simple example for 
//function. so we can use the function as many times as we need with different parametes. 

function pass(grade, marks){
   if(marks>50){
      console.log("Hello, You are successfully passed to next grade!")

   }else{
      console.log(" You couldn't obtain the required marks to go to next grade!")
   }

}
pass(4,45)
pass(4,67)