// JavaScript Functions Rivision

// JavaScript Normal Function

function sum2(a,b)
{
    return a+b;
}


console.log(sum2(5,6));

// JavaScript function with default parameters

function sum3(a,b,c=10)
{
    return a+b+c;
}

console.log(sum3(10,4,2));
console.log(sum3(10,4));

// Rest Operator

function sumAll(...num)
{
    let sum = 0;
   for(let a of num)
   {
        sum += a;
   }

   return sum;
}

console.log(sumAll(2,3,4,5,2,4,7,9));


// Function Expression 

// funEx();     Cannot be accessed before declaration/Initailization

const funEx = function() 
{
    console.log(`Hello`);
}

funEx();


// Arrow Function

// ArrFun();        Cannot be accessed before declaration/Initialization

const ArrFun = () => 
{
    return `Arrow Function 1`
}

console.log(ArrFun());

// Arrow function Implicit Return 

const Arrfn1 = (a,b) => a + b;

console.log(Arrfn1(10,10));

// Agar ek hi parameter hai Arrow fn mein

const Arrowfn2 = num => num + 20;

console.log(Arrowfn2(10));

// For Object 

// const Arrfn3 = name => ({this.name: name, age: 19})      Arrow function mein `this` keyword kaam nahi karta hai

const Arrfn3 = strname => ({name: strname, age: 19})

console.log(Arrfn3(`Sahil`));


// Immidiate Invoked Function Expression (IIFE): Declare karne par apne aap hi call bhi ho jata hai

(function () {
    console.log(`Hello`);
})();

// Callback Function : A function is passed as parameter to another function

function Zomato()
{
    console.log(`Zomato is preparing your food`);
}

function Blinkit()
{
    console.log(`Blinkit is Packing your order`);  
}

function payment(amount, callback)
{
    console.log(`Amount ${amount} has been paid`);
    callback();
}

payment(1000, Zomato);
payment(500, Blinkit);