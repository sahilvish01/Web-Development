// JavaScript Rivision:

// JavaScript Variables 

// Constant

const c = 10;   // Initialize when declared

// c = 20;     // Cannot be reassigned


// Variables

{
    var v1 = 100;       // Globally Scoped 
}

console.log(v1);

{
    let v2 = 100;       // Locally Scoped
}

// console.log(v2);        // Cannot be accessed


// JavaScript Datatype

// There are 7 datatypes in Java

/*

1. number
2. String 
3. boolean
4. unsigned 
5. null 
6. BigInt
7. Symbol

*/

let var1 = 100;        // Number

console.log(var1);
console.log(typeof var1);

let var2 = "hello";       // String

console.log(var2);
console.log(typeof var2);

let var3 = null;          // null but type object

console.log(var3);
console.log(typeof var3);

let var4;                 // Unsigned

console.log(var4);
console.log(typeof var4);

let var5 = true;            // boolean

console.log(var5);
console.log(typeof var5);       

let var6 = Symbol("Yay");            // Symbol 

console.log(var6);
console.log(typeof var6);

let var7 = 10n;                 // BigInt

console.log(var7);
console.log(typeof var7);

const var8 =  BigInt("9431");           // Accepts String but only if it contains number
const var9 =  BigInt(100);
const var10 = BigInt(true);

console.log(var8);
console.log(typeof var8);

console.log(var9);
console.log(typeof var9);

console.log(var10);
console.log(typeof var10);


// Datatype Conversion:

// String to other datatypes
let var11 = "100";

console.log(var11);
console.log(typeof var11);


var12 = Number(var11);      // var12 = 100

console.log(var12);
console.log(typeof var12);


var13 = Boolean(var11);     // var13 = true

console.log(var13);
console.log(typeof var13);

var14 = Symbol(var11);      // var = Symbol(100)

console.log(var14);
console.log(typeof var14);

var15 = BigInt(var11);     // var15 = 100n

console.log(var15);
console.log(typeof var15);


// NaN 

let var16 = "hello";

let var17 = Number(var16);

console.log(var16);
console.log(var17);             // NaN


// Why String to Number Conversion 

console.log("1" + "1" + "1");           // 111

console.log(1 + "1" + "1");             // 111

console.log("1" + 1 + "1");             // 111

console.log("1" + "1" + 1);             // 111

console.log("1" + 1 + 1);               // 111

console.log(1 + "1" + 1);               // 111

console.log(1 + 1 + "1");               // 21


// This is why we have to covert number string into number datatype

// When there is already present number datatype to calculate but You have to print it with string so use brackets during calculation

// Example: 

console.log("Sum: " +  1 + 1);      // 11

console.log("Sum: " + (1 + 1));  

// Exponentiation Operator in Java

console.log(3**2);          // 3 ki power 2


// Strings in Java

// String Object
let friendname = "Keshav";

// Premitive String
let myname = "Sahil"; 
let marks = 100;

console.table([myname, marks]);


console.log("Hello I am " + myname + " and my marks is " + marks);

console.log(`Hello I am ${myname} and my marks is ${marks}`);               // Standard Way

// ${} -> String Interpolation

// Accessing the index 

console.log(myname.at(0));
console.log(myname[0]);
console.log(myname.charAt(0));


// Accessing the prototype of String

console.log(myname.__proto__);

// Uppercase and Lowercase

console.log(myname.toLowerCase());
console.log(myname.toUpperCase());

// Kisi bhi perticular character ka index access karne ke liye

let myname1 = "Saahil";

console.log(myname.indexOf('a'));       // Jis bhi first time par index aaya vahi index return karega


// String ko Array mein convert karna

let str1 = "In-my-mind-I-am-always-the-best";

console.log(str1.split('-'));


let str2 = "Hello";

// Substring and Slice

console.log(str2.substring(-4,4));          // Substring hai isliye negative ignore karke 0 se start karega
console.log(str2.slice(-4,4));              // Slice mein negative daalo to piche se utne index count karta hai then start karta hai


console.log(str2.slice(-1,1));              // Will print nothing

// Numbers in JavaScript 

// Premitive Number and Object

let num1 = 100;                 // Premitive

let num2 = new Number(100);     // Object


console.log(num1);
console.log(num2);

console.log(typeof num1);
console.log(typeof num2);


// Generally premitive ko lekar hi kaam karte hai hum kyuki aage premitive ko hi compare karne padta hai

// Object Number ka use karke practice karna bad practice hai

// Premitive number ka use karke ham object number ke saare functions use kar sakte hai, Premitive number internally object mein convert karke function call karta hai then function operate karne ke baad vapas se premitive number mein convert kar deta hai


// Number ko String mein convert karke String ki preoperty use karna 

        // Accessing Index
        console.log(num1.toString().charAt(0));
        console.log(num1.toString()[0]);

        // Finding Length
        console.log(num1.toString().length);

        // Convert into Array
        console.log(num1.toString().split(""));         // Character Arrat


// Decimal ke Baad kitni value show karni hai use fix karne ke liye

let num3 = 100.2342112;

console.log(num1.toFixed(2));       // Round off karke decimal ki 2 value baad tak show hoga

// Value ko precise karna

console.log(num3.toPrecision(5));       // Overall kitni digits ko precise karke show karna hai 


// Indian Standard mein number ko convert karne ke liye  

let num4 = 1000000000;

// by default indian hi hota hai
console.log(num4.toLocaleString());         // Number ko currency ki tarah show karna

// Forcefully convertion
console.log(num4.toLocaleString('en-IN'));

// Max and Min value of integer range

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

// Max and Min value

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);


/*

1. Modulus Nikalne ke liye number ka
2. Decimal ke baad jiske jyada Karib hai value us par round off karna 
3. Decimal value ko Ceiling value par round off karna 
4. Decimal value ko floor value par round off karna 
5. 0 - 1 ke bich Random values generate karna 
6. 11 - 20 ke bich Random Values generate karna 
7. General Formula

*/


// Kisi number ka modulus nikalane ke liye 

// Modulus:
console.log(Math.abs(-100));            // Output : 100

// Round off:
console.log(Math.round(10.228));
console.log(Math.round(10.838));

// Ceiling Value:
console.log(Math.ceil(10.228));
console.log(Math.ceil(10.838));

// Floor Value:
console.log(Math.floor(10.228));
console.log(Math.floor(10.838));


// 5. 0 - 1 ke bich Random values generate karna 

console.log(Math.random());                             // 1 include nahi rahega

console.log(Math.floor(Math.random()*10 + 1));          // 1 - 10 ke bich mein random number generate karne ke liye

console.log(Math.floor(Math.random()*10) + 11);         // 11 - 20 ke bich number generate karega including 20

console.log(Math.floor(Math.random()*10 + 21));         // 21 - 30 ke bich mein random number generate karne ke liye


// General Formula:

// Math.floor(Math.random()*range) + min value


let min = 100;
let max = 200;

console.log(Math.floor(Math.random()*(max-min)) + min);         // 100 se 200 ke bich value generate karegi


