// Javascript Maths

/*

1. Modulus Nikalne ke liye number ka
2. Decimal ke baad jiske jyada Karib hai value us par round off karna 
3. Decimal value ko Ceiling value par round off karna 
4. Decimal value ko floor value par round off karna 
5. 0 - 1 ke bich Random values generate karna 
6. 10 - 20 ke bich Random Values generate karna 
7. General Formula

*/

const neg = -100;
const dec = 100.6794963;

console.log(Math.abs(neg));     // Modulus Nikalta hai
console.log(Math.round(dec));   // Round of karna jaha jyada karib hai
console.log(Math.floor(dec));   // Decimal value ko Floor value par round off karna
console.log(Math.ceil(dec));    // Decimal value ko ceiling value par round off


console.log(Math.random()); // 0 - 0.999999999999 -> Randomly pick karega, 1 ko include nahi karta hai

console.log(Math.floor(Math.random()*10) + 1);      // 1 - 10

console.log(Math.floor(Math.random()*10) + 11);     // 11 - 20

console.log(Math.floor(Math.random()*10) + 21);     // 21 - 30

/*

0.0 *10 = 0 +1 = 1
0.1 *10 = 1 +1 = 2
0.2 *10 = 2 +1 = 3
0.3 *10 = 3 +1 = 4
0.4 *10 = 4 +1 = 5
0.5 *10 = 5 +1 = 6
0.6 *10 = 6 +1 = 7
0.7 *10 = 7 +1 = 8
0.8 *10 = 8 +1 = 9
0.9 *10 = 9 +1 = 10


*/

// General Formula : Range ke bich random ke liye

let max = 10, min = 5;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);


/*

Aise nahi hota hai : 

0.0*6 = 0 + 5 = 5
0.1*6 = 0 + 5 = 5
0.2*6 = 1 + 5 = 6
0.3*6 = 1 + 5 = 6
0.4*6 = 2 + 5 = 7
0.5*6 = 3 + 5 = 8
0.6*6 = 3 + 5 = 8
0.7*6 = 4 + 5 = 9
0.8*6 = 4 + 5 = 9
0.9*6 = 5 + 5 = 10


Aise hota hai :

(0.0 - 0.1...)*6 -> 0 = 0 + 5 = 5
(0.2 - 0.3...)*6 -> 1 = 1 + 5 = 6
(0.4 - 0.49..)*6 -> 2 = 2 + 5 = 7 
(0.5 - 0.6...)*6 -> 3 = 3 + 5 = 8
(0.7 - 0.8...)*6 -> 4 = 4 + 5 = 9
(0.9 - 0.99..)*6 -> 5 = 5 + 5 = 10

Probabilty for each number is 1/6 here

*/