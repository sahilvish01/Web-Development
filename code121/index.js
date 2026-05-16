// JavaScript Function Rivision

// Basic Functions
function sum2no(num1,num2)
{
    return (num1+num2);
}

console.log(sum2no(5,6));



// function with Default parameters
function sum4no(num1, num2=0, num3 = 0, num4=0)
{
    return (num1+num2+num3+num4);
}


console.log(sum4no(5,6,8,3));
console.log(sum4no(5,6));
console.log(sum4no(5));

// Rest operator
function sum(...num)
{
    let sum = 0;
    num.forEach((val,ind,ref)=> {

        sum += val;

    })
    

    return sum;
}

console.log(sum(3,4,6,4,8));

// Function Expression
let sum3No = function(num1, num2, num3)
{
    return num1+num2+num3;
}

console.log(sum3No(4,7,3));


// Arrow Function
const sayHello = () => 
{
    return "Hello"
}

console.log(sayHello());


// Arrow Implicit Return
const add2no = (num1,num2) => num1 + num2;

const square = num => num*num;                  // Not even bracket is needed

console.log(add2no(3,5));

console.log(square(5));


// Return object from Arrow implicit return
const getObj = () => ({name: "Sahil", age: 19})

console.log(getObj());


// Immediately Invoked Function Expression (IIFE)

(function() 
{
    console.log("Hello IIFE from Normal Function");
    
})();

(function() 
{
    console.log("Hello IIFE from Arrow Function");
})();


// Callback Function

function blinkit()
{
    console.log("Blinkit is delevering your order");
}

function zomato()
{
    console.log("Zomato is delevering your food");
}

function placeOrder(amount, fn)
{
    console.log(`${amount} is recived and your order is placed`);
    
    // zomato();    // Hardcoded
    fn();           // Reusable
}

placeOrder(500, zomato);
placeOrder(1000, blinkit);