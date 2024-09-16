let count = 0
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

function increment(){
    count++
    countEl.textContent = count
}

function save(){
    let entery = count + " - "
    saveEl.textContent+=entery
    count = 0
    countEl.innerText = count  
}
