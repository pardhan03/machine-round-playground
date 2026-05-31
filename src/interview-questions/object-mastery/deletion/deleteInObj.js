const person = { name: "Alice", age: 30 };

// Delete using dot notation
delete person.age;

// Delete using bracket notation (useful for dynamic keys)
const key = "name";
delete person[key];

console.log(person); // Output: {}

const person = { name: "Alice", age: 30 };

const { age, ...newPerson } = person;

console.log(newPerson); // Output: { name: "Alice" }
console.log(person);    // Output: { name: "Alice", age: 30 } (unchanged)

// Using Object Destructuring
// Object destructuring can be used to create a new object excluding the property you need to remove.This approach does not mutate the original object but returns a new object without the specified property.
// Example: Remove the property from object using object destructuring.

let obj = {
    name: "Rohit",
    age: 24,
    city: "Noida"
};

// Using destructuring to remove
// 'age' property
const { age, ...obj1 } = obj;

// obj1 is the updated object
console.log(obj1);
let obj = {
    name: "Rohit",
    age: 24,
    city: "Noida"
};

// Using destructuring to remove
// 'age' property
const { age, ...obj1 } = obj;

// obj1 is the updated object
console.log(obj1);


// You can also use the Object.entries() method to remove a property from an object.
// This method returns an array of arrays containing the key-value pairs of an object.
// You can then use the filter() method to exclude the key-value pair that you want to remove.

const newObject = Object.fromEntries(
    Object.entries(myObject).filter(([key]) => key !== 'property')
);