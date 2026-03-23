console.log("Jai Shree Ganesh");

// Variables

{
    var name = "Sahil Vishwakarma";     // Globally scoped
}

console.log(name);

{
    let friend = "Keshav";              // Loacally scoped
    console.log(friend);
}

// console.log(friend);

{
    const c = 100;      // Constant cannot be reassigned

    // c += 10;    // Not Possible
    console.log(c);
}