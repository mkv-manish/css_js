/** 
 * for loop

for(initialisation; condition ;updation) {

    // do somthing
}
*/

for (let i = 1; i <=5; i ++) {
    console.log(i);
}

// Qn print all odd numbers (1 - 15);

for (let i=1; i<=15; i=i+2) {
    console.log(i);
}
// Qn print all even numbers (2 -20);

for (let i=2; i<=20; i=i+2) {
    console.log(i);
}

// Nested for loop

for (let i=1; i<=3; i++){
    console.log(`outer loop ${i}`)

    for(let j=1; j<=3; j++) {

        console.log(j);
    }
}


/**
 * while loop
 
while(condition){
       //do somthing
  }

 */

  let i=1;
  while(i<=5) {
    console.log(i);
    i++;
  }


  /** 
   * for of 

  for ( (element) of (collection)) {
      // do something
  }

  */

  let fruits = ["mango", "apple", "papaya", "banana","Kiwwi"];

  for (i of fruits) {
    console.log(i);
  }