  const  coding = ["js","java","ruby","python","cpp"]

//   const values = coding.forEach((item)=>{
//     // console.log(item);
//     return item;
//   })

//   console.log(values);

const nums = [1,2,3,4,5,6,7,8,9]

// const newNum = nums.filter((num) => {
//     return num > 4
// })
// console.log(newNum);

// const newNum = []
 
// nums.forEach((num) =>{
//     if(num > 5){
//         newNum.push(num)
//     }
// })

// nums.forEach((n1) =>{
//     if(n1 > 6){
//         newNum.push(n1)
//     }
// })

// console.log(newNum)

const myNum = [1,2,3,4,5,6,7,8,9]

// const newNum = myNum.map((num) => {
//      num + 10
// })
// const newNum = myNum.map((num) => 
//      num + 10
// )

const newNum = myNum
    .map((num) => num * 10)
    .map((num) => num + 1)
    .filter((num) => num >= 35)

console.log(newNum);
