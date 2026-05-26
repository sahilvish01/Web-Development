// JavaScript DOM Rivision

// Select HTML element through getElementbyID

const h1 = document.getElementsByTagName(`h1`);         // HTML Collection
const class1 = document.getElementsByClassName(`class1`)      // HTML Collection
const id1 = document.getElementById(`id1`)             // Single Element

console.log(h1);
console.log(class1);
console.log(id1);

// Selct Element through queryselector: first occurance

const h2 = document.querySelector(`h2`);            

const class2 = document.querySelector(`.class2`)

const id2 = document.querySelector(`.id2`)

console.log(h2);
console.log(class2);
console.log(id2);

const divAll = document.querySelectorAll(`div`)                // Node List: It will select all div tag

console.log(divAll);

divAll.forEach(val => console.log(val))

// h2.innerHTML ->  Ye html tag ko bhi include karta hai

// h2.innerText ->  Ye HTML tag ke andar ke text ko include karta hai uske andar ke tag aur uske content 

// h2.textContent -> Ye HTML ke andar ka saara text include karta hai and tag ko ignore karta hai but tag ke andar ke text ko include karta hai