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


// Function

/* let ageYear = 1985;

function myNewFunc() {
    let currentAge = 2025 - ageYear;
    console.log(`This is function statement and i am ${currentAge} years old.`);
}
// calling / running / invoking the function
myNewFunc();
myNewFunc(); */

/* function fruitProcessor(apples, kiwis){
    //console.log(apples, kiwis);
    const juice = `Juice with ${apples} apples and ${kiwis} kiwis.`;
    return juice;
}

const fruitJuice = fruitProcessor(6, 2);
console.log(fruitJuice);

function salaryCalculation(salary, bonus){
    let salaryTotal = salary + bonus;
    return `This months salary ${salary} with bonus ${bonus} so my total takeaway was ${salaryTotal}.`;
}

let salaryCount = salaryCalculation(25000, 5000);
console.log(salaryCount); */

// Function Declaration
/* function calcAge1(birthYeah){
    return 2037 - birthYeah; 
}
const age1 = calcAge1(1985); */

// Function Expression
/* const calcAge2 = function(birthYeah){
    return 2037 - birthYeah;
}
const age2 = calcAge2(1993);
console.log(age1, age2); */

// spread/Rest Operator

/* function calculateCartPrice(val1, val2, ...num1){
    return num1;
}
console.log(calculateCartPrice(200, 400, 500, 1000)); */

// one way to decalre the object
/* const user = {
    username: "Durgesh Singh",
    price: 399
}

function handleObject(someObject){
    console.log(`Username is ${someObject.username} and price is ${someObject.price}`);
}

//handleObject(user);
// You call the object within on the time of function invoking. 
// another way to call the object.
handleObject({
    username: "Sam",
    price: 399
}); */

// calling the Array into function
/* const myNewArray = [200, 400, 100, 1000];
function returnSecondValue(getArray){
    return getArray[0];
}

//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 100, 1000])); */

// Function Scopes

/* let a = 10;

{
    console.log(a);
    let scopeVar = 20;
}
{
    let x = 1000;
    console.log(scopeVar);
} */
//console.log(scopeVar);

// Closure
/* function one(){
    const username = "Durgesh";

    function two() {
        const website = "http://www.amazon.in";
        console.log(username);
        console.log(website);
    }
    two();
}
one(); */

// Arrow function and this keyword 
/* const yearsUntilRetirement = (birthYeah, firstName) => {
    const age = 2025 - birthYeah;
    const retirement = 60 - age;
    //return retirement;
    return `${firstName} retires in ${retirement} years.`;
}

console.log(yearsUntilRetirement(1982, "Anand"));
console.log(yearsUntilRetirement(1985, "Durgesh")); */

/* const user = {
    username: "Durgesh",
    price: 499,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website.`);
        console.log(this);
    }
} 

//user.welcomeMessage();
//user.username = "Sam";
//user.welcomeMessage();

//console.log(this);*/

/* function chaicode(){
    const username = "Durgesh";
    console.log(this.username);
}

chaicode(); */

/* const chaicode = function(){
    let username = "Anand";
    console.log(this.username);
}
chaicode(); */

/* const chaicode = () => {
     let username = "Anand";
    console.log(this.username);
}
chaicode(); */

/* const addTwo = (num1, num2) =>{
    return num1 + num2;
}
console.log(addTwo(4,5)); */

/* const addTwo = (num1, num2) => (num1 + num2);    // implicit type
console.log(addTwo(4,5)); */

// const itemArray = [3, 5, 90, 589];
// itemArray.forEach()

// Immediately Invoked Function Expression (IIFE)

/* (function dbConnect(){
    // named IIFE
    console.log(`DB Connected.`);
})();

((dbname) => {
    // unnamed IIFE
    console.log(`DB Connected again to ${dbname}`);
})("Durgesh"); */

/* function outer() {
  var a = 1;

  function inner() {
    var b = 2;
    // we can access both `a` and `b` here
    console.log(a + b); // 3
  }
  inner();
  // we can only access `a` here
  console.log(a); // 1
}
outer(); */

