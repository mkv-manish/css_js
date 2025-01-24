const caet = ["shoes", "kurta", "smartphone", "book"];

creatOrder(cart, function(orderId) {
    processToPayment(orderId, function(paymentInfo) {

      showOrderSummery(paymentInfo, function(){

           updateWalletBallence();
 
       });

    });
});


// const promise = creatOrder(cart);
//   promise.then (cart, function(orderId) {
//     processToPayment(orderId);
// });

creatOrder(cart)

.then(
    function(orderId){
    return processToPayment(orderId);
})

.then(
    function(paymentInfo){
    return showOrderSummery(paymentInfo);

})
.then(function(paymentInfo){
   return updateWalletBallence(paymentInfo);
});

  /**promis in arrow function */
  

//  const cart = ["shoes", "kurta", "smartphone", "book"];

// creatOrder(cart)

// .then(orderId => processToPayment(orderId))
// .then(paymentInfo =>showOrderSummery(paymentInfo))
// .then(paymentInfo => updateWalletBallence(paymentInfo));













