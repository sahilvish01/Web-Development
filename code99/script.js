// Loops

for(let i = 0; i < 10; i++)
{
    console.log("for loop");
}

let obj = {

    name : "Sahil",
    role : "Programmer"
}

for(const key in obj)
{
    const element = obj[key];

    console.log(key + " : " + element);
}

let name = "Sahil";

for(const i of name)
{
    console.log(i);
}

let i = 0;
while(i < 10)
{
    console.log("While");
    i++;
}

i = 10;

do
{
    console.log("Do While");
    i++;
}
while(i<5);