// Functions calling other functions
/* function cutFruitPieces(fruit){
    return fruit * 4;
}

function fruitProcessor(apples, oranges){
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    
    const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
    return juice;
}
console.log(fruitProcessor(5, 8)); */

// Array and Array Methods
/* const freind1 = "Mitesh";
const freind2 = "Hitesh";
const freind3 = "Haresh";

const freinds = ['Mitesh', 'Hitesh', 'Haresh'];
freinds[2] = "Joy";

const _age = 2025 - 1982;
const myname = "Durgesh"
const _names = new Array(myname, "Anand", "Rupesh", _age); */
//console.log(_names);

// IndexOf()
/* const randomArray = ["Babbu", "Sandip", [1, 2, 3, "Hiresh"]];
console.log(randomArray[2][3]);
console.log(randomArray.indexOf("Sandip")); //1
console.log(randomArray.indexOf("Papisise")); // -1 */

// push()
/* const cities = ["Mumbai", "Delhi", "Ahemedabad"];
cities.push("Hyderabad", "Chennai");
console.log(cities); */

// return the array index storing the value in Variable.
/* const newLength = cities.push("Kolkata");
console.log(cities);
console.log(newLength); */

// unshift()
/* cities.unshift("Noida");
console.log(cities); */

// Pop() => To remove the last item from the array.
/* cities.pop();
console.log(cities);
// pop method returns the item that was removed by saving it in variable.
const removedCities = cities.pop();
console.log(cities);
console.log(removedCities); */

// shift() => To remove the first item from an array.
/* cities.shift();
console.log(cities); */

// splice() => { if you know the index of item, you can remove it from the array. }
/* const index = cities.indexOf("Delhi");
console.log(index);

if (index !== -1) {
    cities.splice(index, 1)
}
console.log(cities);
 */
// Accessing every items in the array use for each loop
/* const birds = ["Parrots", "Flamingo", "Sparrow"];

for(const bird of birds){
    console.log(`I am a ${bird}`);
}
 */
// Use map() to apply the same change to every item in an array.

/* function double(number) {
    return number;
}

const numbers = [3, 5, 7, 11];
const doubled = numbers.map(double);
console.log(doubled);  */

// Sometimes you'll want to create a new array containing only the items in the original array that match some test. You can do that using filter(). 
// The code below takes an array of strings and returns an array containing just the strings that are greater than 8 characters long:

/* function isLong(city){
    return city.length > 8;
}

const _cities = ["London", "Liverpool", "Totnes", "Edinburgh"];
const longer = _cities.filter(isLong);
console.log(longer); */

// generating random OTP function
/* function getOTP() {
    const min = 10000000;
    const max = 99999999;

    return Math.floor(Math.random() * (max - min + 1) + min);
}

const otp = getOTP();
console.log(otp); */

/* for(let i = 1; i <= 5; i++){
    setTimeout(() => console.log(i), 1000);
} */

/* for(var i = 1; i <= 5; i++) {
    (function(j) {
        setTimeout(() => console.log(j), 1000);
    })(i);
} */

/* const data = "Manchester,London,Liverpool,Birmingham,Leeds,Carlisle";
const _cities = data.split(",");
console.log(_cities);
console.log(_cities.includes('Liverpool')); */

 // Using a constructor function 
