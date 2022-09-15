//variables
let numberRegex = /[0-9]+/
let input = 0
let stringInput 
let check = false
let color = "red"
let dom = {}
let interval = 0;
//storage is backend data
let storage = ["no1", "no2", "no3", "no4", "no5", "no6", "no7", "no8", "no9", "no10", "no11", "no12", "no13", "no14"]
//consider storage array as backend data
let contents = ["no1", "no2", "no3", "no4", "no5", "no6", "no7"]
//timer variables

let seconds = 0;
let minutes = 0;
let hours = 0;
let days = 0;

//main functions
let allDomLoadedFunctions = () => {
domVariables()  
hour()
positionElement(contents, 6)

}

let others = () => {
scrollingDown()
}

//parts of the main function

let domVariables = () => {
dom.block = document.querySelector("#box");
dom.paragraph = document.querySelector("#paragraph");
dom.timer = document.querySelector('#timer')
} 

let scrollingDown = () => {
    stringInput = scrollY + "px"
    dom.block.style.marginTop = stringInput
}

let timer = () => {
    seconds+=1
    if(seconds === 60){
    minutes+=1
    seconds = 0
    }
    if(minutes === 60){
    hours+=1
    minutes = 0;    
    }
    if(hours === 24){
    days+=1
    hours = 0;    
    }
    dom.timer.innerHTML = days + " days " + hours + ":" + minutes + ":" + seconds
}
let hour = () => {
    setInterval(timer, 1000)
}

let divCreator = () => {
    let div = document.createElement("div")
    let p = document.createElement("p")
    div.style.cssText = "margin-left: 5%; width: 90%; text-align: center;"
    div.style.borderCollapse = "collapse"
    div.appendChild(p)   
    return div
}
let positionElement = (contents) => {
    for(let i = 0; i<= contents.length-1; i++){
        let div = divCreator()
        let p = div.getElementsByTagName("p")[0]
        p.innerText = contents[i]
        div.id = "div " + (i+1)        
        dom.block.appendChild(div)
    }    
}

//
changeColor = () => dom.block.style.cssText = "backround-color: blue"
//


//events
document.addEventListener("DOMContentLoaded", allDomLoadedFunctions)
document.addEventListener("scroll", scrollingDown)

//promises