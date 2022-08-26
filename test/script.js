$(document).ready(function(){
    $("#header").click(function(){
        const header = $("#header")
        console.log(header)
        const x = header
        for (let i=0;i<100;i++){
            x.clone().appendTo("body");
        }
    })
    function control(e) {
        if(e.keyCode === 37) {
            moveLeft()
        }
        else if(e.keyCode === 38) {
            rotate()
        }
        else if(e.keyCode === 39) {
           moveRight()            
        }   
        else if(e.keyCode === 40) {
           moveDown()
        }       
    }
    document.addEventListener('keyup', control)

})