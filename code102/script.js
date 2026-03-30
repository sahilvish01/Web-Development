// Print the avarage of 5 numbers

function avg(a,b,c,d=0,e=0)
{
    return (a+b+c+d+e)/5;
}

let average = avg(1,2,3,4,5);

console.log("Average : " + average);

// Arrow Function : 
const avg2 = (a,b,c,d,e) =>
{
    return (a,b,c,d,e)/5;
}

let average2 = avg2(12,6,35,9,7);

console.log("Average : " + average2);