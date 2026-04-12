const obj = {
    A: "12",
    B: 23,
    C: {
        P: 23,
        O: {
            L: 56,
        },
        Q: [1,2] // C.Q.0= 1, C.Q.1 = 2;
    }
};

const flattenObj = (obj) => {
    const result = {};
    const returnFlattenObject = (obj, parentKey = '') => {
        for(const key in obj) {
            const newParent = parentKey + key;
            const value = obj[key];
            if(typeof value === 'object') {
                returnFlattenObject(value, newParent+'.');
            } else {
                result[newParent] = value;
            }
        }
    };
    returnFlattenObject(obj);
    return result;
}

console.log(flattenObj(obj));
// { A: '12', B: 23, 'C.P': 23, 'C.O.L': 56, 'C.Q.0': 1, 'C.Q.1': 2 }