$(document).ready(function(){
    $("#header").click(function(){
        const header = $("#header")
        console.log(header)
        const x = header
        console.log(x)
        for (let i=0;i<100;i++){
            x.clone().appendTo("body");
        }
    })

})