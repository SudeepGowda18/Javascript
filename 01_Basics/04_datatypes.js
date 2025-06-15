// Primitive

// 7 Types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

// Reference Types (Non Primitves)

// Arrays, Objects, Functions

const id = Symbol('123')
const anotherid = Symbol('123')

console.log(id);
console.log(anotherid);
console.log(id === anotherid);

const myFunx = function() {
    console.log("Hello There");
}

let userOne = {
    email : "sudeep@gmail.com",
    upi : "456%vtg"
}

let usertwo = userOne;

usertwo.email = "sudeep2ndmail"

console.log(userOne.email);
console.log(usertwo.email);

console.log(userOne);
