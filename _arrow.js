const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()

// console.log(this);//nothing in global varivale so it give {} 

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

const chai = function () {
    let username = "hitesh"
    console.log(this);
    //kisi vi function key andar "this.anything" karte hn wo undefined deta hn  sif "this" use karne par sare function  show karta hn   
}
chai()

// const chai1 =  () => {
//     let username = "hitesh"
//     console.log(this);
//     //but in arrow function andar humlog na this function use karne par {} empty object milta hn
// }
// chai1()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()