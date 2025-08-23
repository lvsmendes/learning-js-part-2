'use strict'; 
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('i can drive');

//const interface = 'Áudio';
//const private = 534;

*/

/*
function logger() {
    console.log('My name is lucas');
}

//calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges){
    console.log(apples, oranges);
    const juice = `juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);


function meetProcessor(beef, pork, chicken){
    const meet = `minced meat with ${beef} beef, ${pork} pork, and ${chicken} chicken.`;
    return meet;
}

const beefPorkChickenMeet = meetProcessor(1, 1, 1);
console.log(beefPorkChickenMeet);
*/

/*
// Function declaration
function calcAge1(birthYear) {
    return 2025 - birthYear;
}
const age1 =calcAge1(2000);


//Function expression
const calcAge2 = function (birthYear){
    return 2025 - birthYear;
}
const age2 = calcAge2(2000);

console.log( age1, age2);
*/

/*
//Arrow function
const calcAge3 = (birthYear) => 2025 - birthYear;
const Age3 = calcAge3(2000);
console.log(Age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2025 - birthYear
    const retirement = 65 - age;
    //return retirement;
    return `${(firstName)} retires in ${retirement} years`;
}

yearsUntilRetirement(2000);
console.log(yearsUntilRetirement(2000));
console.log(yearsUntilRetirement(2000, 'lucas'));
*/

function cutFruitPieces(fruit){
    return fruit * 4;
}

function fruitProcessor(apples, oranges){
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    
    
    const juice = `juice with ${applePieces} pieces of apples and ${orangePieces}  pieces of oranges.`;
    return juice;
}

console.log (fruitProcessor(2, 3));