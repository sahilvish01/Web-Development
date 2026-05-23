
// Creating New Element
const newElement1 = document.createElement(`h1`);

newElement1.textContent = `Hello Hii Bye`;

const presentElement = document.querySelector(`#jai`);

// To insert the sibling element 
presentElement.after(newElement1);


const newElement2 = document.createElement(`h1`);

newElement2.textContent = `No No No`;

presentElement.before(newElement2)


// To adding classes and id with Html element

// // newElement1.id = 'id1'
// newElement1.className = 'class1'

// // Adding Multiple classes with HTML element

// newElement1.className += ' class2';


// Professional way to adding Multiple classes with HTML element: 

newElement1.classList.add(`class1`,`class2`);

// Profesional way to remove classes from HTML element: 

newElement1.classList.remove(`class1`,`class2`);

const body = document.querySelector(`body`);

// Styling the element through JavaScript: 

body.style.backgroundColor = `black`;
body.style.color = `white`;

// Getting and Setting the attribute

console.log(presentElement.getAttribute(`id`));

const img1 = document.createElement('img')

img1.setAttribute(`src`, `https://images.pexels.com/photos/37196485/pexels-photo-37196485/free-photo-of-venetian-alley-at-sunset-with-view-of-canal.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`)

body.append(img1)

// To inserting the element as a child of existing element:

const unorderList = document.querySelector(`.list`);

// const list1 = document.createElement(`li`)
// const list2 = document.createElement(`li`)
// const list3 = document.createElement(`li`)
// const list4 = document.createElement(`li`)

// list1.textContent = `Milk`;
// list2.textContent = `Bread`;
// list3.textContent = `Eggs`;
// list4.textContent = `Mangoes`

// //1. Inserting at last
// unorderList.append(list1)
// unorderList.append(list2)

// // 2. Inserting at first
// unorderList.prepend(list3);

// // 3. Inserting in Between: 
// unorderList.children[1].after(list4);

// // All the children elements of an element: 
// console.log(unorderList.children);          // HTML Collection (Reccomended)
// console.log(unorderList.childNodes);        // NodeList


// Array ke elements ko UI mein show karna: Bad Practice
// const arrItems = [`Apple`, `Orange`, `PineApple`];

// for(item of arrItems)
// {
//     const list = document.createElement(`li`);

//     list.textContent = item;

//     unorderList.append(list);
// }

// Array ke elements ko UI mein show karna using fragment: Best Practice
const arrItems = [`Apple`, `Orange`, `PineApple`];

const fragment = document.createDocumentFragment();

for(item of arrItems)
{
    const list = document.createElement(`li`);

    list.textContent = item;

    fragment.append(list);
}

unorderList.append(fragment);       // Update UI at once

// Element ko HTML file se delete karne ke liye

newElement1.remove();

unorderList.remove();

// innerHTML vs textContent

// innerHTML: Content ko execute karke insert karti hai

// textContent: Content ko execute nahi karta insert karte time 