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

const bill = 40;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(`the bill was ${bill}, the tip was ${tip}, and the total value was ${bill + tip}`);
