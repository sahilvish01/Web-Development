// JavaScript Function

// Syntax of function :

function func_name(parameter)       // Definition of function
{

    console.log(parameter);
    
}

func_name;              // Referance of the function

func_name(100);            // Calling the function 


// Default Parameters :

function DefDemo(Def_para = 100)    //If no parameter is passed so default value will be considered
{
    return Def_para;        // return the value
}

let val1 = DefDemo(20);

console.log(val1);

console.log(DefDemo());


// Jab Exact na pata ho ki kitne number of parameters pass hone wale ho

// Rest Operator (...) : Ye Operator jitne bhi parameters aate hai sabka array bana deta hai

function RestDemo(...nums)
{
    return nums;
}

console.log(RestDemo(10,24,5,3,2,4,6,3,1));


// Agar kuch values as single variable aur kuch values as array chahiye ho aur baki as array chahiye ho tab

function RestDemo1(val1, val2, ...vals)
{
    console.log(val1);
    console.log(val2);
    console.log(vals); 
}


RestDemo1(10,2,3,4,6,6,8,6,5);      

// val1 = first value 
// val2 = second value
// vals = Array of rest values


RestDemo1(1);
// val1 = 1
// val2 = undefined
// vals = empty array => []

// WAP to create a function to add two numbers 

function add2nums(val1, val2)
{
    return (val1 + val2);
}


console.log(add2nums(10,10));

let obj1 = 
{
    name : "Sahil",
    Marks : 100
}

displayobj(obj1);           // Declare karne se pahle bhi call kar sakte hai js function ko

function displayobj(myobj)
{
    console.log(myobj.name);

    // console.log(this.Marks);     // this ka use nahi kar sakte kyuki ye object ki ji specific method ya member function nahi hai

    console.log(myobj.Marks);    
}

// Kisi Array ko function mein pass karna ho

let arr1 = [10,3,2,4,2,1,3];

displayArr(arr1);

displayArr(10);

function displayArr(myarr)
{
    if(Array.isArray(myarr))
    {
        console.log(myarr[0]);      // Print first value
    }
    else
    {
        console.log("Please pass array as parameter in this function");     // If the parameter is not array
    }
}


// Declare Function as expression :

// funcname1(100);         // Cannot call the expression function before declaration or intialization

const funcname1 = function(parameter)
{
    console.log(parameter);
}


funcname1(100);

// Global and local scope 

// Outside the block => Global Scope

// {
        // inside the block => Local Scope
// }


// var => Globally Scoped 
// let => Locally Scoped
// const => Locally Scoped


{
    var var1 = 100;
    let var2 = 200;
    const var3 = 300;
}

console.log(var1);      // Accessed outside the block
// console.log(var2);   // Cannot accessed outside the block
// console.log(var3);   // Cannot accessed outside the block