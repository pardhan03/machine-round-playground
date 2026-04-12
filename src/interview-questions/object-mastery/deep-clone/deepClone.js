let test1 = {
    name: "John",
    aga: 25,
};

// Now here obj2 will be a reference of the obj1;
let test2 = test1;
test2.name = "Doe";
console.log(test1, test2); // here we will get the name Doe in the both object due to obj2 has refernece of obj1

let test3 = {
    name: "Test3",
    age: 18,
    social: {
        facebook: {
            ac1: 'test3facebook',
            ac2: 'test33facebook'
        },
        twitter: {
            free: {
                ac1: 'test3free',
            },
            paid: {
                ac2: 'test3paid',
            }
        }
    }
}

// this is shallow copy of the object with spread operator
// because with the spread operator we don't creat the new object of the nested object inside the object
// this is the same case with object.assign method
let test4 = { ...test3 };

test4.social.facebook.ac2 = "changed";
console.log(test3, test4); // here we also get the same value inside the ac2 of test3 and test4 because it is a shallo copied object

// Below is a method for deep clone a object but it is not acceptable in the interviews
// first we will convert the object into json string and then convert it into the object with the help of json.parse method
let test5 = JSON.parse(JSON.stringify(test3));

function makeDeepCopy(obj) {
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    };

    if (Array.isArray(obj)) {
        return obj.map(makeDeepCopy);
    };

    const ans = {};

    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            ans[key] = makeDeepCopy(obj[key]); // data['test'] = 'dummy'
        }
    };
}