// IIFE (Immediately invoked function expression)

(function chai(){
    console.log(`DB CONNECTED`);    
})();

((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('Sudeep')