/* alternatively you can create an Object with these two steps 
1. Define the object type by writing a constructor function. There is a strong convention, with good reason, to use a capital initial letter.
2. Create an instance of the object with 'new'.
*/

 /* function Car(make, model, year, owner) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.owner = owner;
 }

// Notice the use of 'this' to assign values to the object's properties based on the values passed to the function.
const myCar = new Car('Ford', 'Fiesta', 2001);
console.log(myCar);

// You can create any number of Car objects by calls to new. For example
const newCar = new Car("Nissan", "300XZ", 1992);
console.log(newCar);


function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
}

const rand = new Person('Rand Mckinnon', 40, 'Male');
const kane = new Person('Harry Kane', 38, 'Male')
console.log(rand, kane);

const car1 = new Car('Suzuki', 'Swift', 2005, rand);
const car2 = new Car('Honda', 'City', 2010, kane);
console.log(car1.owner.name);
console.log(car2.owner.name);

// Dot vs Bracket [] Notation

const Jones = {
    firstName: 'Jones',
    lastName: 'Smith',
    birthYeah: 1985,
    age: 2025 - 1985,
    job: 'Teacher',
    freinds: ['Michael', 'Peter', 'Steven'],
    hasDriversLicence: true,

    // calcAge: function(birthYeah) {
    //     return 2025 - birthYeah;
    // } 
    //     calcAge: function() {
    //     console.log(this);
    //     return 2025 - this.birthYeah;
    // }

    calcAge: function() {
        this.age = 2025 - this.birthYeah;
        return this.age;
    },

    getsummary: function(){
        return `${this.firstName} is a ${this.calcAge()}-year old ${Jones.job}, and he has ${this.hasDriversLicence ? 'a': 'no'} driver's licence.`;
    }
};


// Object Methods
console.log(Jones.calcAge());
console.log(Jones.getsummary()); */


/* console.log('My favourite freind is', Jones.freinds[0]);
console.log('my other freind are', Jones.freinds[1], 'and', Jones.freinds[2]);

Jones.location = 'Spain';
Jones['twitter'] = '@jonessmith.com';
console.log(Jones);

delete Jones.twitter;
console.log(Jones);

// Checking if a Property Exists
console.log('age' in Jones);
console.log(Jones.hasOwnProperty('location')); */


// For loops
/* const Durgesh = ['Durgesh', 'Singh', 2025 - 1985, 'IT Engineer', ['Michael', 'Peter', 'Steven'], true];
const types = [];


for(let i = 0; i < Durgesh.length; i++){
    console.log(Durgesh[i], typeof Durgesh[i]);
    
    types[i] = typeof Durgesh[i];
}
console.log(types);

const years = [1991, 1993, 1969, 2007, 2009];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(`age is: ${2025 - years[i]}`);
}
console.log(ages);

// continue and break
console.log('------ ONLY STRINGS ------');

for(let i = 0; i < Durgesh.length; i++){
    if (typeof Durgesh[i] !== 'string') continue;

    console.log(Durgesh[i], typeof Durgesh[i]);
}
console.log('------ BREAK WITH NUMBER ------');
for(let i = 0; i < Durgesh.length; i++){
    if (typeof Durgesh[i] === 'number') break;

    console.log(Durgesh[i], typeof Durgesh[i]);
}

// Looping backwards
console.log('------ BACKWORD LOOPS ------');
for(let i = Durgesh.length - 1; i >= 0; i--){
    console.log(i, Durgesh[i]);
}

// Loop inside Loop
for(let excercise = 1; excercise < 4; excercise++){
    console.log(`------- Exercise ${excercise} initiated -------`);

    for(let rep = 1; rep <= 6; rep++){
        console.log(`Lifting weight repetitin ${rep}`);
    }
} */

// while loops
/* n = 0
x = 0;

while (n < 3) {
    n++;
    x += n;
    console.log(`value is : ${x}`);
    
} */

// Start Pyramids
/* function printPyramid(rows) {
      for (let i = 1; i <= rows; i++) {
        let spaces = " ".repeat(rows - i);
        let stars = "*".repeat(2 * i - 1);
        console.log(spaces + stars);
      }
}
printPyramid(5); */


/* document.getElementById("textBtn").addEventListener("click", function() {
    const heading = document.querySelector("h1");
    heading.innerHTML = "This text can be appended in DOM.";

    //const text = document.createTextNode('this text can be appended in DOM.');
    //heading.appendChild(text);
    console.log(heading.innerHTML);
}); */





