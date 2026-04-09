console.log("Rivision");

// Variable :
console.log("Variable");

{
    var v1 = 10;
}

console.log(v1);


{
    let v2 = 20;
}

// console.log(v2);    // Not allowed

const c = 100;  // It is constant and cannot change

// console.log(++c);   // Not allowed


console.log("Datatypes");
// 7 Premitive Datatypes : 

/*

1. number
2. string
3. boolean
4. symbol
5. undefined
6. null
7. BigInt

*/

const num1 = "Sahil";     // Premitive String

const num2 = new Number("Sahil");    // Object


// Object type banane ki jarurat itni nahi hoti hai kyuki ham compare premetive data se hi karate hai har data ko

// Premitive data type mein bhi object ke function use kar sakte hai

// Jab premitive data se object ke function call karo to JavaScript internally use object mein convert karke function perform karta hai aur perform hone ke baad fir se use premitive mein convert kar deta hai

let v3;     // undefined only declared 

console.log(typeof v3);

console.log(typeof 100);
console.log(typeof "100");
console.log(typeof true);
console.log(typeof null);   // typeof null is object


console.log(v3);


// Type Conversion :
console.log("Type Conversion");

let var1 = 100; 
let var2 = String(var1);

console.log(typeof var1);
console.log(typeof var2);

let var3 = "Sahil"; 
let var4 = Number(var3);

console.log(typeof var3);
console.log(typeof var4);

console.log(var4);  //NaN

// NaN : Not a Number, jab kisi number type ke variable mein number variable na ho

let var5 = Boolean(0);  //false
let var6 = Boolean(1);  //true

console.table([var5,var6]);

// Agar nonzero number ya non empty ko string ko boolean mein convert karte hai to true convert hota hai otherwise false


console.log("Why String to Number");
// Why String to Number : 

console.log(2 + "2");
console.log("2" + 2);
console.log("2" + 2 + 2);
console.log(2 + "2" + 2);
console.log(2 + 2 + "2");

// Conclusion : Jab bhi string aati hai to uske baad ke saare "+" concatination ke jaise behave karne lagte hai 

// Solution :
/*
    1. Convert a string that contain number to number type before any operation
    2. Use Brackets for gaining higher precedance during operation
*/

let var7 = "10";

var7 = Number(var7);

console.log("Demo : " + (var7 + 2));


// Opeertars :
console.log("Operators");

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2/2);
console.log(2%2);
console.log(2**2);


// Strings : 
console.log("Strings");

let name = "Sahil";
let marks = 100;

console.log("Name : " + name + "\nMarks : " + marks);

console.log(`Name : ${name} \nMarks : ${marks}`);       // Standard way

// ${} : String Interpolation

let str1 = new String("Sahil");     // String Object
let str2 = "Sahil";
console.table(str1);

// String Object ka use karna bad practice hai kyuki ham compare premitive data se hi karayenge

// Premitive string, string ke saare functions use kar sakta hai, jab premitive string function ko call karta hai to JavaScript ise internally object mein convert kar deta hai then function ka kaam ho jaane ke baad fir se Premitive mein convert kar deti hai


// Accessing Characters of String :

console.log(str1.at(0));
console.log(str1[0]);


// Accessing Prototype of String :

console.log(str1.__proto__);
console.log(str2.__proto__);


// Uppercase and Lowercase : 

console.log(str1.toUpperCase());
console.log(str1.toLowerCase());

// Character Access karne ke liye perticuler index par :

console.log(str1.charAt(0));


// Index Access karne ke liye perticuler character ka

console.log(str1.indexOf('a'));

let str3 = "Saahil";

console.log(str3.indexOf('a'));     // first time jis index par aaya hoga voh return

// String ko Array mein convert karne ke liye :

let str4 = "he-he-hi-hello-bye-good-bye";


console.log(str4.split("-"));

// Sustring and Slice :

console.log(str3.slice(-4,4));      // Slice mein -ve se agar index ko start karo to vah last place se utni value count karke vaha se start karega 

console.log(str3.substring(-4,4));   // Substring mein kyuki ye substring hai isliye -ve index se starting ko ignore kar deta hai aur 0 se start kar deta hai



// Numbers in JavaScript 
console.log("Numebers in JavaScript");

// Premitive Number :
let n1 = 100;

// Object :
let n2 = new Number(100);


console.log(n1);

console.log(n2);

console.log(n1.toString().length);

// Generally ham premitive number ko hi lekar kaam karte hai kyuki hame Premitive number ko hi aage compeare karana hota hai 

// Object ko lekar kaam karna bad practice hai 

// Premitive number ke through object ke function call kar sakte hai, Jab ham aisa karte hai to JavaScript, premitive number ko internally object mein convert karta hai function perform karta hai aur function ka kaam ho jaane ke baad use fir se premitive number mein convert kar deta hai


// Check Type
console.log(typeof n1);
console.log(typeof n2);

// String mein convert karke string ki property use karna
// 1. Accessing Index :
console.log(n1.toString().at(1));       // index 1 par jo value hai
console.log(n1.toString()[1]);          // index 1 par jo value hai

// 2. Length :
console.log(n1.toString().length);

// 3. Convert into array :
let arr1 = n1.toString().split("");

console.log(arr1);  // Cahracter Array

arr1 = Number(arr1);    // Can not convert into Number array on this way

console.log(arr1);  // NaN 


// Decimal ke baad kitni values show karna hai iske liye :

let n3 = 100.1234567;

console.log(n3.toFixed(2));

// Aage ke kuch ko Precise karne ke liye 

console.log(n3.toPrecision(3));

// Indian Standards mein number ko convert karne ke liye 

const hundred = 10000000000;

console.log(hundred.toLocaleString('en-IN'));

// MAX VALUE and MIN VALUE of INT

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

// MAX VALUE and MIN VALUE of Number

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);


// JavaScript Maths : 

// Modulus :
console.log(Math.abs(-100));

// Round Off
console.log(Math.round(100.47539));
console.log(Math.round(100.7539));

// Ceiling Value :
console.log(Math.ceil(10.999));

// Floor Value :
console.log(Math.floor(10.0001));

// Random Value Generate from 0 - 1 (1 not include)
console.log(Math.random());

// Random Value Generator from 1 - 10
console.log(Math.random()*10 + 1);

// Random Value Generator from 11 - 20
console.log(Math.random()*10 + 11);

// Random Value Generator 21 - 30
console.log(Math.random()*10 + 21);


// General fromula to generate a random number between any range min to max

let min = 5;
let max = 10;

console.log((Math.random()*(max - min + 1)) + min);

// Math.random()*range + minimum