// Execution Context and hoisting Rivision

// 1. Memory Creation Phase 
// 2. Code Execution Phase

// Memory Creation Phase: 

// var: undefined
// let: <unitialized> (Temporal Dead Zone)
// Normal Function: Function Body
// Arrow function and function Expression ko code execution phase par function ki body allocate hoti hai

// For var Hoisting

console.log(var1)

var var1 = 10;

// For Normal Function Hoistin

func1();

function func1() 
{
    console.log(`Normal Function`);  
}

// For let hoisting

// console.log(var2);

// let var2 = 10;       cannot accessed before initiallization


// For Function Expression

// func2();                 cannot be called from here
const func2 = function() 
{
    console.log(`Function Expresstion`); 
}


// For Arrow Function 

// func3();                 //cannot be called from here

const func3 = () => 
{
    console.log(`Arrow Function`);
}