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
let contents = []
//timer variables


let seconds = 0;
let minutes = 0;
let hours = 0;
let days = 0;

//main functions
let allDomLoadedFunctions = () => {
domVariables()  
contentCreator()
hour()
positionElement(contents, 6)

}

let others = () => {
scrollingDown()
}

//parts of the main function

let contentCreator = () => {
    while (contents.length<7)
    {   
    x = Math.floor(Math.random()*14)
    if(contents.includes(storage[x]) === false)
    contents.push(storage[x])
    }
    }

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
    let a = document.createElement("a")
    a.href = "aSite.com"
    a.target = "_blank"
    div.style.cssText = "margin-left: 5%; width: 90%; text-align: center;"
    div.appendChild(a)
    a.appendChild(p)   
    return div
}
let positionElement = (contents) => {
    for(let i = 0; i<= contents.length-1; i++){
        let div = divCreator()
        let p = div.getElementsByTagName("p")[0]
        let a = div.getElementsByTagName("a")[0]
        a.style.color = "black"
        a.style.textDecoration = "none"
        p.innerText = contents[i]
        div.id = "div " + (i+1)
        if(i === 0){
            div.style.borderTop = "1px solid black"
        }        
        dom.block.appendChild(div)
    }    
}

let takeFromStorage = (storage) => {
    
} 

//events
document.addEventListener("DOMContentLoaded", allDomLoadedFunctions)
document.addEventListener("scroll", scrollingDown)

//promises