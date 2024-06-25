const myPromise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const condition = true;
        if(condition){
            resolve(`Promise is resolved`)
        }else{
            reject(`Promise is rejected`)
        }    
    },2000)
})

myPromise
.then((result)=>{
    console.log(result)
})
.catch((error)=>{
    console.error(error)

})
.finally(()=>{
    console.log("Promise is settled")

})


// Promises are always initialized with a constructor and then a instance is created 

const firstPromise = new Promise((resolve, reject) => {
    resolve(10);
});

firstPromise
    .then(result => {
        console.log(result); // 10
        return result * 2;
    })
    .then(result => {

        console.log(result); // 20
        return result * 3;
    })
    .then(result => {
        console.log(result); // 60
        return result * 5;
    })
    .then((result)=>{
        setTimeout(()=>{
            console.log(result)

        },2000)
    })
    .catch(error => {
        console.error(error);
    });

    const promise1 = new Promise((resolve, reject) => {
        setTimeout(resolve, 500, 'one');
    });
    const promise2 = new Promise((resolve, reject) => {
        setTimeout(resolve, 100, 'two');
    });
    
    Promise.race([promise1, promise2]).then(value => {
        console.log(value); // "two"
    });