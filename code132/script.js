// function for attribute onclick

function func1()
{
    console.log("Attribute onclick btn -> clicked");
    
}

// onclick from js file

const btn2 = document.querySelector(`.btn2`);

// btn2.onclick = function()
// {
//     console.log("JS onclick btn -> clicked");
    
// }

// Drawback of onclick(): More than 1 onclick same element par apply karne se override ho jata hai

// Best Practice: addEventListner()

btn2.addEventListener(`click`, () => 
{
    console.log(`Hello`);
    
})

btn2.addEventListener(`click`, () => 
{
    console.log(`Hii`);
    
})


// Reason: 

// 1. .onclick : .onclick, object ki property ki tarah work karta hai isliye over write ho jata hai
// 2. .addEventListener(): .addEventListner() object ki method ki tarah work karta hai, usme jitni baar call karte time parameter paas karoge har time alag work karega


const btn3 = document.querySelector(`.btn3`);

// Professional Way to remove function after one click

function HandleEvent()
{
    console.log(`Ek hi baar click ko sunega`);
    btn3.removeEventListener(`click`, HandleEvent);
}


btn3.addEventListener(`click`, HandleEvent);