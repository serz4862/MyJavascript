function createCounter() {
    let count = 0;

    return function() {
        count++;
        console.log(count);
        console.log(`I am a number ${count}`)
    };
}

const counter = createCounter();
counter(); // Output: 1
counter(); // Output: 2
counter(); // Output: 3

const anotherCounter = createCounter();
anotherCounter(); // Output: 1
anotherCounter(); // Output: 1
anotherCounter(); // Output: 1