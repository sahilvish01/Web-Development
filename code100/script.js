// Practice

let age = 18;

if(age >=10 && age <= 20)
{
    console.log("Nice veere");
}
else
{
    console.log("What the hell");
}

// Divisble by 2 and 3

let a = 6;

if(a%2 == 0 && a%3 == 0)
{
    console.log("Divisble by 2 and 3");
}
else
{
    console.log("Not divisble by 2 and 3");
}

// Divisble by 2 or 3

if(a%2 == 0 || a%3 == 0)
{
    console.log("Divisble by 2 or 3");
}
else
{
    console.log("Not divisble by 2 and 3");
}

// Driving policy

if(age >= 18)
{
    console.log("You can drive");
}
else
{
    console.log("You cannot drive");
}

// Driving policy using ternary operator

(age >= 18)? console.log("You can drive") : console.log("You cannot drive");