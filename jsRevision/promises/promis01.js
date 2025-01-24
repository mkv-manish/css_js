const cart = ["kurta", "paint", "shirt", "salwar suit"];

createOrder(cart)
  .then(function(orderId) {
    console.log(orderId);
    return orderId;
})

.catch(function(err) {
    console.log(err.message);
})

.then(function(orderId){
    return processToPayment(orderId);
})
.then(function(paymentInfo){
    console.log(paymentInfo);
})

.catch(function(err) {
    console.log(err.message);
})

.then(function(orderId){
    console.log("No matter what happnes, I will definietly br called");
});

// / producer


function createOrder(cart){

    const pr = new Promise(function (resolve, reject) {
        //createOrder
        // validateCart
        // orderId
        if(!validateCart(cart)) {
            const err = new Error("cart is not valid");
            reject(err);
        }

        // logic for createOrder
        const orderId = "84536533";
        if(orderId) {
            setTimeout( function(){
                resolve(orderId);
            },5000)
           
            

        }
    });
    return pr;
}

function processToPayment(orderId){

    ///

    return new Promise(function(resolve,reject){
        resolve("Payment Successfully!");
    })
}

function validateCart() {

    // return true;
    return false;

}

