const msgEl = document.getElementById('msg');

const randomNum = getRandomNumber();

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

let recognition = new window.SpeechRecognition();

recognition.start();

function getRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

function onSpeak(e) {
    const msg = e.results[0][0].transcript;

    //writeMessage(msg);
    //checkNumber(msg);
}

// Speak result
recognition.addEventListener('result', onSpeak);