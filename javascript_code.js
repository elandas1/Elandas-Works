let js = 'amazing';
if (js == 'amazing') alert('Javascript is FUN!')

/*40 + 8 + 23 - 10;
console.log(40 + 8 + 23 - 10);
console.log('Jonas');
console.log(23)

//variable name comments
let firstName = 'Jonas';
console.log(firstName);
console.log(firstName);

let myFirstJob = 'Assistant';
let myCurrentJob = 'Entrepreneur';

//true
//console.log(true)

let javascriptIsFun = true;
console.log(javascriptIsFun);
console.log(typeof true);
console.log(typeof 23);
console.log(typeof 'Jonas');

javascriptIsFun = 'YES';
let year;
console.log(year);
console.log(typeof year);

year = 1992;
*/

/*let age = 28;
age = 37;

const birthYear = 1991;

var job = 'programmer';

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

const firstName = 'Jonas';
const lastName = 'Mason';
console.log(firstName + ' ' + lastName);

//Assignment Operators
let x = 10 + 5;
console.log(x);
x += 10; // x = X + 10
x *= 4; // x = x + 4 = 100
x++; // x = x + 1
x--; // x = x - 1

//C= Comparison Operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);
//if true,

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2020);
*/

/*
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(now - 1991 > now - 2020);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;

console.log(ageJonas, ageSarah, averageAge);
*/

//BMI = mass / height ** 2 

/*const massMark = 78
const heightMark = 1.69

const BMI = massMark / heightMark ** 2


const massMark2 = 95
const heightMark2 = 1.76

const BMI2 = massMark2 / heightMark2 ** 2

console.log(BMI);
console.log(BMI2);
const massJohn = 92
const heightJohn = 1.95

const BMIJohn = massJohn / heightJohn ** 2

const massJohn2 = 85
const heightJohn2 = 1.76

const BMIJohn2 = massJohn2 / heightJohn ** 2

console.log(BMIJohn);
console.log(BMIJohn2);

const markHigherBMI = BMI > BMIJohn;

const markHigherBMI2 = BMI2 >= BMIJohn2;

console.log(markHigherBMI);
console.log(markHigherBMI2);



const firstName = 'Jonas'
const job = 'teacher';
const birthYear = '1991'
const year = 2037

const jonas = "I'm" + ' ' + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;

console.log(jonasNew);

console.log(`Just a regular string...`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String
multiple
lines`); 
*/
/*
const age = 15;
const isOldEnough = age >= 18;

if (isOldEnough) {
    console.log(`Sarah can start driving license`);
}
if (age >= 18) {
    console.log(`Sarah can start driving license test`);
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}
*/
/* any code defined in the code block will not show up so it has to be defined outside of the code block  */
/*
const birthYear = 1992;

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);
*/
/*
const massMark2 = 95
const heightMark2 = 1.76

const BMI2 = massMark2 / heightMark2 ** 2

console.log(BMI);
console.log(BMI2);
const massJohn = 92
const heightJohn = 1.95

const BMIJohn = massJohn / heightJohn ** 2

const massJohn2 = 85
const heightJohn2 = 1.76

const BMIJohn2 = massJohn2 / heightJohn ** 2
*/
//console.log(BMIJohn);
//console.log(BMIJohn2);

//const markHigherBMI = BMI > BMIJohn;

//const markHigherBMI2 = BMI2 >= BMIJohn2;

//console.log(markHigherBMI);
//console.log(markHigherBMI2);

//BMI = mass / height ** 2

/*const massMark = 78
const heightMark = 1.69

const BMI = massMark / heightMark ** 2

if (BMI >= BMIJohn) {
    console.log(`Mark's BMI is higher than John's`);
} else {
    console.log(`John's BMI is higher than Mark's`);
}

console.log(`Mark's BMI ${BMI} is higher than John's ${BMIJohn}!`);
*/

/*const inputYear = '1991';
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'))
console.log(String(23));
*/
// type coercion
// an operation and a Number, the the number will be coerced into a String. the plus operator converts numbers into String. the other operators converts numbers into a Number. 


//console.log(' I am' + 23 + ' years old')
//console.log('23' - '10' - 3);
//console.log('23' * '2');

// 5 Falsy Values: 0, '', undefined, null, NaN will be converted to a false value when converted into a boolean

//Truthy Values: values that would be converted to true when converting them into a Boolean. 
/*
console.log(Boolean(0))
console.log(Boolean(undefined))
console.log(Boolean('Jonas'))
console.log(Boolean({}));

//type coercison for Booleans in logical operators and using an if /else statement

const money = 0

if (money) {
    console.log(`Don't spend it all ;)`);
}
else {
    console.log(`You should get a job`);
}
// java tries to covert money into a Boolean and since 0 is a falsy value, then the false/else statement will be pulled into the console. 

let height = 23
if (height) {
    console.log('YAY! Height is defined');
} else {
    console.log('Height is UNDEFINED');
}

*/

const age = 18;

if (age === '18') console.log('You just became an adult :) (strict)');


if (age == 18) console.log('You just became an adult :) (loose)');

console.log(age);



/* triple equal does not convert a string into a number or vice versa.

a double equal converts strings into a number. it is the loose equality operator. be careful not to use the double equal when comparing values.

ALWAYS USE THE THREE EQUAL SIGNS.
*/
/*
const favorite = Number(prompt("What's your favorite number?"));

console.log(favorite);
console.log(typeof favorite);

if (favorite === 34) {
    console.log('cool! 34 is an amazing number')
} else if (favorite === 7) {
    console.log('7 is also a cool number')
} else {
    console.log('Number is not 34 or 7');
}
// need to wrap the whole function into a Number value for the triple equal sign to work.
if (favorite !== 23) console.log('Why not 23?');
*/

//Boolean logic uses logic operators to combine true and false. Logic Operators are And, OR, Not. 

