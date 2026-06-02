// // Creating Promises in JavaScript and callback hell improvement

// const p1 = new Promise((resolve, reject) => 
// {
//     // resolve("resolved");
//     reject("rejected");
// })

// // console.log(p1);         resolve

// p1.then((resolved) => 
// {
//     console.log(resolved);    
// })
// .catch((rejected) =>
// {
//     console.log(rejected);
// }
// )
// .finally(() =>
// {
//     console.log("I'll always be executed");
// })


// Callback Hell Improvement:

// Example: Food Apllication

const user1 = {
    userName: "Sahil",
    userAddress: "Dwarika",
    orderedItems: ["Burger", "Pizza", "Coke"],
    payment: 500,
    hotelAddress: "Nagpur",
    packStatus: false,
    paymentDone: false,
    deliveryPicked: false,
    delevered: false,
}

function placeOrder(userDetails) 
{
    console.log("Payment is in progress..");

    return new Promise((resolve, reject) => 
    {
        setTimeout(() => 
        {

                if(Math.random() <= 0.1)
                {
                    return reject(`Payment of ${userDetails.payment} is failed`)
                }

                userDetails.paymentDone = true;
                return resolve(`Payment of ${userDetails.payment} is recived`)
            
        })
    },3000)
}

function packOrder(userDetails)
{
    if(!userDetails.paymentDone)
    {
        console.log("You have to pay for your order first !!");
        return;
    }

    console.log("Your order is ready to be packed");

    
        return new Promise((resolve, reject) => 
        {
            setTimeout(() => 
            {
                    if(Math.random() <= 0.01)
                    {
                        return reject("Your order is unable to be packed");
                    }
                    userDetails.packStatus = true;

                    userDetails.orderedItems.forEach(item => 
                    {
                        
                        console.log(`${item} is packed`);

                    });

                    return resolve("Your order has been packed")
            },3000)

        })
    
    
}

function pickDelivery(userDetails) 
{

    if(!userDetails.packStatus)
    {
        console.log("You have to pack your order first !!");
        return;
    }

    console.log(`Delivery man is on the way to pick delivery..`);

    return new Promise((resolve, reject) => 
    {
        setTimeout(() => 
        {

            if(Math.random() <= 0.1)
            {
                return reject("Delivery man is unable to pick your order");
            }
            userDetails.deliveryPicked = true;
            return resolve(`Your order is picked up by delivery man from ${userDetails.hotelAddress}`);
            

        },3000)
        
    })
 
}

function delivery(userDetails)
{
    if(!userDetails.deliveryPicked)
    {
        console.log("Your is not picked yet");
        return;
    }

    console.log("Delivery man is on the way to deliver the order");
    
    return new Promise((resolve, reject) => 
    {

        setTimeout(() => 
        {

            if(Math.random() <= 0.1)
            {
                return reject("Delivery man is unable to deliver your order");
            }
            userDetails.delivered = true;
            return resolve(`Your order is delivered by delivery man to ${userDetails.userAddress}`);
            
        },3000)
  
    })

}

placeOrder(user1)
.then((response) =>
{
    console.log(response);
    return packOrder(user1);
})
.then((response) => 
{
    console.log(response);
    return pickDelivery(user1);
})
.then((response) => 
{
    console.log(response);
    return delivery(user1);
})
.then((response) => 
{
    console.log(response);
})
.catch((error) => 
{
    console.log(error);
})