// singleton
// Object.create

// object literals

const mySym = Symbol("key1") // to define the symabol we havt to inilise first 


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1", // always in [] 
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
    // we can also add a array in an object 

}

//**********here what i understand **************************************
const id= Symbol(11234);
const byy= Symbol("key");

let obj={
    name : "kaif ",
  "nick name ":"Sonu",
  emil:"abc@gmail.com",
  phone:"536252542",
  [id]:"my key 1",
  [byy]:"it will refected to non symbol",
}
console.log(obj)
obj["nick name "]="sinu";
console.log(obj)
Object.freeze(obj);
obj.emil="xyz@gmail.com";
console.log(obj)

//**********here what i understand end  for my understanding  **************************************

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser) // afetr freeze no change occur in the onjecr data , not anything ia addee or deleted
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}
console.log(JsUser) // we can also add a function in an object 

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());