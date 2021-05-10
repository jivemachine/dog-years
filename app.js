// Silly little project to help me become more familiar with javascript syntax. 

// The first two years of a dogs life equates to 10.5 human years each, every year following counts as 4 human years each. I'm going to use this to calculate my age in dog years in this small javascript app
// constant variable holding my current age
const myAge = 29;
// multiplying the first two years of my life times 10.5 to indicate dog aging
let earlyYears = 2 * 10.5;
// subtracting the two years from above and multiplying the remaining years by 4
let laterYears = (myAge - 2) * 4;
// putting my dog year age together
myAgeInDogYears = earlyYears + laterYears;
// throwing my name into a variable
myName = "Jeremy".toLowerCase();
// printing my results
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
