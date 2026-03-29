// Practice JavaScript

let str = "Hello " + 100 + 100;

console.log(str);

console.log(typeof(str));

const c = 100;

// c = 10;     //Not Possible

const obj = {
    name : "John",
    marks : 100
}

obj.salary = 100000000;

console.log(obj);


// obj jo hai, voh ek referance hai jo memory ko point kar raha hai
// obj ko const karne par usme jo address hai use change nahi kar skate 
// but us memory mein jo data hai usse change ya modify kar sakte hai

// Strictly modification rokne ke liye

Object.freeze(obj);

obj.new = 100000000;

console.log(obj);

