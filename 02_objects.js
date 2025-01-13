// const tinderUser = new Object()  //it is singleton object
const tinderUser = {}// it is non sigleton object 

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

const obj3 = { obj1, obj2 }// retuen one object but in one object it give mutiple object 
console.log(obj3);
const objz = Object.assign({}, obj1, obj2, obj4)
//help to merge the obj and relturn the only one obj
console.log(objz);

 objx = {...obj1, ...obj2,...obj4} // we called spredout finction so it will work same as assign function 
 console.log(objx);



const users = [//here we create mutiple user 
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "h@gmail.com"
    },
    {
        id: 3,
        email: "h@gmail.com"
    },
]

users[1].email 
console.log(tinderUser);//it will display all the key and value 

console.log(Object.keys(tinderUser));//it will display  only key 
console.log(Object.values(tinderUser));//it will display only value of key
console.log(Object.entries(tinderUser)); // it will display all the key value pair make it in sub array format 

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]
