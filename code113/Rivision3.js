// JavaScript Array Rivision Part 2

// Array ko Array mein push karne ke liye 

let arr1 = [10,2,4,2,3];

let arr2 = [2,3,4,5,4];

arr2.push(arr1);

console.log(arr2);

// Do array ko merge karna

let arr3 = [2,52,4,5,2];


// 1st way: Spread Method
let arr4 = [...arr1,...arr3];

console.log(arr4);

// 2nd way: Concat Method
let arr5 = [3,45,2,21,1];

console.log(arr5.concat(arr1));

console.log(arr5);

// Spread Method: Real array mein modify karta hai

// Concat method: Real Array mein modify nahi karta hai



// Multi dimension array ko 1D array mein convert karna 

let arr6 = [1,4,5,[1,2,4],3,6,8,[2,4,[24,5,3]]];

console.log(arr6.flat(Infinity));


console.log(arr6);


// flat(Infinity): Multi Dimension array ko 1D array mein convert karta hai and Real array mein modify nahi karta hai 



// Array Method 

    // 1. Check Array or not
    console.log(Array.isArray(arr6));

    console.log(Array.isArray(8));

    // 2. To convert string into a array 

    console.log(Array.from("Sahil"));

    // 3. To create a array of elements

    console.log(Array.of(1,3,4,2,1));
    


// Kisi bhi array ko string mein convert 


console.log(arr5.join());

console.log(arr5);

// .join() -> Real array mein modify nahi karta hai