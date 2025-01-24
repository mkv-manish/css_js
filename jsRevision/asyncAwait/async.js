// async function is always return a promise.

// async and await are used to handle promises.

// await is a keyboard that can only be use inside a async function.

const p1 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve ("promise resolved value!");

    },10000);

    });


const p2 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve ("promise resolved value!");

    },5000);
    

});

// await can only be use inside a async function.
async function handlePromise() {
    console.log("Hello javaScript!");
    // Js Engine was waiting for promise to resolved
    const val = await p1;
    console.log("Namaste javascript!");
    console.log(val);


    const val1 = await p2;
    console.log("Namaste javascript 2");
    console.log(val1);
}

handlePromise();


/*

function getData(){
    // Js Engine will not wait for promise to be resolve
    p.then(res => console.log(res));
    console.log("Namaste javaScript");
}

getData();

*/
