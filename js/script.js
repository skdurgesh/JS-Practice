// variable naming convention
//let js = "Amazing";


//console.log(firstname, lastName);

/* let a = '40';
let b = Number(a);

//console.log(typeof a, a);
//console.log(typeof b, b);

let amount = 99.99;
amount = amount * 2;

console.log(amount); */

/* let age = 30;
age = 31;
//console.log(age);

const birthYear = 1985;
const currentYear = 2025;

const ageDurgesh = currentYear - birthYear;
const ageShalini = 2025 - 1988;

console.log(ageDurgesh, ageShalini); // 40, 37
const firstName = "Durgesh";
const lastName = "Singh";

console.log(firstName + " " + lastName);


let x = 10;
x += 5; // x = x + 5 = 15;
x += 4; // x = x + 4 = 19;
x++; // x = x + 1 = 20;
x--; // x = x - 1 = 19;
console.log(x); 

// comparison operators
console.log( ageDurgesh > ageShalini); // true */

// Template Literals
/* const firstName = "Durgesh";
const lastName = "Singh";
const job = "Software Engineer";
const birthYear = 1985;
const year = 2025;

const durgesh = "I am " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(durgesh);

const temp_literal = `I am ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(temp_literal); */

// taking decisions: if/else statements


/* const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85; 
// const heightJohn = 1.76;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI ${BMIMark} is higher than John's ${BMIJohn}!`);
} else{
    console.log(`John's BMI ${BMIJohn} is higher than Mark's ${BMIMark}!`);
} */

// Type Conversion and Coercion
/* const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Durgesh')); // NaN
console.log(typeof NaN);

console.log('2' + 9, typeof ('2' + 9));
console.log('8' - 5);
console.log('10' / '2');
console.log('5' * '2');

let n = '1' + 1;
n = n - 1;
console.log(n); */


// 5 falsy values: 0, '', undefined, null, NaN
/* console.log(Boolean(0)); // false
console.log(Boolean('')); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(null)); // false
console.log("String:", Boolean('Durgesh')); // true
console.log("Object:", Boolean({})); // true

let money = 1; 
if (money) {
    console.log("Don't spend it all!");
} else {
    console.log("You should get a job!");
} */

// Equality operators == vs ===
/* const age = 18;

if (age === 18) 
    console.log("You just became an adult! (strict)");

if (age !== 17) 
    console.log("You are not an adult! (strict)"); */

// Logical Operators/Boolean Logic
/* const hasVoterID = true;
const hasAdhaaarCard = true;

console.log(hasVoterID && hasAdhaaarCard);
console.log(hasVoterID || hasAdhaaarCard);
console.log(!hasVoterID);


const isculprit = false;

console.log(hasVoterID && hasAdhaaarCard && isculprit);

if(hasAdhaaarCard && hasVoterID && !isculprit){
    console.log("in next Election you are ready to vote!");
}
else{
    console.log("You are not eligible to vote in upcoming Election!");
} */

// CHALLENGE #3
/* There are two gymnastics teams: Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!

Your tasks:
1. Calculate the average score for each team, using the test data included below. The average score for Dolphins should be assigned to the scoreDolphins variable, and the average score of Koalas should be assigned to the scoreKoalas variable.
2. Compare the team's average scores to determine the winner of the competition, and print to the console:
"Dolphins win the trophy" if Dolphins win, or
"Koalas win the trophy" if Koalas win, or
"Both win the trophy" if their average scores are equal.
TEST DATA: Dolphins scored 96, 108, and 89. Koalas scored 88, 91, and 110. */

/* const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (90 + 90 + 110) / 3;
console.log(scoreDolphins, scoreKoalas);

if(scoreDolphins > scoreKoalas && scoreDolphins >= 95){
    console.log("Dolphins win the trophy 🏆");
}
else if(scoreDolphins < scoreKoalas && scoreDolphins >= 95){
    console.log("Koalas win the trophy 🏆");
} 
else{
    console.log("Both win the trophy 🏆");
} */

// Switch statements

/* const day = 'monday'; 

switch (day) {
    case 'monday':
        console.log("Plan the vacations.");
        console.log("Let's go to Uttarakhand. as babbu has already been there.");
        break;

    case 'tuesday':
        console.log("Let's go to delhi to meet my youngest brother.");
        break;

    case 'wednesday':
    case 'thursday':
        console.log("Let's go to the market.");
        break;
    
    case 'friday':
        console.log("Let's go to the Movie theatre.");
        break;

    case 'saturday':
    case 'sunday':
        console.log("Enjoy the weekend! :D");
        break;

    default:
        console.log("Please define a valid day!");
        break;
} */

// Conditional (Ternary) Operator

/* const age = 16;

const drink = age >= 18 ? "Wine 🍷" : "Milk 🥛";
console.log(drink);
console.log(`I like to drink ${(age >= 18 ? "Wine 🍷" : " Milk 🥛")}`); */


