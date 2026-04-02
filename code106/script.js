// Numbers in JavaScript :
console.log("Numbers in JavaScript");

// Premitive Number 
const var1 = 100.5894095;
// Object
const var2 = new Number(100.5894095);   // Bad Practice


// Generaly Premitive Number ko hi use mein lete hai because ham input mein number ko lekar compare karte hai 

console.log(var1);
console.log(var2);

console.log(typeof var1);
console.log(typeof var2);


console.log(var1.toString.length)
console.log(var2.toString.length)

console.log(var1);
console.log(var1.toFixed(2));

console.log(var1.toPrecision(3));

const hundreds = 10000000;

console.log(hundreds.toLocaleString())  // By default : en-IN (Indian Standards)
console.log(hundreds.toLocaleString())

console.log(Number.MIN_VALUE)
console.log(Number.MAX_VALUE)

console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MIN_SAFE_INTEGER)


console.log("Conclusion");

// Conclusion :

// .toFixed(2) : Batana ki decimal ke baad kitni value tak show karna hai 
// .toString() : Kuch String ki property ko access karne ke liye 
// .toPrecision() : Decimal ki pahle ki values ko round off karke precise kar deta hai
// .toLocalString('en-IN') : Coma laga kar jaise amount show hota hai alag country mein kar sakta hai