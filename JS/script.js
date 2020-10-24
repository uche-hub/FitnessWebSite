$(document).ready(function(){
    $(".ham-burger").click(function(){
        $(".nav").toggleClass("open")
        $(this).toggleClass("active");
    })
})