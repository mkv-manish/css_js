/* 
setTimeout(function () {
    console.log("timer");
},5000 );
function x(y){
console.log("x");
y();
}
x(function()  {
console.log("y");
});
*/
/*

function attachEventListeners(){
 let conunt =0;
 document.getElementById("clickMe")
 .addEventListener("click", function xyz(){
  console.log("Button Clicked", ++conunt);
});
}
attachEventListeners();
  */


/* 
console.log("start");

setTimeout(function cb(){
  console.log("callback");
},5000);

console.log("end")

let startDate = new Date().getTime();
let endDate = startDate;

while(endDate < startDate +10000){
  endDate = new Date().getTime();

}

console.log("while expired");
*/

/* 
console.log("start");

function cb() {
  console.log("call Back");
}
setTimeout(cb,0);

console.log("End");


// callback function

 
console.log("start");

setTimeout(function(){
  console.log("javacript"); 
},5000);


setTimeout(function() {
  console.log("End");
},2000);

*/

const cart = ["smartphone", "laptop", "television", "charger"]

          api.createOrder(cart, function ( ) {

             api.productToPayment( function() {
 
             api.showOrderSummery(

              function() {
              api.updateWallet()

                 }

             )

          }
       )
  })









