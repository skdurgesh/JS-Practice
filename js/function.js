// Function

/* let ageYear = 1985;

function myNewFunc() {
    let currentAge = 2025 - ageYear;
    console.log(`This is function statement and i am ${currentAge} years old.`);
}
// calling / running / invoking the function
myNewFunc();
myNewFunc(); */

function fruitProcessor(apples, kiwis){
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
console.log(salaryCount);