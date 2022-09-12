//variables
let numberRegex = /[0-9]+/
let input = 0
let stringInput 
let check = false
let color = "red"
let dom = {}


//main functions
let allDomLoadedFunctions = () => {
domVariables()   
}

let others = () => {
scrollingDown()
}

//small parts of the main functions


let domVariables = () => {
dom.block = document.querySelector("#box");
dom.paragraph = document.querySelector("#paragraph");
} 

let scrollingDown = () => {
    input += 5.3
    stringInput = input.toString() + "%"
    dom.block.style.marginTop = stringInput
    console.log(scrollY)
}

let debug = (x) => {
return dom.paragraph.innerHtml = x  
} 


//events
document.addEventListener("DOMContentLoaded", allDomLoadedFunctions)
document.addEventListener("scroll", scrollingDown)


