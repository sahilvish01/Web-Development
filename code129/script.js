// JavaScript Closure and Higher Order Function Rivision

// JavaScript Closure: Jab koi function kisi function ke andar return ho raha ho

function Outer()
{
    let count = 0;

    function Inner(val)
    {
        count += val;
        console.log(count);
    }

    return Inner;
}

let Closure = Outer();

Closure(10)
Closure(10)
Closure(10)
Closure(10)
Closure(10)

// AIM: Closure ki help se JavaScript mein Encapsulation and Abstraction ko achieve kiya ja sakta hai

// Usecase: 

function BankApp() 
{
    let balance = 1000;         // balance property/variable cannot be accessed from outside (It became private)

    return{
         showBalance()
         {
            console.log(balance);
         },

         deposit(amount)
         {
            if(amount > 0)
            {
                balance += amount;
                console.log(`${amount} has deposited`);
                
            }
            else
            {
                console.log(`Please deposit a valid amount`);
            }
         },

         withdrw(amount)
         {
            if(amount > 0 && amount <= balance)
            {
                balance -= amount;
                console.log(`${amount} has withdrawl`);
            }
            else if(amount <= 0)
            {
                console.log(`Please withdrw a valid amount`);
            }
            else
            {
                console.log(`Insufficient Balance`);
            }
         }
    }
}


// User 1: 
user1 = BankApp();

user1.showBalance();
user1.deposit(500);
user1.showBalance()
user1.withdrw(1000);
user1.showBalance();

// User 2:
user2 = BankApp();

user2.showBalance();
user2.deposit(1500);
user2.showBalance()
user2.withdrw(500);
user2.showBalance();


// Higher Order Function: Vah fuction jo apne andar se kisi function ko return kare ya kisi function ko as a paraemeter accept kare