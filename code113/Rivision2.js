// JavaScript Array Rivision

// Array : 

/*

1. Theory Definition
2. Declaration normally and using new keyword
3. Accessing the elements of array
4. Shallow copy vs Deep Copy
5. Push Method 
6. Pop Method
7. Array ke front mein value ko add karne ke liye
8. Array ke front se value ko delete karne ke liye 
9. Check karo ki koi value array mein exist karti hai ya nahi
10. Kisi Element ka index check karne ke liye 
11. Kisi Array ko String mein convert karne ke liye 
12. slice and splice mein differance
13. Array ko array mein push karne ke liye 

*/



// Real Definition of Array : Array is the collection of elements having simillar datatype and all the elements of the array is allocated in contigeous memory location, Each and every element of array can be accessed by its index value and also array has one name

// Propeties of Array:
/*

1. All the elements are Itendified by one variable name
2. All the elements are allocated in sequencial memory location
3. The type of all the elements are simillar 
4. Each and every elements can be accessed by its index value

*/

// JavaScript array actual mein array hoti hi nahi hai ye internally object se hi implement huyi hoti, Ise developers ki help ke liye banaya gaya

// JavaScript Array, Actual Array ki definition ko hi break karta hai :

// 1. Isme element kisi bhi type ke aa sakte hai 
// 2. Jab Array ke elements ka datatype simillar ho aur contigeous memory location exist karti ho tab -> Ye contigeous memory location mein element ko store karega
// otherwise -> Elements bhi random memory location mein store karega

// Declaration of Array:

let arr1 = [1,2,4,6];

// Declaration using Array constructor 

let arr2 = Array(1,2,8,5,4);
let arr3 = new Array(1,2,8,5,4);

console.log(arr2);

console.log(arr3);

// Dono way ek dum correct hai but ham Array constructor se array banana avoid karte hai

// kyuki jab ek hi value ka array banana ho, tab Array constructor mein ek value paas karne par Array constructor use array ki length samajhta hai aur utni length ka ek empty array bana deta hai.

// Example

let arr4 = Array(5);

console.log(arr4);

// Accessing the element of array

console.log(arr2[0]);
console.log(arr2.at(0));

console.log(arr4.at(0));        // Undefined


// Array ko kisi function mein paas karne par voh apni shallow copy paas karta hai (Pass by referance)

// Shallow Copy: Shallow copy means Same referance create karna

// Deep copy: Deep copy means same array ko kisi aur array mein copy bana kar hi fir 

// Array ke last se push and pop

console.log(arr2);

arr2.push(10);
console.log(arr2);

arr2.pop();
console.log(arr2);

// Array ke front mein element push 

arr2.unshift(10);
console.log(arr2);

// Array ke front se pop

arr2.shift();
console.log(arr2);

// Check karo Array mein value exist karti hai ya nahi

console.log(arr2.includes(1));


// String -> Array ==> .split()
// Array -> String ==> .join()

// Kisi elements ka index check karne ke liye 
console.log(arr2.indexOf(8));

// Slice and splice 

// slice(): slice kisi bhi array ka subarray create karne mein help karta hai, first index include karta hai aur second jo index paas karte hai use include nahi karta hai, Ye real array ko modify nahi karta hai

// slice(start index, END index)

arr5 = arr2.slice(1,3);         // last index consider nahi karta

console.log(arr2);
console.log(arr5);


// splice(): splice bhi kisi bhi array ka subarray create karta hai aur first and second dono index ko include karta hai, But the main thing ye real array ko bhi modify kar deta hai

// splice(start index, Delete count)

arr6 = arr2.splice(1,3);

console.log(arr6);
console.log(arr2);


// Pushing array inside the array 

let arr7 = [2,4,6,7,8,9];

// 1st way
let arr8 = [7,8,4,arr7];

console.log(arr8);


// 2nd way
let arr9 = [12,56,7,3,2];
arr9.push(arr7);

console.log(arr9);
