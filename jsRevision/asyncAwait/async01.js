// real world example async/await

const API_URL = "https://api.github.com/users/mkv-manish";

// await can only be use inside a async function.

async function handlePromise() {
        const data = await fetch(API_URL);
        const jsonValue = await data.json();
         console.log(jsonValue);

    // try {
    //     const data = await fetch(API_URL);
    //     const jsonValue = await data.json();
    //     console.log(jsonValue);

    // }
    // catch (err) {
    //     console.log(err);
    // }

// fetch() => Response.json() => jsonValue

}

handlePromise().catch((err)=>console.log(err));

// handlePromise();
