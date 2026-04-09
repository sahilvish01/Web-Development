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

// Declararion of Array : 
const arr1 = [2,4,7,8,9];

for(const i in arr1)
{    
    console.log(arr1[i]);
}

console.log();
const arr2 = new Array(8,1,3,4,4)

for(const i in arr2)
{
    console.log(arr2[i]);
}

console.log(arr1);
console.log(arr2);

console.log(typeof arr1);
console.log(typeof arr2);


// Accessing element of array :
console.log(arr1[1])
console.log(arr2[1])

console.log(arr1.at(4));
console.log(arr2.at(5));    // Last index se aage undefined hai


// Shallow Copy : Jiski copy aisi banti ho, uss copy mein changes karne par real data mein bhi changes honge

// Deep Copy : Jiski copy aisi banti ho, uss copy mein change karne se real data par koi fark nahi padta hai

// Array mein value ko push karne ke liye : 

console.log(arr1);
arr1.push(10);
arr1.push(11);

console.log(arr1);


const arr3 = ["Sahil", 100];
const arr4 = arr3;

arr4.rname = "Keshav";

console.log(arr3);
console.log(arr4);

let arr5 = ["John", 100];

let arr6 = arr5;

arr6.push(20);

// arr6[age] = 20;

console.log(arr5);
console.log(arr6);

// Array apni shallow copy create karti hai, iska matlab ek hi referance hota hai

// Array se element mein pop karne ke liye : 

const arr7 = [7,3,6,1,3,6]

console.log(arr7);

arr7.pop();
arr7.pop();
arr7.pop();

console.log(arr7);

// Push or Pop, Element ke last se element ko add ya delete karte hai


// Array ke front se Element ko insert karne ke liye : 

arr7.unshift(10);
arr7.unshift(5);
arr7.unshift(17);

console.log(arr7);


// Array ke front se Element ko delete karne ke liye :

arr7.shift();
arr7.shift();
arr7.shift();

console.log(arr7);

// Check karna ki Array mein perticuler element exist karta hai ya nahi

console.log(arr7.includes(12));     // false
console.log(arr7.includes(3));      // true


// Kisi element ka index check karne ke liye : 

console.log(arr7.indexOf(12));      // -1 because the element is not present
console.log(arr7.indexOf(3));       // 1 because present at index 1

// Array kon string mein convert karne ke liye aur saare elements ke join mein bhi kuch laga sakte hai
// arr7.join();

console.log(arr7.join('-'));

// Slice and Splice mein differance : 
const arr8 = [2,5,6,8,3,7,1,4];

const arr9 = arr8.slice(0,3);

console.log(`Slice Array : ${arr9}`);
console.log(`Real Array : ${arr8}`);

// Slice : Slice karne mein Starting jo index paas kiya use include karta hai aur last wale ko include nahi karta hai
            // IMP : Slice array real array ko modify nahi karta hai;

const arr10 = arr8.splice(0,3);

console.log(`Splice Array : ${arr10}`);
console.log(`Real Array : ${arr8}`);

// Splice : Splice karne par Starting aur Last to index ko include karta hai 
            //  IMP : Splice function real array ko modeify kar deta hai, jo index splice mein pass karo utna array, real array se delete hi kar deta hai splice 


// Array ko array mein push karne ke liye : 

const arr11= [9,57,32,4];

arr11.push(arr10);

console.log(arr11);
