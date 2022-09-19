let dom = {}
let storage = ["no1", "no2", "no3", "no4", "no5", "no6", "no7", "no8", "no9", "no10", "no11", "no12", "no13", "no14"]
let contents = []
let checker = false
let indicator = false;
let timeOut 
console.log(typeof whatever)
let contentCreator = () => {
while (contents.length<7)
{   
    x = Math.floor(Math.random()*14)
    if(contents.includes(storage[x]) === false)
    contents.push(storage[x])
}
}

let domFunction = () => {       
domVariables()
}

let domVariables = () => { 
    dom.testing = document.getElementById("testing")      
}
let timeoutFunction = () => {
    console.log("time out")
    dom.testing.innerHTML = "numbers come to here2"
}

let createFunction = () => {
    contents = []
    contentCreator() 
    dom.testing.innerHTML = contents
    //bottom of the function resets timeout when clicked more than once
    if (indicator)
    clearTimeout(timeOut)
    indicator = true
    timeOut = setTimeout(timeoutFunction, 15000)
}


document.addEventListener("DOMContentLoaded", domFunction)

