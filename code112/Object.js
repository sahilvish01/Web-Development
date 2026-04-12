// Javascript Object :

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


const person = 
{
    realname : "Sahil Vishwakarma",
    age : 18,
    marks : 100
}

console.log(person);


// Accesing the value of object :

// 1st way : dot operator
console.log(person.realname);
person.realname = "Keshav";
console.log(person.realname);

// 2nd way : Subscript Operator
// person[realname] = "Madhav";
// console.log(person[realname]);


// Declaration of Symbol :

let sym = Symbol("Hehe");

console.log(typeof sym);

const obj = {

    realname : "Sahil Vishwakarma", 
    marks : 100,
    age : 18
}

console.log(obj.realname);
// console.log(obj.realname);

obj.college = "BGIEM";

console.log(obj);


// Nesting of object : 

const obj1 = {

    realname : "Sahil Vishwakarma",
    marks : 100,
    age : 18,
    Id : {
        adharId : 10203030201,
        panId : 19202939
    }

}

console.log(obj1.Id.adharId);
console.log(obj1.Id.panId);



// Do objects ko merge karna 

// 1st way : 
const obj2 = {
    1 : "hehe",
    2 : "Hello",
    3 : "hii"
}

const obj3 = {
    4 : "Bye",
    5 : "B bye",
    6 : "Bye bye"
}

// Object(target,source)
const obj4 = Object.assign({},obj2,obj3);

console.log(obj4);


