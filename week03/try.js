// creates a new promise
const myPromise = new Promise((resolve, reject) => {
    const success = true;
    if (success) {
        resolve("Operation successful");
    }
    else {
        reject("operation failed");
    }
});

myPromise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error(error)
    })

// await/sync 
const myAsynFunction = async () => {
    try {
        const response = await fetch(url);
        const data = response.json();
        console.log(data);
    }
    catch (error) {
        console.error(error)
    }
};

