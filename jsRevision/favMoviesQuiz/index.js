const favMovie = "Fighter";

let guss = prompt("Guess my Fav.... Movie");

while((guss != favMovie)) {
    if(guss != "quit"){
        console.log("You are quit !!");
        break;

    }
    guss = prompt("Wrong guss. please try again....");
}

if (guss = favMovie) {
    console.log("Congrats!!");
}