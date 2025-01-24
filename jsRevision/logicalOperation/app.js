// Logical Operators


//   && logical AND
//   || logical OR
//   ! logical NOT

let marks = 75;

if ((marks > 33 && marks <= 80 ) || !false) {
    console.log("pass");
}

// Eample 

let num = 12;
if((num%3 === 0) && ((num+1 == 15) || (num - 1 == 11) ) ){
    console.log("Safe");
}else {
    console.log("Unsafe");
}