
const containerSkills = document.getElementById("container-skills");
const col1 = document.getElementById("col-11");
const col2 = document.getElementById("col-22");
const col3 = document.getElementById("col-33");

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

const typed2 = new Typed('.typed-movil', {

    strings: [
        '<i class="names2"> FRONT DEVELOPER</i>', 
        '<i class="names2"> WEB DEVELOPER</i>', 
        '<i class="names2"> GAME DEVELOPER</i>'
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


/*************EVENTO DE CAMBIO DE IMAGEN DE FONDO**************/

/**************Se establecen variables **************/


/*******Eventos del div 1*************/
/*col1.addEventListener("mouseover", function(e){
    containerSkills.style.backgroundImage = "url('https://res.cloudinary.com/pelos-locos/image/upload/v1645242335/Portafolio/Back.jpg')";
    containerSkills.style.transitionDuration= "1s";
})
col1.addEventListener("mouseout", function(e){
    containerSkills.style.backgroundImage = "";
})

/*******Eventos del div 2*************/
/*col2.addEventListener("mouseover", function(e){
    containerSkills.style.backgroundImage = "url('https://res.cloudinary.com/pelos-locos/image/upload/v1645242335/Portafolio/Front.jpg')";
})
col2.addEventListener("mouseout", function(e){
    containerSkills.style.backgroundImage = "";
})

/*******Eventos del div 3*************/
/*col3.addEventListener("mouseover", function(e){
    containerSkills.style.backgroundImage = "url('https://res.cloudinary.com/pelos-locos/image/upload/v1645242335/Portafolio/Extras.jpg')";
})
col3.addEventListener("mouseout", function(e){
    containerSkills.style.backgroundImage = "";
})*/

function changeImg1() {
    containerSkills.style.backgroundImage = "url('https://res.cloudinary.com/pelos-locos/image/upload/v1645242335/Portafolio/Back.jpg')";
    containerSkills.style.transitionDuration= "1s";
}

function quitImg() {
    containerSkills.style.backgroundImage = "";
    containerSkills.style.transitionDuration= "1s";
}

function changeImg2 () {
    containerSkills.style.backgroundImage = "url('https://res.cloudinary.com/pelos-locos/image/upload/v1645242335/Portafolio/Front.jpg')";
    containerSkills.style.transitionDuration= "1s";
}

function changeImg3 () {
    containerSkills.style.backgroundImage = "url('https://res.cloudinary.com/pelos-locos/image/upload/v1645242335/Portafolio/Extras.jpg')";
    containerSkills.style.transitionDuration= "1s";
}