obj1={
    Name :"kaif ",
    idno:"4483922",
    postion:"student",
    welcomeMessage:function (){
        console.log(`${this.Name},wlecome to the collage`)
        console.log(this)

    }
}

// obj1.welcomeMessage()
// obj1.Name= "saif";
// obj1.welcomeMessage()
// console.log(this)

function chai(){
    username="siaf";
    console.log(this.username)
}
chai();