// JavaScript DOM

// Selectors in DOM

let h2 = document.getElementsByTagName("h2");     // HTML Collection

console.log(h2[0].innerText);

h2[0].innerText = "Hello, Sahil"


let second = document.getElementById("second");     // Single Element 

second.innerText = "Hey, You"

let third = document.getElementsByClassName("third")    // HTML Collection

third[0].innerText = "Byeeee";

// Convert HTML Collection to the Array

let arr = [...h2];

console.log(arr);

// Select Element as selected in CSS: querySelector

let body = document.querySelector("body");

body.style.backgroundColor = "black";

body.style.color = "white";

let fourth = document.querySelector("#fourth");

fourth.innerText = "Yes Yes, It is fourth";

let fifth = document.querySelector(".fifth");

fifth.innerText = "Oh, It is Fifth"

let h1 = document.querySelectorAll(`h1`)        // Nodelist

h1.forEach((val) => 
{
    console.log(val.innerText);
})

// innerText vs innerHTML vs textContent

let inner = document.querySelector(`.inner`);

console.log(inner.innerText);       // Only its own text and avoid other tags inside it

console.log(inner.innerHTML);       // Show text and tags that is inside it 

console.log(inner.textContent);     // Show own text and also the text of the tags that is used inside it and ignore the tagname

