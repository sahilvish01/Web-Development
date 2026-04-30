// Javascript Object Rivision:

/*

1. Creation of object by object litrals
2. Accessing the element of object : 1.) Dot operator 2.) Subscript opoerator 
3. Declaration of symbol
4. Declaration of symbol inside object 
5. Object ko freeze karne ke liye
6. Creating member function of object 
7. Accessing the function
8. Function ka referance 
9. Jis object ka function ke andar usi object ki property
10. Element ko access karne ke liye jyadatar kaun sa operator use kiya jata 
11. Decalaration of object through singleton way 
12. Insertion or access the element of object 
13. Nesting of object 
14. Do object ko merge karna :- 1.) Assign 2.) Spread
15. Array of object 
16. Accesiing the element of Array of object 
17. Kisi object ki saari keys ka array banane ke liye
18. Kisi object ki saari values ka array banane ke liye
19. Kisi object ki saari key value object ka pair banane ke liye
20. Check karne ke liye ki perticuler key object mein exist karti hai ya nahi

*/


// Creation of object by litrals

let sym = Symbol("MySymbol1");

let obj1 = {
    key1 : "Hello",
    key2 : "Hii",
    key3 : "Bye",

    [sym] : "Pahla Symbol",

    [Symbol("MySymbol2")] : "Dusra Symbol"    // Declaring the Symbol inside the object and it is undefined
}


console.log(obj1);


// Accessing the element of object
    // 1. Dot Operator
    console.log(obj1.key1);

    // 2. Subscript Operator 
    console.log(obj1["key1"]);      // Double Quotes lagate hai iske liye 
    
    let key4;
    
    obj1[key4]= "Bye Bye";

    console.log(obj1[key4]);        // Jab declare kiye ho tab bina double quotes ke


// Symbol

    console.log(obj1[sym]);

    console.log(obj1[Symbol("MySymbol2")]);         // Undefined Aata hai
    

// Object ko freeze karne ke liye ki aage furthor modification na ho

Object.freeze(obj1);

obj1.key1 = 100;

console.log(obj1);      // Nothing Changed


// Creating the member function of object 


// 1st way
let obj2 = 
{
    name : "Sahil",

    intro : function(age,frdname)
    {
        console.log(`Hello, My name is ${this.name} and my age is ${age} and my friend is ${frdname}`);
    }

}

obj2.intro(100,"Keshav");


// 2nd Way
let obj3 =
{
    name : "Keshav",

    intro()
    {
        console.log(`My friend's name is ${this.name}`);
        
    }
}



// Nesting the objects 

let obj4 = 
{
    name : "Sahil",         
    age : 100,

    Id :
    {
        adhar : 203103010201,
        phone : 9234758323
    }
}

console.log(obj4.name);

console.log(obj4.age);

console.log(obj4.Id.adhar);

console.log(obj4.Id.phone);


// Merging of two objects

// 1. Assign method

let obj5 = Object.assign({}, obj2, obj3, obj4);

console.log(obj5);

obj5.intro(25,"Keshav");    // Ye method overriding nahi karegi balki parameter wale function ko overrite karke default wale par lar degi
                            // So parameter paas karne par bhi default wala hi function call hoga

// Jo bhi same name ka attribute hai un sab ko overrite kar dega jo bhi sabse end mein assingned hoga uss value se


// 2. Spread Method

let obj6 = {...obj1,...obj2};

console.log(obj6);

// Jo bhi same name ka attribute hai un sab ko overrite kar dega jo bhi sabse end mein assingned hoga uss value se

console.log(obj6[key4]);
