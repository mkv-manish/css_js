// array are mutable
// Array method

let fruits = ["mango", "apple", "papaya", "banana"];
console.log(fruits);

// push : add to end

console.log(fruits.push("kiwwi"));

console.log(fruits);

//  pop : delete from end & returns it

console.log(fruits.pop());

console.log(fruits);

// unshift : add to start

console.log(fruits.unshift("Water melon"));

console.log(fruits);

//  shift : delete from start & return it

console.log(fruits.shift());

console.log(fruits);

// indexOf : return index of something

console.log(fruits.indexOf("banana"));
console.log(fruits.indexOf("Banana"));  //syntex 'B' cant't macthed so print -1

// includes : search for a value

console.log(fruits.includes("banana"));
console.log(fruits.includes("Banana"));  ////syntex 'B' cant't macthed so print false

// Example

let followers = ["akash", "rahul", "manish"];
   console.log(followers);

let blocked = followers.shift();
   console.log(followers);
   console.log("blocked : ", blocked);

// concat: merge 2 arrays

let primary = ["red", "blue", "black"];
let secondary = ["yellow", "pink", "voilet"];

console.log(primary);
console.log(secondary);
console.log(primary.concat(secondary));

let allColors = primary.concat(secondary);

console.log(allColors);

// reverse : reverse an array

console.log(allColors.reverse());

// slice : copies a portation of an arrays

console.log("slice : ",allColors.slice(1));
console.log(allColors.slice(2,3));
console.log(allColors.slice(3,6));
console.log(allColors.slice(allColors.length-1));
console.log(allColors.slice(10));


// splice : orginal array ke andar change krta hai 
// removes, replace,add element,in place splice (start,deleteCount,item0..... itmeN)

console.log("All colors :", allColors);
console.log("splice : ", allColors.splice(3));
console.log("splice : ", allColors.splice(0,1));
console.log("splice : ", allColors.splice(0,1,"pink","gray"));

// sort : sorts in array

let days = ["monday","tuesday", "wednesday", "thrusday", "friday", "satarday", "sunday"];

console.log(days);
console.log(days.sort());
