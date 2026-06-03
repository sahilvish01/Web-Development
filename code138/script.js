// strict mode, this, call, bind, apply

// Strict Mode: 

    // 'use strict'        // Latest javascript -> strict mode

    // let a = 200;
    // b = 100;            // It will give error in strict mode


    // function Name(name, name)       // It will give error for naming both parameter same
    // {
    //     console.log(name,name);
    // }

    // Name("Sahil", "Keshav");



// Global Object: 

    // console.log(window);         //For Browser
    // console.log(global);         // For Node JS environment

    // console.log(globalThis);        // common name of global object for all evironment



// this keyword: 

    // 'use strict'

    // console.log(this);

    // this points 

    // for browser -> window
    // for Node JS env -> {} (empty object)

    // in both strict and non-strict mode



// this keyword inside method

    // let user = 
    // {
    //     name: "Sahil",

    //     greet: function()
    //     {
    //         console.log(`Hello ${this.name}`);    
    //     }
    // }

    // user.greet()

    // method ko jo bhi invoke karta hai 'this' use point karte hai



// this keyword for normal function: 

    // "use strict"

    // function greet()
    // {
    //     console.log(this);
    // }

    // greet();

    // non-strict: this -> global object (for both Node Js and Browser) -----> consider karta hai ki global object ne function ko invoke kiya
    // strict: this -> undefined -----> kyuki kisi aur ne use invoke nahi kiya 



// this keyword for Arrow function

    // const greet = () => 
    // {
    //     console.log(this);
    // }

    // greet();

    // Arrow function, apne lexial scope mein jo phi this hota hai use le leta hai

    // Best use: 

    // const user =
    // {
    //     name: "Sahil",

    //     greet: function()      // ise user invoke kar raha to iska this user ko point karega
    //     {
    //         // console.log(this); 
            
    //         // meet = function()   // ise user invoke nahi kara raha hai to iska this use ko point nahi karega
    //         // {
    //         //     console.log(this);
                
    //         // }

    //         meet = () =>        // Ye lexical scope mein find karta hai ki this kise point kar raha hai
    //         {
    //             console.log(this);
    //         }
    //         meet();
    //     }
    // }

    // user.greet();

    // One more thing: 

    const user = 
    {
        name: "Sahil",

        greet: () => 
        {
            console.log(this.name);
        }
    }

    user.greet();

    // greet will not point user because
    // voh object ke block ko context consider karta hai, scope nahi
    // and isliye isme lexical scope mein this ko dhundhne ke liye bahar global mein aa gaya


// this keyword with DOM: 

    const btn = document.querySelector("button");

    // btn.addEventListener("click", function()
    // {
    //     console.log(this);      // -> button tag
    // })

    btn.addEventListener("click", () => 
    {
        console.log(this);   // -> global object (oviously window)
    })
