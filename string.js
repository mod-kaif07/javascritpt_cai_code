const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value"); yeh tarika improper hn 

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);// we should use this way to insert and variable value between the printed vlaue 

const gameName = new String('hitesh-hc-com')

console.log(gameName[3]); // through this we can get the vlaue of string at particular index 





console.log(gameName.length);  //use to know the length of string 

console.log(gameName.toUpperCase()); // use to convert the string into upper case , smilerary use "console.log(gameName.toUpperCase())" to lower case the value ;


console.log(gameName.charAt(2)); // it help to know the value of at the at a particular idex 
console.log(gameName.indexOf('t'));// help to know the idex of that value 

const newString = gameName.substring(0, 4)//help to make substring form (lastindex to endindex), if you put -ve index it will take from 0 
console.log(newString);

const anotherString = gameName.slice(-8, 4)// it will slice the string if you put the -ve sign it give it take from 
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-')) //help to replace the vlaue 

console.log(url.includes('sundar'))// help to check the value it inclue or not in the string 

console.log(gameName.split('-'));// help to split the string based on parameter(anything) you passed  and make it the array