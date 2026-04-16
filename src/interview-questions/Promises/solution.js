
Promise.resolve(5)
    .then((value) => value * 2) // Multiplies by 2  whatever we retun will pass to next then block
    .then((value) => value + 3) // Adds 3
    .then((finalValue) => console.log(finalValue)); // Logs: 13

const p1= new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("API 1 failed");
    }, 1000);
})

const p2= new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("API 1 failed");
    }, 1000);
})

const p3= new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("API 1 failed");
    }, 1000);
})

Promise.all([p1, p2, p3]).then((result) => {
    console.log("All result", result);
}).catch((err) => {
    console.log("All Promise failed", err)
})

// which promise resolve will get in result
// If first promise reject and
Promise.any([p1, p2, p3]).then((result) => {
    console.log(" result", result);
}).catch((err) => {
    console.log("All Promise failed", err)
})

// which promise full-filled first whether it is resolve or reject
Promise.race([p1, p2, p3]).then((result) => {
    console.log("First promise result", result);
}).catch((err) => {
    console.log("First Promise failed", err)
})
