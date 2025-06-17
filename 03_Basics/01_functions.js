function sayMyName(){
    console.log("S");
    console.log("U");
    console.log("D");
    console.log("E");
    console.log("E");
    console.log("P");
}

// sayMyName()

function addTwoNumbers(num1, num2){
    return num1 + num2
}

const result = addTwoNumbers(5,4);

// console.log(result);

function loginUserMessage(username = "Sudi"){
    if(!username){
        console.log("Please Enter a Username");
        return
    }
    return `${username} logged in`
}

// console.log(loginUserMessage());
// console.log(loginUserMessage("Sammy"));

function calculateCartPrice(...num){
    return num
}

// console.log(calculateCartPrice(100,200,300,400));

const user = {
    username : "Sudeep",
    price : 1000
}

function handleObject(anyObject){
    // console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user)
handleObject({
    username: "sudeep",
    price:1500
})

const mynewarray = [200,400,600]

function returnSecondVal(getarray){
    return getarray[1]
}

// console.log(returnSecondVal(mynewarray));
console.log(returnSecondVal([500,1000,1500]));
