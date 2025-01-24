"use strict";

// this is global space
console.log(this);  //globalObject - window, global

// this inside a function

function x() {

    // the value depend on strict / non strictmode
    console.log(this);
}

//this inside non-strict mode - (this substitution) 

// if the value of thid keyword is undefind or null
// this keyword will be replaced with globalObject
// only in non strict mode

// this keyword value depends on how the function is called (window)

x(); //undefined
window.x(); //window

// this inside  object's method

const student ={
    name: "manish",
    printName: function () {
        console.log(this.name);
    },
};

student.printName();

const student2 = {
    name: "khushwaha"
};
//  call apply bind method (sharing methods)

student.printName.call(student2);

//  this inside arrow function

const obj = {
    a: 10,
    x: () => {
        console.log(this);

    },
};
obj.x();

// this inside nested arrow function

const obj2 = {
    a: 20,
    x: function () {

        // enclosing lexical context
        const y = () => {
            console.log(this);
        };
        y();
    },
};
obj2.x();

//  this inside DOM elements => refence to HTMLelement
