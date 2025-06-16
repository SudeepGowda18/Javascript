// const tinderuser = new Object();
const tinderuser = {}
// console.log(tinderuser);

tinderuser.id = 123
tinderuser.name = "Sammy"
tinderuser.isLoggedIn = false
// console.log(tinderuser);

const regularUser = {
    email: "sudeep@gmail.com",
    fullname : {
        userfullname : {
        firstname: "sudeep",
        lastname: "gowda"
    }
}
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a", 2: "b"}
const obj2 = {3:"c", 4: "d"}
// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const user = [
    {},
    {},
    {}
]

user[1].email