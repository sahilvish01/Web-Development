// Arrow Function and IIFE

// this -> It points to the current object 

console.log(this);      // Empty Object

let obj1 = 
{
    name : "Sahil",
    marks : 100,

    getname : function(name = "Keshav")
    {
        console.log(this.name,"and",name);
        
    }
}

obj1.getname()


// Arrow Function

// 1st way:
const var1 = () => {
    console.log("Arrow Function");
}

var1();

// 2nd Way: Implicit Arrow Function 
const var2 = () => console.log("Implicit Arrow Function");  // Bina return ka use kiye elment ka return karata hai
    


var2();

// IIFE : Immidiate Invoked Function Expression

// Way 1: Agar name ke saath IIFE define karna ho
(   function sayhello(name) 
    {
        console.log("Hello,",name);
        
    }
)(`Sahil`);

// Way 2: Agar without name IIFE define karna ho
(
    (name) => {
        console.log(`Hello ${name} from Arrow Function IIFE`);   
    }
)(`Sahil`);


// IIFE : IIFE Ki help se function ko declare karne ke just baad hi call ho jata hai
// IIFE ki help se global pollutants ki problem ko avoid kar sakte hai