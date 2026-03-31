// Javascript Rivision

console.log("Datatypes");

// 7 Datatypes :

/*
    1. number -> 2^53 around
    2. string -> ""
    3. boolean -> true/false
    4. BigInt 
    5. Symbol
    6. undefined
    7. null
*/


let a =100;

console.log(a);
console.log(typeof a);

let b;  //By default undefined

console.log(b);
console.log(typeof b);

let c = "Sahil";

console.log(c);
console.log(typeof c);

let d = null;   // type object

console.log(d);
console.log(typeof d);

let e = true;

console.log(e);
console.log(typeof e);


// Datatype Conversion

let var1 = "100";

console.log(var1);
console.log(typeof var1);

let var2 = Number(var1);

console.log(var2);
console.log(typeof var2);

let var3 = Boolean(var2);   //  Agar non zero ya non empty hai to true otherwise false

console.log(var3);
console.log(typeof var3);

let var4 = String(var3);

console.log(var4);
console.log(typeof var4);

let var5 = Number(var4);    // Jab kisi non number string ka conversion number type data mein karo to NaN asign ho jata hai

console.log(var5);
console.log(typeof var5);

// NaN : Not a Number(NaN) means number datatype ke variable mein number store nahi kiya hai

let var6 = String(var5);

console.log(var6);
console.log(typeof var6);

let var7 = Boolean(var5);   // NaN -> false (Boolean)

console.log(var7);
console.log(typeof var7);

let var8 = Number(var7);    // true -> 1 or NonZero    false -> 0

console.log(var8);
console.log(typeof var8);


// Why Stirng to Number converion

console.log(2 + 2);

console.log("2" + 2);

console.log(2 + "2");

console.log("2" + 2 + 2);

console.log(2 + 2 + "2");

console.log(2 + "2" + 2);

console.log("" + 2 + 2 + 2);


// Conclusion : Jaha par bhi String aati hai uske baad se saare + string concatination karne lagte hai instead of addition

// Solution : 
// 1. Agar koi number stirng mein hai to use number mein convert karo
// 2. Brackets ka use karo for gaining higher precedence and calculation

let num = "100";

num = Number(num);

console.log("Sum : " + (num + 2 + 2));


// Operators in Javascript : 

console.log(2+2);   // Addition
console.log(2-2);   // Substraction
console.log(2*2);   // Multiplication 
console.log(2/2);   // Division
console.log(2%2);   // Modulus
console.log(2**2);  // Exponentiation

// Strings :

console.log("Strings");

let name = "Sahil";
let marks = 100;

console.log("Name : " + name + "\nMarks : " + marks);

console.log(`Name : ${name} \nMarks : ${marks}`);   // Standard way

// ${} : String Interpolation

console.table([name,marks]);

let str = new String("Sahil");

console.table(str);
console.table([str]);
console.table([str,name,marks]);

console.log(str[0]);
console.log(str.at(0));

console.log(name[0]);
console.log(name.at(0));

console.log(str.__proto__);

console.log(str.toUpperCase());
console.log(str.toLowerCase());

let ex = "Example-hai-ye-jo-bhi-likha-hai";

console.log(ex.charAt(1));
console.log(ex.indexOf('x'));

let str1 = ex.split("-");   // String ko Array mein convert karne ke liye

console.log(str1);

console.log(name[0]);

let ex1 = "Example";

console.log(ex1.substring(-5,4));   // Isme -ve value se start kaor to avoid karke 0 se start hota hai 

console.log(ex1.slice(-5,4));   // Isme -ve value se start karo last index se utni value piche count karke jis index par aata hai vaha se start karta hai

// substring() and slice() : Dono starting index include karenge aur last index include nahi karega (last wala as size work karega)
