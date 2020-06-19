$(document).ready(function(){
    $('body').scrollspy();  
    var scroll = new SmoothScroll('a[href*="#section"]', {
        speed: 900,
        speedAsDuration: true
    })   
});
