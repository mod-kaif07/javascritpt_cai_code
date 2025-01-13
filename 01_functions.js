
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()//calling the function

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){//if user doesnt give any argument then  defaut value is  sam 
    if(!username){ //heare it check the is unsername = notdefined or false 
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage())// output "sam just logged in"
console.log(loginUserMessage("hitesh"))//output"hitesh just logged in"


function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

//how to handle object  in fnction 

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})


//how to handle array in fnction 
const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));



// ****************** here is my understnding88********************
const user1={
    Name:"shanhnawaz",
    total_price:"199",
    Phone_no:"6839202822002",

}
const user2={
    Name:"Harsh",
    total_price:"299",
    Phone_no:"700221822002",
    
}
const user3={
    Name:"Saif ",
    total_price:"999",
    Phone_no:"8210367104",
    
}

function handleobj (anyobject){
 console.log(`Thank you ${anyobject.Name} to part of v2 ,your total price is ${anyobject.total_price}`);
}
handleobj(user3);