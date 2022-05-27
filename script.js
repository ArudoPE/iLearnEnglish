"use strict";

//Sound Constructor
function sound(source){
    this.sound = document.createElement("audio");
    this.sound.src = source;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }
}

//playSound function
const playSound = event => {
    switch(event.srcElement.alt) {
        case "ear":
            earSound.play();
            break;
        case "eye":
            eyeSound.play();
            break;
        case "hand":
            handSound.play();
            break;
        case "head":
            headSound.play();
            break;
        case "mouth":
            mouthSound.play();
            break;
        case "leg":
            legSound.play();
            break;
        case "nose":
            noseSound.play();
            break;
        default:
            console.log("Error, no sound founded");
    }
}

//LOADING SOUNDS

const earSound = new sound("./assets/sounds/ear.mp3");

const eyeSound = new sound("./assets/sounds/eye.mp3");

const handSound = new sound("./assets/sounds/hand.mp3");

const headSound = new sound("./assets/sounds/head.mp3")

const legSound = new sound("./assets/sounds/leg.mp3");

const mouthSound = new sound("./assets/sounds/mouth.mp3");

const noseSound = new sound("./assets/sounds/nose.mp3");

//CLICK EVENTS

const earCard = document.getElementById("earCard");

earCard.addEventListener("click", playSound);

const eyeCard = document.getElementById("eyeCard");

eyeCard.addEventListener("click", playSound);

const handCard = document.getElementById("handCard");

handCard.addEventListener("click", playSound);

const headCard = document.getElementById("headCard");

headCard.addEventListener("click", playSound);

const legCard = document.getElementById("legCard");

legCard.addEventListener("click", playSound);

const mouthCard = document.getElementById("mouthCard");

mouthCard.addEventListener("click", playSound);

const noseCard = document.getElementById("noseCard");

noseCard.addEventListener ("click", playSound);


