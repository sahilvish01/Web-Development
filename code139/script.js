// Revising Some topics in JavaScript 

// forEach, map, filter, reduce

const arr = [10,20,30,40,50]

    // ForEach
    const arr2 = arr.forEach((val,ind,ref) => 
                {
                    return val;             // Isse kuch return nahi hota
                    console.log(val);
                })
    console.log(arr2);
    
    // Map
    const arr3 = arr.map((val, ind, ref) => 
                {
                    return val;
                })

    console.log(arr3);

    // filter
    const arr4 = arr.filter((val, ind , ref) => 
                {
                    return val>30;          // filter karke values ko return kar sakta hai
                })

    console.log(arr4);

    // reduce
    const sum = arr.reduce((acc, val, ind, ref) => 
                {
                    return acc+val;     // jo bhi value return hoti hai voh acc (accumilator) mein store/assingn hoti jati hai each paas mein
                })

    console.log(sum);
    
    
// Destructuring of object: 

    const obj = 
    {
        name: "Sahil",
        age: 19,
        location: "Jabalpur"
    } 

    let {name} = obj;

    console.log(name);

    name = "Keshav"             // It will affect the property of object

    console.log(name);
    console.log(obj.name);

    // Apne according name dena
    let {age: userAge} = obj;

    console.log(userAge);
    

// Spread and Rest Operator

let array1 = [1,2,3,4,5];
let array2 = [10,20,30,40,50]

    // Spread Operator: Merging 2 arrays
    const array3 = [...array1,...array2];

    console.log(array3);
    
    // Spread Operator: for copying object
    const object1 = {...obj}
    
    console.log(object1);

    // Rest Operator:
    function sumAll(...num)
    {
        let sum = num.reduce((acc, val, ind, ref) => 
        {
                    return acc+val;
        })
                        
        return sum;
    }

    console.log(sumAll(1,2));
    console.log(sumAll(1,2,3));
    console.log(sumAll(1,2,3,4));
    console.log(sumAll(1,2,3,4,5));


// Promises in JavaScript:

    const p1 = fetch("https://api.github.com/users");

    // console.log(p1);    // Initally pending state mein hai

    //  Reponse aane ke baad chalana hai tab

    const p2 = p1.then((Response) => 
                {
                    // console.log(Response);      //Bytes ke form mein hai data
                    return Response.json();     // Byte se json format mein convert karne ke liye
                })

    p2.then((data) =>
    {
        // console.log(data);
    })


    // Professional way to consume promise

    // fetch("https://api.github.com/uses")
    // .then((Response) => 
    // {
    //     if(!Response.ok)            // Jab promise fullfilled ho gayi but server ko actual data nahi mila jiski need hai
    //     {
    //         throw new Error("Data not found");
    //     }
    //     return Response.json();
    // })
    // .then((data) => 
    // {
    //     // console.log(data);
    // })
    // .catch((error) => 
    // {
    //     console.log(error.message);     // Jo promise reject ho gayi
    // })

    // There are 3 states of promise:
        // 1. Fullfilled
        // 2. Rejected
        // 3. Pending

    // Pending: Jab promise ki request ki ho and koi response nahi aaya 

    // fullfilled: Jab server ne respond kiya ho kuch bhi chahe data mila ho ya nahi

    // rejected: jab server ne promise ka respond hi nahi kiya 

    // catch block keval rejected promise ko hi handle karta hai

    // Agar promise fullfilled hai but server ko actual data nahi mila jiski need hai to use manually handle karna padega
        // Iske liye .ok ka use hota hai
            // .ok == true -> server ko actual data mil gaya jo chahiye 
            // .ok == false -> server ko actual data nahi mila jo chahiye
        
    // // Creating promises in Javascript

    // const p3 = new Promise((resolve, reject) =>
    // {
    //     // resolve("Promise Resolved")
    //     reject("Promise Rejected")
    // })

    // // console.log(p3);

    // p3.then((response) => 
    // {
    //     console.log(response);
    // })
    // .catch((error) => 
    // {
    //     console.log(error);
    // })

// Convering object to json format

    let object2 = 
    {
        name: "Sahil",
        age: 19,
        c: undefined,
    }

    let jsonFormat1 = JSON.stringify(object2);

    // console.log(jsonFormat1);   
    // Keys bhi string mein aa gayi
    // last ke extra comma ko avoid kar diya
    // undefined ko avoid kar diya


// Json Format

    let json = 
    `{
        "name": "Sahil",
        "age": 19,
        "location": "Jabalpur" 
    }`

    // Json ka format string form mein rahta hai kyuki data pure internet par bytes ke form mein travel, so isse string ke har character ke corrosponding uska bytecode check karna easy ho jata hai 

    // Converting Json format to object format:
    // let objFormat = JSON.parse(json)

    // console.log(objFormat);
    

// Async-Await:

    // await 

    // const response = await fetch("https://api.github.com/users");

    // const data = await response.json()

    // console.log(data);
    
    // console.log("Synchronus Task..");
    
    // Drawback: Javascript ko task ke liye wait karna pa raha hai

    // Solution: Async function

    // async function github() 
    // {
    //     const response = await fetch("https://api.github.com/users");

    //     const data = await response.json()

    //     console.log(data);

    //     return data;       // async function always promise return karta hai
        
    // }

    // github();

    // github().then((data) =>
    // {
    //     console.log(data);
    // })
    // .catch((Error) =>
    // {
    //     console.log(Error.message);
    // })

    console.log("Synchronus Task..");

    // Good Practice: try and catch block se async function ke andar handle karna

    // async function github() 
    // {
    //     try
    //     {
    //         const response = await fetch("https://api.github.com/uses");

    //         const data = await response.json()

    //         console.log(data);

    //     }
    //     catch(error)
    //     {
    //         console.log(error.message);
    //     }       
    // }

    // github();

    
    // async function ke andar multiple async task parallel excecute karane ke liye: 
    async function github() 
    {
        try
        {
            const [like, comment, chats] = await [fetch("likeapi"), fetch("commentapi"), fetch("chatsapi")];
        }
        catch(error)
        {
            console.log(error.message);
        }
    }
