// Array Part 2
console.log("Array Part 2");


// Pushing Array inside the array
const arr1 = [3,5,2,4,6,3,3];
const arr2 = [3,7,3,4,5];

arr1.push(arr2);

console.log(arr1);

const arr3 = [2,4,3,5,6,3];
const arr4 = [8,4,2,5,7,4];


// Merging two arrays

// 1st way : Concatination
console.log(arr3.concat(arr4));

// 2nd way : Spread
console.log([...arr3,...arr4]);


// Multidimensional array ko 1D array mein convert karne ke liye
const arr = [1,2,5,3,2,4,[3,4],3,[3,5,7,[3,5,8,[3,3,[3,3,2,45,5]]]]]

console.log(arr.flat(Infinity));


// Check karne ke liye array hai ya nahi :
console.log(Array.isArray(arr4));   // -> True
console.log(Array.isArray(10));     // -> False


// Kisi bhi string ko array mein convert karne ke liye :
console.log(Array.from("Sahil"));

// Creating Array using Function :
let arrname = Array.of('S', 'A', 'H', 'I', 'L');
console.log(arrname);

// Kisi bhi Array ko String mein convert karne ke liye :
console.log(arrname.join());

