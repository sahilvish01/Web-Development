// Array Part-2 : 
console.log("Array Part - 2");

// Array ko array mein push karne ke liye 

const arr1 = [2,4,8,4,9,1];
const arr2 = [9,4,5];

console.log(arr1);
console.log(arr2);

arr1.push(arr2);

console.log(arr1);

// Do array ko merge karne ke liye :
let arr3 = [3,4,9,2,3];
let arr4 = [2,6,8,2,1];

console.log(arr3);
console.log(arr4);


// 1st way concatnation
console.log(arr3.concat(arr4));

// 2nd way spread :  
console.log([...arr3,...arr4]);


// Multi Dimensional array ko 1D mein convert karne ke liye :
const arr5 = [1,4,5,[1,2,4],3,6,8,[2,4,[24,5,3]]]
console.log(arr5);


console.log(arr5.flat(Infinity));


// Check Array or Not : 
console.log(Array.isArray(arr5));   // -> True

console.log(Array.isArray(5));  // -> False

// To convert Sring into array :
console.log(Array.from("Sahil"));

console.log(Array.of(1,24,5,63,0,2,4,5));

