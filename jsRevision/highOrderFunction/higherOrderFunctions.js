
/*
const radius = [3, 1, 2, 4];

const calculateArea = function (radius){
  const output =[];
 for(let i = 0; i < radius.lenght; i++){
    output.push(Math.PI * radius[i] * radius[i]);
}
return output;
};

console.log(calculateArea(radius));


const calculateCircumference = function (radius){
  const output =[];
 for(i = 0; i < radius.lenght; i++){
    output.push(2 * Math.PI * radius[i]);
}
return output;
};

console.log(calculateCircumference(radius));


const calculateDiameter = function (radius){
  const output =[];
 for(i = 0; i < radius.lenght; i++){
    output.push(2 * radius[i]);
}
return output;
};

console.log(calculateArea(radius));
*/

/**
const radius = [3, 1, 2, 4];


const area = function(radius) {
    return Math.PI* radius * radius;
};

const cicumference = function (radius){
    return 2 * Math.PI * radius;
};

const diameter = function(radius){
    return 2 * radius;
}

const calculate = function (radius, logic){
  const output = [];
 for(let i = 0; i < radius.lenght; i++) {
    output.push(logic(radius[i]));
}
return output;
};

console.log(radius.map(area));

console.log(calculate(radius, area));

// console.log(calculate(radius,cicumference));
// console.log(calculate(radius, diameter));
 */

/*

// map double

const arr = [3, 1, 6, 8, 2];

function double(x) {
    return x * 2;
}

const output = arr.map(double);

console.log(output);

// map triple

const arr1 = [4, 6, 7, 4, 10, 5];

function triple(x) {
    return x * 3;
}
function binary(x){
    return x.toString(2);
}

const output1 =arr1.map(binary);

console.log(output1);

*/


/* 
// filter

const arr = [3, 4, 6, 8, 7, 1, 5];

// const output = arr.filter((x) =>x < 4) ;

function isEven(x) {
    return x < 4;
}

const output = arr.filter(isEven);

console.log(output);

*/
/* 

//  reduese

const arr = [3, 4, 6, 8, 7, 1, 5,];

// sum or max

function findMax(arr){
    let max = 0;
    for(i = 0; i < arr.length; i ++) {
        if(arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

console.log(findMax(arr));

const output = arr.reduce(function(max, curr){
    if(curr > max){
        max = curr;
    }
      return max;
}, 0 );

console.log(output);

*/


const users = [
    {firstName: "manish",lastName: "kumar", age: 25},
    {firstName: "amit",lastName: "kumar", age: 34},
    {firstName: "rahul",lastName: "saw", age: 24},
    {firstName: "amit",lastName: "khushwaha",age:25},
];

const output = users.map((x) => x.firstName + " " + x.lastName);

// const output = users.filter((x) => x.age < 30)

// const output = users.filter((x) => x.age < 30).map((x) => x.firstName);

console.log(output);






