const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length); //use to convert into number into string 
// console.log(balance.toFixed(1));

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());
console.log((Math.random()*10) + 1);// why we use one so that avoid the zero vlaue but it give decimal  value  
console.log(Math.floor(Math.random()*10) + 1);// help to get the ineger value b/w  1-10

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)//use to set limit of max and min value that give random value between this (in this i give random vlaue b/w 10-20)