// Execution Context and Hoisting

// Phase 1: Memory Allocation
// Phase 2: Code Execution Phase

// In Memory Creation Phase

// Normal Function = Body of function
// var = undefined
// let & const = <unintialized> (Temporal Dead Zone)



console.log(var1);      // undefined
var var1 = 10;


sayHello();             // Normal Function can be called
function sayHello()
{
    console.log("Hello");
}


// console.log(var2);      // Cannot access before initialization
let var2 = 10;

// console.log(var3);          // Cannot access before initialization
const var3 = 10;


// Function Expression: 

// sayHii();                       // sayHii is not a function because it is assigned undefined right now
var sayHii = function() 
{
    console.log("Hii");
}


// Arrow Function:

// sayBye();                           // sayHii is not a function because it is assigned undefined right now
var sayBye = () => 
{
    console.log("Bye");
}