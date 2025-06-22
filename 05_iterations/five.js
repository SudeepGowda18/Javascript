const myNum = [1,2,5,4]

const myTot = myNum.reduce((acc,currval)=>{
    console.log(`Acc: ${acc} and currval: ${currval}`);
    return acc + currval
},1)

console.log(myTot);


const shoppingCart = [
{
    itemname:"js course",
    price:500
},
{
    itemname:"java course",
    price:100
},
{
    itemname:"python course",
    price:400
},
]

const totalVal = shoppingCart.reduce((acc, currval) =>{
    return acc + currval.price
}, 0)

console.log(totalVal);
