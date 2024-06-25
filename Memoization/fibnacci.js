function fib(n, app = {}){
    if(app[n]) return app[n];
    if(n === 0)
        return 0;
    if(n===1 || n===2){
        return 1;
    }
    return app[n] =fib(n-1)+ fib(n-2);

}
console.time()
console.log(fib(6))
console.timeEnd()


// Now we are going to talk about the Memoization;
/* Memoization is a technique to store the return value of a function in the cached memory. */