const jsuser = {
    name : "sudeep",
    "fullname" : "sudeepgowda",
    age : 22,
    location : "jaipur",
    email : "sudeep@gmail.com",
    isLoggedIn : false
}

// console.log(jsuser);
console.log(jsuser["fullname"]);

jsuser.email = "sudeep@chatgpt.com"
// Object.freeze(jsuser)
jsuser.email = "sudeep@facebook.com"
console.log(jsuser);

jsuser.greeting = function(){
    console.log("Hello user");
}

jsuser.greetingtwo = function(){
    console.log(`Hello ${this.name}`);
}

console.log(jsuser.greeting());
console.log(jsuser.greetingtwo());