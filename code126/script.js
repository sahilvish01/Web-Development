const body = document.querySelector(`body`)

// onclick() from Attribute
// function mode()
// {
//     body.style.backgroundColor = `black`
// }

// onlick() from JS file

const btn1 = document.querySelector(`.btn1`);

// btn1.onclick = function()
// {
//     body.style.backgroundColor = `black`
// }

// btn1.onclick = function()
// {
//     btn1.textContent = 'clicked'
// }

// Drawback of onclick(): More than 1 onclick same element par apply karne se override ho jata hai


// Best Practice: addEventListner()

btn1.addEventListener(`click`, () => 
{
    body.style.backgroundColor = `black`
})

btn1.addEventListener(`click`, () => {
    btn1.textContent = `Clicked`;
})


// Reason: 

// 1. .onclick : .onclick, object ki property ki tarah work karta hai isliye over write ho jata hai
// 2. .addEventListener(): .addEventListner() object ki method ki tarah work karta hai, usme jitni baar call karte time parameter paas karoge har time alag work karega

const btn2 = document.querySelector(`.btn2`)

btn2.addEventListener(`dblclick`, () => 
{
    btn2.style.backgroundColor = `white`
})

const btn3 = document.querySelector(`.btn3`)

btn3.addEventListener(`mouseenter`, () => 
{
    btn3.textContent = `Mouse Entered`
})

const btn4 = document.querySelector(`.btn4`)

btn4.addEventListener(`mouseleave`, () => 
{
    btn4.textContent = `Mouse Left`
})

const grandparent = document.querySelector(`.grandparent`);
const parent = document.querySelector(`.parent`);
const child = document.querySelector(`.child`);

// grandparent.addEventListener(`click`, () => {
//     console.log("Grand parent"); 
// })

// parent.addEventListener(`click`, () => {
//     console.log("parent"); 
// })

// child.addEventListener(`click`, () => {
//     console.log("child"); 
// })


grandparent.addEventListener(`click`, () => {
    console.log("Grand parent"); 
}, true)

parent.addEventListener(`click`, () => {
    console.log("parent"); 
}, true)

child.addEventListener(`click`, () => {
    console.log("child"); 
}, true)

// Agar Capture phase ture hai to capture phase mein hi addEventListner execute hoga

// Capture phase by default false hi hote hai