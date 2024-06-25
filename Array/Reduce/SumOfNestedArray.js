// sum of nested Array:
const arr = [[1,2,3,[23,3,23],5],5,7,8,[9,10]]
const arr1 = [1,2,3,4,5,6,7,8]

function SumOfNestedArray(arr){
    let sum = arr.reduce((accumulator, currentValue)=>{
        if(Array.isArray(currentValue)){
            return accumulator + SumOfNestedArray(currentValue)
        }else{
            return accumulator + currentValue
        }
    },0)
    return sum;
}
console.log(SumOfNestedArray(arr));
console.log(SumOfNestedArray(arr1));