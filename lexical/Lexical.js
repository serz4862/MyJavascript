// function outer(){
//     let outerVariable = " I am outer Variable";
//     function inner(){
//         const innerVariable = " I am inner Variable.";
//         console.log(outerVariable);
//         console.log(innerVariable);
//     }
//     inner();
// }

// outer();

function outerFunction() {
    let outerVariable = 'I am from outer function';

    function innerFunction() {
        let innerVariable = 'I am from inner function';
        console.log(outerVariable); // Accessible due to lexical scope
        console.log(innerVariable); // Accessible within its own scope
    }

    innerFunction();
    // console.log(innerVariable); // Error: innerVariable is not defined
}
// innerFunction();
outerFunction();
// console.log(outerVariable); // Error: outerVariable is not defined