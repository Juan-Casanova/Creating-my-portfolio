const typed = new Typed('.typed', {

    strings: [
        '<i class="names"> FRONT DEVELOPER</i>', 
        '<i class="names"> WEB DEVELOPER</i>', 
        '<i class="names"> GAME DEVELOPER</i>'
    ],

    typeSpeed: 75,//tiempop en poner una letra
    startDelay: 300,//tempo de retarso para iniciar animacion
    backSpeed: 75, //tiempo en borar la palabra
    shuffle: true,
    backDelay: 3000, //tiempo para esperar borarr la palabra
    loop: true,
    loopCount: false,
    showCursor: true,
    cursorChar: '|', 
    contentType: 'html'

});