export const debouce = (func, delay) => {
    let timer;
    return function (...args) {
        timer = setTimeout(() => {
            clearTimeout(timer);
            func.apply(this, args);
        },delay)
    }
}

// Sure. This is a debounce function, commonly used when you don't want a function to run on every single event, such as typing, scrolling, or resizing.

// First, one small syntax correction:

// const debounce = function(callback, delay) {
//     let timer;

//     return function(...args) {
//         timer = setTimeout(() => {
//             clearTimeout(timer);
//             callback.apply(this, args);
//         }, delay);
//     };
// };

// 1. Why do we use this?

// Look at:

// callback.apply(this, args);


// The this here refers to the object/context from which the returned function was called.

// For example:

// const obj = {
//     name: "John",

//     sayName: debounce(function() {
//         console.log(this.name);
//     }, 1000)
// };

// obj.sayName();


// When obj.sayName() is called, inside the returned function:

// function(...args) {
//     // here `this` is obj
// }


// So:

// callback.apply(this, args);


// effectively calls the callback with:

// this === obj


// Without preserving this, the callback might lose the context it was originally called with.

// 2. What is .apply()?

// apply() is a JavaScript method that lets you call a function while explicitly specifying its this value and passing arguments as an array.

// For example:

// function greet(age, city) {
//     console.log(this.name, age, city);
// }

// const person = {
//     name: "John"
// };

// greet.apply(person, [25, "Delhi"]);


// Output:

// John 25 Delhi


// This:

// greet.apply(person, [25, "Delhi"]);


// is roughly equivalent to:

// person.greet(25, "Delhi");


// if greet were a method of person.

// In your debounce:

// callback.apply(this, args);


// means:

// "Call callback, use the current this, and give it all the arguments stored in args."

// 3. Where do we get args from?

// This part is very important:

// return function(...args) {


// ...args is called a rest parameter.

// It collects all arguments passed to the returned function into an array.

// For example:

// const debouncedFn = debounce(function(a, b) {
//     console.log(a, b);
// }, 1000);

// debouncedFn(10, 20);


// When you call:

// debouncedFn(10, 20);


// the returned function receives:

// 10
// 20


// and:

// ...args


// collects them:

// args = [10, 20]


// So later:

// callback.apply(this, args);


// becomes conceptually:

// callback.apply(this, [10, 20]);


// which calls:

// callback(10, 20);

// 4. Why is args necessary?

// Imagine you use debounce for an input:

// input.addEventListener("input", debounce(function(event) {
//     console.log(event.target.value);
// }, 500));


// The browser calls your function with an event object:

// function(event) {
//     ...
// }


// Your returned debounce function receives that event:

// function(...args) {


// Therefore:

// args = [event]


// Then after 500ms:

// callback.apply(this, args);


// passes the event to your callback.

// So your callback still gets:

// event

// 5. One important problem with your debounce

// Your current code doesn't actually clear the previous timeout before creating a new one.

// You have:

// timer = setTimeout(() => {
//     clearTimeout(timer);
//     callback.apply(this, args);
// }, delay);


// But clearTimeout(timer) happens inside the timeout, after the delay has already happened.

// For debounce, you normally want:

// const debounce = function(callback, delay) {
//     let timer;

//     return function(...args) {
//         clearTimeout(timer);

//         timer = setTimeout(() => {
//             callback.apply(this, args);
//         }, delay);
//     };
// };


// The important sequence is:

// call 1 → start timer
// call 2 → cancel timer 1 → start timer 2
// call 3 → cancel timer 2 → start timer 3
//                   ↓
//              wait delay
//                   ↓
//              run callback


// That's why it's called debounce: if calls keep happening, the callback keeps getting postponed until there's a pause.

// In one sentence
// callback.apply(this, args);


// means:

// "After the delay, call callback with the same this context and the same arguments that were passed to my debounced function."

// And args comes directly from:

// function(...args)


// which collects whatever arguments you pass when you call the debounced function.

// Function to be debounced
// function search(query) {
//     console.log('Searching for:', query);
// }

// Create a debounced version of the search function
// const dSearch = debounce(search, 100);

export const throttle = (func, delay) => {
    let waiting = false;
    return function (...args) {
        if (waiting) return;

        waiting = true;
        func.apply(this, args);
        setTimeout(() => {
            waiting = false;
        }, delay);
    };
};

// What is this
// this means “who is calling the function”.

// When you do:

// func(args);
// JavaScript forgets who originally called the function.

/**Example */

const button = {
  count: 0,
  click() {
    this.count++;
    console.log(this.count);
  }
};

button.throttledClick = throttle(button.click, 1000);

// button.throttledClick(); // ❌ this is NOT button
// ❌ Result:
// this.count is undefined → error or wrong output

// This function will using throttling
// const throttledFun = throttle(fun, 500)

export const generateDummyData = (count, startIndex = 0) => {
  return Array.from({ length: count }, (_, i) => ({
    id: startIndex + i,
    title: `Project Alpha-${startIndex + i}`,
    description: "A deep dive into the intersection of design systems and functional programming.",
    tags: ["React", "UI/UX", "Infinite"],
    timestamp: "2 hours ago",
    image: `https://picsum.photos/seed/${startIndex + i}/400/250`
  }));
};

