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
console.log(loginUserMessage("Sammy"));
