// Promises in JavaScript 

// const p1 = fetch("https://api.github.com/users");

// console.log(p1);

// const p2 =  p1.then((response) => 
//             {
//                 // console.log(response);
//                 // console.log(response.json());   // It also creates promise
                
//                 return response.json();     // Data ko bytes se Json format mein convert kar diya
//             })


// p2.then((data) => 
// {
//     console.log(data);
    
// })



// Professional way to fetch API

// fetch("https://api.github.com/users")
// .then((response) => 
// {
//     return response.json();         // Converting Bytes to JSON format (It also creates a promise)
// })
// .then((data) => 
// {
//     console.log(data);
// })



const obj = {

    name: "Sahil",
    age: 19,
    address: "Dwarika",
    c: undefined,          // Ye Json format mein ignore ho jayega

}

// Converting object into JSON Format:

const jsonFormat1 = JSON.stringify(obj);
console.log(jsonFormat1);


// JSON Format
const jsonFormat = `{
    "name": "Sahil",
    "age": 19,
    "Adress": "Dwarika"
}`

console.log(jsonFormat);

// JSON ka format string form mein isliye hota hai kyuki pure internet mein data bytes ke form mein travel karta hai so string form ke each character ke corrosponding uska bytecode find karna easy ho jata hai

// JSON format ko har language samahjti hai

// JSON format is a universal format


// Converting JSON to JavaScript Object: 

// const jsObject = JSON.parse(jsonFormat);

// console.log(jsObject);


// fullfilled and Reject State: 

// 1.) fullfilled: Agar server ne hame respond kiya chahe use actual data mila ho ya nahi, to us state ko fullfilled state kahte hai
// 2.) Reject: Agar server ne respond hi nahi kiya to us state ko reject state kahte hai
/*

Promise reject ho sakti hai when: 
1. Internet down
2. Server down
3. DNS down, etc

*/

// DNS: Hamare url ko IP address mein convert karta hai

// Agar Promise Reject ho gayi to use handle karne ke liye: 

// fetch("https://api.github.com/users")
// .then((response) => 
// {
//     return response.json();         // Converting Bytes to JSON format (It also creates a promise)
// })
// .then((data) => 
// {
//     console.log(data);
// })
// .catch((error) => 
// {
//     console.log("Fetching failed");
// })

// catch block automatically keval tabhi execute hoga jab promise reject hogi 

// Agar promise fullfilled ho gayi but server ko data nahi mila to us promise ko manually handle karna padta hai

/*

.ok property: 

1.) .ok = true --> server ko actual data mil gaya jiski hamne demand ki thi
2.) .ok = false --> server ko actual data nahi mila jiski demand ki thi

*/

// fetch("https://api.github.com/usrs")
// .then((response) => 
// {
//     if(response.ok == false)
//     {
//         throw new Error("Data not Found");
//     }

//     return response.json();
// })
// .then((data) => 
// {
//     console.log(data);
// })
// .catch((error) =>
// {
//     console.log(error.message);
// })


// Showing the data in HTML
const div = document.querySelector(".existingElement")

fetch("https://api.github.com/users")
.then((response) => 
{
    if(response.ok == false)
    {
        throw new Error("Data not Found");
    }
    return response.json();
})
.then((data) => 
{
    data.forEach( val => {

        const Image = document.createElement("img");

        Image.src = val.avatar_url;
        
        Image.style.width = "250px";
        Image.style.height = "250px";
        
        Image.style.objectFit = "cover"
        
        div.append(Image);    
    });
})
.catch((error) =>
{
    console.log(error.message);
})