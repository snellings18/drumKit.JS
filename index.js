


let buttons = document.querySelectorAll(".drum").length;  
    for(let i = 0; i < buttons; i++) {
            document.querySelectorAll(".drum")[i].addEventListener("click", function() {
                let buttonClick = this.innerHTML;
                let url = "sounds/";
                switch (buttonClick) {
                    case "w": url += "snare.mp3"; break;
                    case "a": url += "tom-1.mp3"; break;
                    case "s": url += "tom-2.mp3"; break;
                    case "d": url += "tom-3.mp3"; break;
                    case "j": url += "tom-4.mp3"; break;
                    case "k": url += "crash.mp3"; break;
                    case "l": url += "kick-bass.mp3"; break;
                }

                let audio = new Audio(url);
                audio.play();

                buttonAnimation(buttonClick);
            }); 

    }
        
class Beat {
    constructor(audioSrc) {
        this.audio = new Audio(audioSrc);
        // console.log(this.audio);
    }

    play = () => {
        this.audio.currentTime = 0; // To ensure when they douple click it only plays once.
        this.audio.play();
    }
}

class Button {
    constructor(keyCode){
        this.keyCode = keyCode;
        this.element = document.getElementById(keyCode);
    }
}

let beats = {
    "87": {
        beat: new Beat("./sounds/snare.mp3"),
        button: new Button(87),
    },
    "65": {
        beat: new Beat("./sounds/tom-1.mp3"),
        button: new Button(65),
    },
    "83": {
        beat: new Beat("./sounds/tom-2.mp3"),
        button: new Button(83),
    },
    "68": {
        beat: new Beat("./sounds/tom-3.mp3"),
        button: new Button(68),
    },
    "74": {
        beat: new Beat("./sounds/tom-4.mp3"),
        button: new Button(74),
    },
    "75": {
        beat: new Beat("./sounds/crash.mp3"),
        button: new Button(75),
    },
    "76": {
        beat: new Beat("./sounds/kick-bass.mp3"),
        button: new Button(76),
    }
}

triggerBeat = (event) => {
    const keyCode = event.keyCode;
    if(keyCode in beats){
        let keyPress = beats[keyCode];
        keyPress.beat.play();
        console.log(event);
    }
    buttonAnimation(event.key);
}

function buttonAnimation(currentKey) {
    let activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}


document.addEventListener('keydown', triggerBeat);
