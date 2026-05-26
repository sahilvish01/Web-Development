// Create new Element in HTML

const newElement1 = document.createElement(`h1`);

newElement1.textContent = `Hello`

const body = document.querySelector(`body`);

const existElement1 = document.querySelector(`#id1`)
const existElement2 = document.querySelector(`#id2`)

// Put after existing Element 

existElement2.after(newElement1);

existElement1.before(newElement1);          // It will override the previous one and put it before existing ele1

// Adding Id and class in HTML

newElement1.id = `id3`;
newElement1.className = `class3`

// Professional way to add multiple classes

newElement1.classList.add(`class1`, `class2`)       // class3 already added

// Professional way to remove multiple class

newElement1.classList.remove(`class1`, `class3`);

// Styling the element through JavaScript

body.style.backgroundColor = `lightblue`
newElement1.style.fontSize = `5rem`

// getting and setting attributes

console.log(newElement1.getAttribute(`id`));

newElement1.setAttribute(`src`, `Hello.com`)


const ul = document.querySelector(`.ulist`)

let l1 = document.createElement(`li`)
let l2 = document.createElement(`li`)
let l3 = document.createElement(`li`)
let l4 = document.createElement(`li`)

l1.textContent = `list1`
l2.textContent = `list2`
l3.textContent = `list3`
l4.textContent = `list4`

console.log(ul);

// ul.append(l1);

// ul.prepend(l4);

// ul.children[1].after(l3);

// All children Nodes 

console.log(ul.children);

// Array

let arr = [`ele1`, `ele2`, `ele3`];

// for(let i of arr)
// {
//     ul.append(i);
// }

const fragment = document.createDocumentFragment();

for(let i of arr)
{
    const list = document.createElement(`li`);

    list.textContent = i;

    fragment.append(list);
}

ul.append(fragment);

// Element ko remove karne ke liye :

ul.remove()

newElement1.remove();