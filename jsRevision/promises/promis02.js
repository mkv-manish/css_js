
// promise.all method

/** 
const p1 = new Promise((resolve, reject) =>{
    setTimeout(()=> resolve("p1 Sucess"),3000)
})
const p2 = new Promise((resolve, reject) =>{
    setTimeout(()=> resolve("p2 Sucess"),1000);
    // setTimeout(()=> reject("p2 fail"),1000);
})
const p3 = new Promise((resolve, reject) =>{
    setTimeout(()=> resolve("p3 Sucess"),2000);
});

Promise.all([p1, p2, p3]).then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.error(err);
  
});
*/

// Promise.allSettled method

/*
const p1 = new Promise((resolve, reject) =>{
    setTimeout(()=> resolve("p1 Sucess"),3000)
})
const p2 = new Promise((resolve, reject) =>{
    setTimeout(()=> resolve("p2 Sucess"),1000);
    // setTimeout(()=> reject("p2 fail"),1000);
})
const p3 = new Promise((resolve, reject) =>{
    // setTimeout(()=> resolve("p3 Sucess"),2000);
    setTimeout(()=> reject("p3 Fail"),2000);
});

Promise.allSettled([p1, p2, p3]).then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.error(err);
  
});

*/

// Promise.race

/*
const p1 = new Promise((resolve, reject) =>{
    setTimeout(()=> resolve("p1 Sucess"),3000)
})
const p2 = new Promise((resolve, reject) =>{
    setTimeout(()=> resolve("p2 Sucess"),5000);
    // setTimeout(()=> reject("p2 fail"),1000);
})
const p3 = new Promise((resolve, reject) =>{
    // setTimeout(()=> resolve("p3 Sucess"),2000);
    setTimeout(()=> reject("p3 Fail"),2000);
});

Promise.race([p1, p2, p3]).then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.error(err);
  
});
*/

// promise.any

// promise.any will wait for the first settled ssucess.
//All promises were rejected that is called  AggregateError

const p1 = new Promise((resolve, reject) =>{
    // setTimeout(()=> resolve("p1 Sucess"),3000)
    setTimeout(()=> reject("p1 Sucess"),3000)
    
})
const p2 = new Promise((resolve, reject) =>{
    // setTimeout(()=> resolve("p2 Sucess"),5000);
    setTimeout(()=> reject("p2 fail"),1000);
})
const p3 = new Promise((resolve, reject) =>{
    // setTimeout(()=> resolve("p3 Sucess"),2000);
    setTimeout(()=> reject("p3 Fail"),2000);
});

Promise.any([p1, p2, p3]).then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.error(err);
    console.log(err.errors);
  
});



