const user = {
    username: "sudeep",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// const chai = function chai(){
//     let username = "sudeep"
//     console.log(this.username);
// }

// const chai = () => {
//     let username = "sudeep"
//     console.log(this.username);
// }

// const addTwo = (num1, num2)=>{
//     return num1 + num2;
// }
// const addTwo = (num1, num2)=> num1 + num2;
// const addTwo = (num1, num2)=> (num1 + num2);
const addTwo = (num1, num2)=> ({username : "sudeep"});

console.log(addTwo(1,7));
