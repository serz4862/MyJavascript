const addCardBtn = document.querySelector(".addcardbtn")
const container = document.querySelector(".container")

let count = 1

addCardBtn.addEventListener('click',()=>{
    const newCard = document.createElement('div')
    newCard.classList.add('card')
    newCard.innerHTML= count++
    container.append(newCard)
})

container.addEventListener('click',(e)=>{
    if(e.target !== container)
        e.target.remove()
})