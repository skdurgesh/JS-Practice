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
function cutFruitPieces(fruit){
    return fruit * 4;
}

function fruitProcessor(apples, oranges){
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    
    const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
    return juice;
}
console.log(fruitProcessor(5, 8));


