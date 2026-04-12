let payload = {
    name: "Hello",
    obj2: {
        language: "js",
        obj3: {
            frameworkd: "react",
        },
    },
}

// this is a basic for loop through which we can access the key of the obj
// but we have also find a way to print the key of nested obj
// for(let key in obj) {
//     console.log(key)
// }

// should print all key
function getKeys(obj) {
    for(let key in obj) {
        if(typeof obj[key] == 'object') {
            // console.log(key); // if we have to print all the keys
            getKeys(obj[key]);
        } else {
            console.log(key)
        }
    }
}

getKeys(payload);