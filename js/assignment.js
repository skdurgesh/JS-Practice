/* CHALLENGE #1
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / (height * height) (mass in kg and height in meters).
Your task is to write some code to help them:
Store Mark's and John's mass and height in variables called massMark, heightMark, massJohn and heightJohn.
Calculate both their BMIs using the formula, and store the results in two variables called BMIMark and BMIJohn.
Log the value of BMIMark and BMIJohn to the console.
BONUS: Create a boolean variable markHigherBMI containing information about whether Mark has a higher BMI than John. Log it to the console too

TEST DATA 1: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall. */

/* let massMark = 78, heightMark = 1.69;
let massJohn = 92, heighJohn = 1.95;

let BMIMark = massMark / heightMark ** 2;
let BMIJohn = massJohn / (heighJohn * heighJohn);

const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI); */

// CHALLENGE #2

// const scoreDolphins;
// const scoreKoalas;


/* CHALLENGE #4
Steven needs a very simple tip calculator for whenever he goes to eat in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

Your tasks:
Calculate the tip, depending on the bill value. Create a variable called tip for this. It's not allowed to use an if...else statement (if it's easier for you, you can start with an if...else statement, and then try to convert it to a ternary operator).
Print a string to the console containing the bill value, the tip, and the final value (bill + tip).
Example: The bill was 275, the tip was 41.25, and the total value 316.25.

Note: Use the values of the bill and tip variables to construct this string. Don't hard-code them 🙂

TEST DATA: Test with different bill values: 275, 40, and 430
HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT 2: Value X is between 50 and 300, if it's >= 50 && <= 300 😉 */

// method 1: using if/else statement

/* const bill = 275;
const tip = bill*15/100; // calculation of 15% tip
const excess_tip = bill*20/100; */

/* if (bill >= 50 || bill <= 300) {
    const total = bill + tip;
    console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${total}.`);
}
else{
    const total = bill + excess_tip;
    console.log(`the bill was ${bill}, the tip was ${excess_tip}, and the total value ${total}.`);
} */

// method 2: using ternary operator 
/* const total = bill >= 50 && bill <= 300 ? bill + tip : bill + excess_tip;
console.log(`The bill was ${bill}, the tip was ${bill >= 50 && bill <= 300 ? tip : excess_tip}, and the total value ${total}.`);
 */

// How it should be done

/* const bill = 40;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(`the bill was ${bill}, the tip was ${tip}, and the total value was ${bill + tip}`); */

// CHALLENGE #1
/* Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team only wins if it has at least double the average score of the other team. Otherwise, no team wins! */

// Your tasks:
/*
1. Create an arrow function calcAverage to calculate the average of 3 scores. This function should have three parameters and return a single number (the average score).
2. Create two new variables — scoreDolphins and scoreKoalas, and assign the value returned from the calcAverage function to them (you will need to call this function, and pass scores as arguments).
3. Create a function checkWinner that takes the average score of each team as parameters (avgDolphins and avgKoalas), and then logs the winner to the console, together with the victory points, according to the rule above. Example: Koalas win (30 vs. 13) (use avgDolphins and avgKoalas instead of hard-coded values).
4. Use the checkWinner function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time. Instead, log No team wins... to the console if there is no winner. 
*/

// TEST DATA 1: Dolphins scored 44, 23, and 71. Koalas scored 65, 54, and 49.
// TEST DATA 2: Dolphins scored 85, 54, and 41. Koalas scored 23, 34, and 27.

// Code that i have written
/* let calcAverage = (scrNum1, scrNum2, scrNum3) => {
    scoreAverage = (scrNum1 + scrNum2 + scrNum3) / 3;
    return scoreAverage;
}
console.log(calcAverage(30, 43, 72));

let checkWinner = (avgDolphins, avgKoalas) => {
    const scoreDolphins  = calcAverage(avgDolphins);
    const scoreKoalas = calcAverage(avgKoalas);

    if (scoreDolphins > 2 * scoreKoalas) {
        return console.log(`Dolphins win the match with (${scoreDolphins} vs ${scoreKoalas})`);
    }
    else if (scoreKoalas > 2 * scoreDolphins) {
        return console.log(`Koalas win the match with (${scoreKoalas} vs ${scoreDolphins})`);
    } else {
        console.log("Both teams have draw.");
    }
}
checkWinner(45, 70); */
//console.log();

// Code that how it should be.

/* const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(4, 6, 8)); */

// Test 1
/* let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins){
        console.log(`Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`);
    } else{
        console.log('No team wins...');
    }
}
checkWinner(scoreDolphins, scoreKoalas);
// you can also take any random number instead variable
checkWinner(550, 90);
// Test 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas); */


/************************** 
Excercise 6 - CHALLENGE #2
Steven wants you to improve his tip calculator, using the same rules as before — tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

Your tasks:
Write a function calcTip that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from the first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
And now let's use arrays! So, create an array called bills containing the test data below.
Create an array called tips containing the tip value for each bill, calculated from the function you created before.

BONUS: Create an array totals containing the total values, so the bill + tip.
TEST DATA: 125, 555, and 44. 
***************************/

/* const calcTip = function(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, total); */


/************************** 
Excercise 7 - CHALLENGE #3
Let's go back to Mark and John comparing their BMIs!
This time, let's use objects to implement the calculations! Remember: BMI = mass / (height * height) (mass in kg and height in meters).

Your tasks:
1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith). Name these objects as mark and john, and their properties exactly as fullName, mass and height.

2. Create a calcBMI method on each object to calculate the BMI (the same method on both objects). Assign the BMI value to a property called bmi (lowercase), and also return it from the method.

3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.

***************************/
/* let mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    
    calcBMI: function(){
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
        //console.log(this.bmi);
    }
}


let john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    
    calcBMI: function(){
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}

mark.calcBMI();
john.calcBMI();

console.log(mark.bmi, john.bmi);

if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMi (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`);
} else if(john.bmi > mark.bmi){
    console.log(`${john.fullName}'s BMi (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`);
} */


// Challenge #4
/* Let's improve Steven's tip calculator even more, this time using loops! 

Your tasks:
Create an array called bills containing all 10 test bill values.
Create empty arrays for the tips and the totals (tips and totals)
Use the calcTip function we wrote before (included in the starter code) to calculate tips and total values (bill + tip) 
for every bill value in the bills array. Use a for loop to perform the 10 calculations!
TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86, and 52.

BONUS:

Write a function calcAverage which takes an array called arr as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it if you feel like it:
1. First, you will need to add up all values in the array. To do the addition, start by creating a variable sum that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the sum variable. This way, by the end of the loop, you have all values added together.
2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements).
3. Call the function with the totals array.
*/

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

/* Write your code below. Good luck! 🙂 */
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++){
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
}
console.log(bills, tips, totals);


const calcAverage = function(arr){
    let sum = 0;    
     for(let i = 0; i < arr.length; i++){
        // sum = sum + arr[i];
        sum += arr[i];
     }
     return sum / arr.length;
}


console.log(calcAverage([2, 4, 4]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));

