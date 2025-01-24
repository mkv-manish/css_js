/* var x =7;

function getName() {
    console.log("Namaste javaScript");
}

getName();
console.log(x);
console.log(getName); */

/* function */

/*
var x=1;
a ();
b ();
console.log(x);

function a () {
    var x =10;
    console.log(x);
}

function b(){
    var x =100;
    console.log(x)
}
 */

// undefined

/* 

var a ;

console.log(a);
a=10;

if(a === undefined) {
    console.log("a is undefined");
}
else{
    console.log("a is not undefined");
}
    */

// block in js


// if(true) {
//     // block is known as compound statement
//     var a=10;
//     console.log(a);
// }

/*
function x(){
    var a =100;
    function y(){
        console.log(a);
    }
    return y;
}
var z = x();
console.log(z);
 */


// setTimeOut
/* 
function x() {
    var i =1;
setTimeout(function(){
    console.log(i);
},3000);
console.log("NamasteJavaScript");
}

x();

*/

function x() {
    for(let i = 1; i<=5; i++){
     setTimeout(function(){
      console.log(i);
   },i * 1000);
}
console.log("NamasteJavaScript");
}

x();

//  Function Statement aka Function Decleration

function a() {
    console.log(" a called");
}
// Function Expression
const b = function (param1) {
    return function xyz() {

    }
}
console.log(b());

// Anonymous Function

 // function () {

// }



