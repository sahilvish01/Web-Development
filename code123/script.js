// Closure and Higher Order Function

function outer()
{
    let count = 0;

    function inner() 
    {
        count++;
        return count;
    }

    return inner;
}

let countChecker1 = outer();

console.log(countChecker1());
console.log(countChecker1());
console.log(countChecker1());
console.log(countChecker1());

let countChecker2 = outer()();      // Dono Execute

console.log(countChecker2);


// Usecase: Encapsulation and Abstraction is achieved

function BankingApp()
{
    let balance = 0;

    return Object.freeze({

        showBalance()
        {
            console.log(`Balance: ${balance}`);
        },

        deposit(amount)
        {
            if(amount > 0)
            {
                balance += amount;
            }
            else
            {
                console.log(`Amount Should be greater than zero`);
                
            }
        },

        withdaw(amount)
        {
            if(amount <= balance)
            {
                balance -= amount;
            }
            else
            {
                console.log(`Low Balance`);
            }
        }
    })
}


let user1 = BankingApp();

user1.showBalance();

user1.deposit(1000);

user1.showBalance();

user1.withdaw(200);

user1.showBalance();

user1.deposit(-100);

user1.withdaw(1000);


// New User
let user2 = BankingApp();
user2.showBalance();


user1.showBalance();
user2.showBalance();

user1.showBalance = function()      // You cannot modify methods of object because of freeze() 
{
    console.log("Your account is Hacked !!");
}

user1.showBalance();


// Higher Order Function: Aise functions jo dusre function ko as a arguement accept karte hai ya apne andar se kisi function ko return karte hai

// Example 1: Iss code mein jo BankingApp() and outer() hai, voh Higher Order Function hi hai
// Example 2: Callback mein jo function, callback function ko as an arguement accept kar raha tha voh bhi Higher Order function hi tha 