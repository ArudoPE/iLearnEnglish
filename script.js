'use strict';

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
    console.log(event);
    switch(event.srcElement.alt) {
        case "ear":
            earSound.play();
            break;
    }
}



//LOADING SOUNDS

const earSound = new sound("./assets/sounds/ear.mp3");

const eyeSound = new sound("./assets/sounds/eye.mp3");

const handSound = new sound("./assets/sounds/hand.mp3");

const headSound = new sound("./assets/sounds/leg.mp3");

const mouthSound = new sound("./assets/sounds/nose.mp3");

//CLICK EVENTS

const earCard = document.getElementById('earCard');

earCard.addEventListener("click", playSound);


