async function getData() {
    return "This is Data";
};

const p = new Promise((resolve, reject) => {
    resolve("This is the resolved promise!");
})

const result = getData();

console.log(result) // asyn function always return a promise

async function handlePromise() {
    const result = await p;
    console.log(result);
}

handlePromise();
result.then((res) => {
    console.log(res);
})