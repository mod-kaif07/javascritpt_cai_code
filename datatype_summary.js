//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);


// to read this article copy the link below
// https://262.ecma-international.org/5.1/#sec-11.4.3



let myyoutube_name = "YOUTH.com"
let anothername =myyoutube_name;
console.log(myyoutube_name)
console.log(anothername)
// //here we chnage the copy value of the anothername beoz it use primitive data type
anothername="cahi&code";
console.log(myyoutube_name)
console.log(anothername)

let myObj1={
    city :"Gaya",
    Name : "Harsh",
    email:"harshraj@gmail.com",
    phone: 4673836252425
}

let myObj2=myObj1;
console.log(myObj1)
console.log(myObj2)

//now we chnage some value of obje2 tht indicate to the object1 , it indicate the real value not the copy vlaue if i cant in obj2 (tht indicate to obje1), thta manuppulate the real value of the object1 data ; if we print the vlaue if obj1 and obj2 change appers in both boz real data is chnage or manupulated 

myObj2.city= "patna ";
console.log(myObj1)
console.log(myObj2)