let number = document.getElementById("number")
let logger = document.getElementById("log")
let count = 0

function increment(){
    count += 1
    number.textContent = count
}

function decrement(){
    count -= 1
    number.textContent = count
    if (count<0){
        count = 0
        number.textContent = count
    }
}

function save(){
    let countlog = count + " - "
    logger.textContent += countlog
    count = 0
    number.textContent = count
}