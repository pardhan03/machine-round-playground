// Promise.all(iterable):
// Fulfills when all promises in the iterable are fulfilled; rejects immediately if any promise rejects.

// Promise.allSettled(iterable):
// Waits for all promises to settle (either fulfill or reject) and returns an array of their results.

// Promise.race(iterable):
// Settles (fulfills or rejects) as soon as any of the promises in the iterable settles.

// Promise.any(iterable):
// Fulfills as soon as any promise in the iterable fulfills; rejects if all promises reject.

// This returned promise fulfills when all of the input's promises fulfill (including when an empty iterable is passed),
// with an array of the fulfillment values. It rejects when any of the inputs promises rejects, with this first rejection reason.
Promise.all([
    Promise.resolve("Task 1 completed"),
    Promise.resolve("Task 2 completed"),
    Promise.reject("Task 3 failed")
])
    .then((results) => console.log(results))
    .catch((error) => console.error(error));

// This returned promise fulfills when all of the input's promises settle (including when an empty iterable is passed),
// with an array of objects that describe the outcome of each promise.
Promise.allSettled([
    Promise.resolve("Task 1 completed"),
    Promise.reject("Task 2 failed"),
    Promise.resolve("Task 3 completed")
])
    .then((results) => console.log(results));

// This returned promise settles with the eventual state of the first promise that settles.
Promise.race([
    new Promise((resolve) =>
        setTimeout(() =>
            resolve("Task 1 finished"), 1000)),
    new Promise((resolve) =>
        setTimeout(() =>
            resolve("Task 2 finished"), 500)),
]).then((result) =>
    console.log(result));

    // This returned promise fulfills when any of the input's promises fulfills, with this first fulfillment value. It rejects when all of the input's promises reject (including when an empty iterable is passed),
    // with an AggregateError containing an array of rejection reasons.
Promise.any([
    Promise.reject("Task 1 failed"),
    Promise.resolve("Task 2 completed"),
    Promise.resolve("Task 3 completed")
])
    .then((result) => console.log(result))
    .catch((error) => console.error(error));