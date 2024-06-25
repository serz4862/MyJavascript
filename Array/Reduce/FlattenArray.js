function flatten(arr){
    return arr.reduce((acc,red)=> Array.isArray(red)? acc.concat(flatten(red)):acc.concat(red),[])
}


function flatten2(arr){
    return arr.reduce((accumulator,currentValue)=> Array.isArray(currentValue)? accumulator.concat(flatten2(currentValue)):accumulator.concat(currentValue),[])
    
}

// function flatten(arr) {
//     return arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(flatten(val)) : acc.concat(val), []);
// }
 let aa = [[12,12,12,[12,23]],1,2]
const Arr1 = flatten(aa);
console.log(Arr1)


// function sum(arr){
//     const total = arr.reduce((accumulator, currentValue) =>{
//         return accumulator + currentValue
//     },0);
// }

// let Arr2 = [1,2,3,4,5,5,5,23]
// const totalSum = sum(Arr2)
// console.log(totalSum);

const numbers = [1, 2, 3, 4, 5];

function sum(arr){
    const sum = arr.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    }, 0);
    return sum
}


console.log(sum(numbers)); // 15

function Max(arr){
    const Maximum = arr.reduce((accumulator, currentValue)=>{
        return Math.max(accumulator,currentValue)
    }, -Infinity)
    return Maximum
}

console.log(Max(Arr1))

function Flatten1(arr){
    const flatten = arr.reduce((accumulator, currentValue)=>{
        return accumulator.concat(currentValue)
    },[])
    return flatten
}

console.log(Flatten1(aa))