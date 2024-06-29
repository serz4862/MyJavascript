// find the Occurrences  of the element
const fruit = ['apple','banana', 'apple', 'banana', 'pineapple']

function FindOccurrences(arr){
    const element = arr.reduce((accumulator, currentValue)=>{
        accumulator[currentValue] = (accumulator[currentValue] || 0) +1
        return accumulator;
    },[])
    return element

}
console.log(FindOccurrences(fruit))

// const elements = ['apple', 'banana', 'apple', 'cherry', 'banana', 'banana'];

// const countOccurrences = elements.reduce((acc, element) => {
//     acc[element] = (acc[element] || 0) + 1;
//     return acc;
// }, {});

// console.log(countOccurrences); // { apple: 2, banana: 3, cherry: 1 }