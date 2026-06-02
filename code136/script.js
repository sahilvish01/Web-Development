// await keyword

// const response = await fetch("https://api.github.com/users");
// const data = await response.json();
// console.log(data);

// Drawback: await keyword pure program ko usi place par rok deta hai
// Solution: await keyword ka use async function ke andar karo

// async function github()
// {
//     const response = await fetch("https://api.github.com/users");
//     const data = await response.json();
//     console.log(data);
// }


// github();
// console.log("Synchronus task..");


// Async function hamesha promise return karta hai
// Good practice ye hai ki async function ke andar always try and catch block ka use kare


// async function github()
// {
//     try 
//     {
//         const response = await fetch("https://api.github.com/users");
//         const data = await response.json();
//         console.log(data);
//     }
//     catch(error)
//     {
//         console.log(error);
//     }
// }


// Multiple async task ko async function ke andar paralal excecute karane ke liye

async function github()
{
    try
    {
        const [comment, likes, chat] = [fetch("commentApi"), fetch("likeApi"), fetch("chatApi")];
    }
    catch(error)
    {
        console.log("Error");
    }
}

github()