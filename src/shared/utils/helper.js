export const debouce = (func, delay) => {
    let timer;
    return function (...args) {
        timer = setTimeout(() => {
            clearTimeout(timer);
            func.apply(this, args);
        },delay)
    }
}

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