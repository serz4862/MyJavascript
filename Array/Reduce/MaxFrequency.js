const number = [ 1,23,34,3,3,3,3,5,2,4,25,6,3,6,6,6,6,6,6,6,6]

function MostFrequentNumber(arr){
    const count = arr.reduce((accumulator, currentValue)=>{
        accumulator[currentValue] = (accumulator[currentValue] || 0) + 1;
        if(accumulator[currentValue]> accumulator.maxCount){
            accumulator.maxCount = accumulator[currentValue];
            accumulator.maxElement = currentValue;

        }
        return accumulator
    },{ maxCount: 0, maxElement: null })
    return count.maxElement;
}

console.log(MostFrequentNumber(number))

// function findMostFrequent(numbers) {
//     const mostFrequent = numbers.reduce((acc, number) => {
//         acc[number] = (acc[number] || 0) + 1;
//         if (acc[number] > acc.maxCount) {
//             acc.maxCount = acc[number];
//             acc.maxElement = number;
//         }
//         return acc;
//     }, { maxCount: 0, maxElement: null });

//     return mostFrequent.maxElement;
// }

// const numbers = [1, 2, 3, 2, 3, 2, 1, 3, 3];
// console.log(findMostFrequent(numbers)); // 3
// const numbers = [1, 2, 3, 2, 3, 2, 1, 3, 3];

// const mostFrequent = numbers.reduce((acc, number) => {
//     acc[number] = (acc[number] || 0) + 1;
//     if (acc[number] > acc.maxCount) {
//         acc.maxCount = acc[number];
//         acc.maxElement = number;
//     }
//     return acc;
// }, { maxCount: 0, maxElement: null });

// console.log(mostFrequent.maxElement); // 3