let numberRegex = /[0-9]+/
let input = 100
let check = false
let color = "red"
//put everything inside this function
let event = (x) => {
document.addEventListener("DOMContentLoaded", x)
}

document.addEventListener("DOMContentLoaded", loop)
function contentFunction(){
    const paragraph = document.querySelector("#paragraph");
    console.log(paragraph)
    color = color === "red" ? "blue" : "red"; 
    paragraph.style.color = color;
  } 
function loop(){
    setInterval(contentFunction, 5000)
}
document.addEventListener("scroll",scrollingDown)   
function scrollingDown(){
  const block = document.querySelector("#box")
  check = true
  block.style.marginTop = "100%"; 
  color = color === "red" ? "blue" : "red"; 
  block.style.color = color;
  console.log(block)
//  console.log("1: ", input)
  input = marginalizer(input, check)
//  console.log("2: ", input)  
  block.style.marginBottom = input;
  input = input.match(numberRegex)[0]
  input = parseInt(input)
//  console.log("3: ",input)
} 
function scrollingUp(){
  const block = document.querySelector("#box")
  check = false
  console.log("1: ", input)
  input = marginalizer(input, check)
  console.log("2: ", input)  
  block.style.marginBottom = -input;
  input = input.match(numberRegex)
  console.log("3: ",input)
  console.log(block)
  parseInt(input)
  
}

setInterval(scrollingUp, 1000)
function marginalizer(input, check){
  if(check==true){
  input+=1
  }
  else if(check==false) {
  input-=1
  }
  return String(input) + "px"
}