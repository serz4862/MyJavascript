const arrayOfObjects = [{a: 10}, {b: 2}, {c: 3}, {a: 20, d: 4}];

const flattenedObject = arrayOfObjects.reduce((acc, obj) => {
    return {...acc, ...obj};
}, {});

console.log(flattenedObject); // { a: 2, b: 2, c: 3, d: 4 }