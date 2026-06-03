// Prototype and classes in JavaScript

// Prototype:

let obj1 = 
{
    name: "Sahil",
    age: 19
}

let obj2 = 
{
    adress: "Jabalpur"
}

obj2.__proto__ = obj1;

console.log(obj2.name);

// Object and Array ka prototype

console.log(Object.prototype.__proto__);
console.log(Array.prototype.__proto__);

// End the end JavaScript mein sab kuch Object hi hai

// Object end mein null ko point karta hai taki agar koi aisi property search kar rahe ho jo ki exist hi nahi karti ho tab voh jaate jaate null par stop ho jayegi


// classes in JavaScript 

class Person 
{
    constructor(name, age)
    {
        this.name = name;
        this.age = age;
    }

    display()
    {
        console.log("Name: " + this.name);
        console.log("Age: " + this.age);
    }
}

const obj3 = new Person("Sahil", 19);

// console.log(obj3);

const obj4 = new Person("Keshav", 19);

console.log(obj4);

console.log(obj3);

obj3.display()
obj4.display()

// class is the blueprint of the object

// Inheritance: 

// Acquiring the property from one class to another class

class Employee extends Person
{
    constructor(name, age, empId, dept)
    {
        super(name, age);

        this.empId = empId;
        this.dept = dept;
    }

    display()
    {
        super.display()
        
        console.log(this.empId);
        console.log(this.dept);
    }
}

const obj5 = new Employee("Sahil", 19, 278, "Technical");

console.log(obj5);

obj5.display()

// Cannot modify class blueprint like this
// obj5.salary= 5000000000;

// console.log(salary);


// One more way to create prototype of object: 


obj6 = Object.create(obj5);

console.log(obj6);
obj6.display();

// It can be modified
obj6.salary = 500000000;

console.log(obj6.salary);
