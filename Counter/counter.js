function createCounter(){
    let count = 0;

    return{
        increment(){
            count++;
            displayCount();
        },
        decrement(){
            count--;
            displayCount();
        },
        getCount(){
            return count;
        }
    }
}

const counter = createCounter();

function displayCount(){
    document.getElementById('displayCount').innerText = counter.getCount();
}

document.getElementById('increment').addEventListener('click',()=>{
    counter.increment();
})

document.getElementById('decrement').addEventListener('click', ()=>{
    counter.decrement();
})
