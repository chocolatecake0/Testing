$(document).ready(function(){
    $("#header").click(function(){
        const header = $("#header")
        console.log(header)
        const x = header
        for (let i=0;i<100;i++){
            x.clone().appendTo("body");
        }
    })

})