// The Promise.reject() static method returns a Promise object that is rejected with a given reason.

function resolved(result) {
  console.log("Resolved");
}

function rejected(result) {
  console.error(result);
}

Promise.reject(new Error("fail")).then(resolved, rejected);
// Expected output: Error: fail

// Using the static Promise.reject() method

Promise.reject(new Error("fail")).then(
  () => {
    // not called
  },
  (error) => {
    console.error(error); // Stacktrace
  },
);

// Rejecting with a promise
// Unlike Promise.resolve, the Promise.reject method does not reuse existing Promise instances.
// It always returns a new Promise instance that wraps reason.

const p = Promise.resolve(1);
const rejected = Promise.reject(p);
console.log(rejected === p); // false
rejected.catch((v) => {
  console.log(v === p); // true
});
