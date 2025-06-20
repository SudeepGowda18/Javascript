const arr = [1,2,3,4,5,6]

for(const num of arr){
    // console.log(num);
}

const greetings = "Hello Sudeep"
for(const greet of greetings){
    // console.log(`Each char is : ${greet}`);
}

const map = new Map();
map.set('In','India')
map.set('Usa','United States of America')
map.set('Fr','France')

// console.log(map);

const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for(const key in myObject){
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js","rb","py","java","cpp"]

for(const key of programming){
    console.log(key);
    
}