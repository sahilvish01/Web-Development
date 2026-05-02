// Object Destructure and JSON API

// Destructure the object

let obj = {

    coursename : "JavaScript",
    lenguage : "Hindi",
    price : "Free"

}

// console.log(coursename);    // Cannot access Directly

console.log(obj.coursename);

// 1st Way: 

let {coursename} = obj;     // Destructuring the object

console.log(coursename);    // Without using dot operator

// 2nd Way

let {coursename : course} = obj;    // Destructure the object and give name according to you

console.log(course);


// Basics of JSON 

// JSON = JavaScript Object Notation

// JSON file mein comments allowed nahi hote hai 


// Example :

// {
//     "Name" : "Sahil",
//     "Marks" : 100
// }

// OR

// [
//     {},
//     {},
//     {}
// ]


// Puri JSON file ek hi root element mein wrap up hoti hai => {} or []



// Second object
let obj1 = {

    coursename : "JavaScript Obj1",
    lenguage : "Hindi",
    price : "Free"

}


console.log(obj1.coursename);

// Cannot give the same name
let {coursename : course1} = obj1;

console.log(course1);

