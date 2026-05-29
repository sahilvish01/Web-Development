// Callback Hell

// For Example: Food Application

// Details: 
const customer = {
    customer_name: "Sahil",
    customer_location: "Jabalpur",
    payment: 500,
    restaurent_location: "Nagpur",
    food: ["Pizza","Burger","Pepsi"],
    payment_status: false,
    packing_status: false,
    pickup_status: false,
    delivery_status: false
}


// Place Order Method
function placeOrder(customer, Callback)
{
    console.log(`Payment of ${customer.payment}rs is in the process`);

    setTimeout(()=>{
        console.log(`Payment has been done`);
        customer.payment_status = true;
        Callback(customer);
    },3000) 
}


// Pack Order Method 
function packOrder(customer, Callback)
{
    if(customer.payment_status == false)
    {
        console.log("Please pay before packing the order");
        return;
    }

    console.log("Your order is being packed");

    setTimeout(() => 
    {
        customer.food.forEach(val => {

            console.log(`${val} is packed`);
            
        });
        customer.packing_status = true;
        Callback(customer)
    },3000)
}


// Picking Order Method 
function pickOrder(customer, Callback)
{
    if(customer.packing_status == false)
    {
        console.log("Let the order being packed first");
        return;
    }

    console.log("Order is ready to pick up");
    
    setTimeout(() => 
    {
        console.log(`Order is picked up from ${customer.restaurent_location}`);
        customer.pickup_status = true;

        Callback(customer);
    },3000)
    
}

// Order Delivery Method 
function deliverOrder(customer)
{
    if(customer.pickup_status == false)
    {
        console.log("Let the order picked up first");
        return;
    }

    console.log("Your order is on the way...");

    setTimeout(() => 
    {
        console.log(`Your order has been delivered to ${customer.customer_name} in the ${customer.customer_location}`);
        customer.delivery_status = "true"
    },3000)
    
}


// Callback Hell:
placeOrder(customer, () => 
{
    packOrder(customer, () => 
    {
        pickOrder(customer, () => 
        {
            deliverOrder(customer);
        })
    })
})