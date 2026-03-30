console.log("String");

let name = "Sahil";
let marks = 100;

console.log("Name : " + name + "\nMarks : " + marks);

console.log(`Name : ${name} \nMarks : ${marks}`);   // Standard Way

// ${} : String Interpolation

let str = new String("Sahil");

console.log(str);

console.log(str[0]);

console.log(str.__proto__);

let str2 = str.__proto__;

console.log(str2);


// Uppercase and lowercase:

console.log(str.toUpperCase());

console.table([name,marks,str]);

console.log(name[0]);

console.log(str.charAt(1));

console.log(str.indexOf('a'));

let str1 = "https-hello-kaise-ho.com"

console.log(str1.split("-"));

let arrstr1 = str1.split("-");

console.log(arrstr1);
console.log(typeof arrstr1);

console.log(arrstr1[0]);

console.log(str.charCodeAt(1));     // 'a' ki ascii value

// .charCodeAt() -> ye string ke kisi bhi character ki ascii value return karta hai

let index = "012345678"

console.log(index.substring(0,4));
console.log(index.substring(-6,4));

// Isme -ve index pass karne par use avoid karke 0 se start kar deta hai



console.log(index.slice(0,4));     
console.log(index.slice(-6,4));     

// last index se 6 index piche karke jis index par aa raha hai vaha se 4th(means first 4 index) tak


