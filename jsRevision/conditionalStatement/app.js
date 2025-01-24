// if Statement

/*
console.log("before my if statement");

let age = 16;

if(age >= 18) {

    console.log("you can Vote now");
    console.log("you can Drive now");
}

if (age > 18) {
    console.log("you can't Vote now");
}
console.log("after my if statement");

 */

// let color1 = "green";

// if(color1 === "green") {
//     console.log("Go!");
// }
// if(color1 === "yellow"){
//     console.log("GO SLOW!");
// }
// if(color1 === "red") {
//     console.log("STOP!");
// }

// / if, else if

let age = 14;

if(age>=18){
    console.log("You can Vote Now!");
}
else if(age>=18){
    console.log("you can't vote now");

}
else if(age < 18){
    console.log("you can Vote Now!");

}

// else statement

let age1 = 18;

if(age1 >= 18) {
    console.log("you can vote now!");

}
else{
    console.log("you can't vote");
}

// nested if-else

let marks = 45;

if(marks >= 33) {
    console.log("Pass");
    if(marks >= 80){
        console.log("Grade: O")
    } else{
        console.log("Grade: A")
    }
}
else{
    console.log("Better Luck To Next Time!");
}

// Swich statement

let color = "red";
switch(color) {
    case "red":
        console.log("stop");
        break;
    case "yellow":
        console.log("slow down");
        break;
    case "green":
        console.log("go");
        break;
    default:
        console.log("light is broken")
        break;
}

