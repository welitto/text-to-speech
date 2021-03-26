//Inicialize o objeto SpeechSynthesisUtterance
let speech = new SpeechSynthesisUtterance();

//Definindo o idioma
speech.lang = "en";

// array de vozes
let voices = [];

window.speechSynthesis.onvoiceschanged = () => {
    // Obter lista de vozes
    voices = window.speechSynthesis.getVoices();

    //Defina inicialmente a primeira voz;
    speech.voice = voices[0];

    //Defina a lista de seleção de voz. 
    let voiceSelect = document.querySelector("#voices");
    voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));
}


// speech.text = "Hello";

// window.speechSynthesis.speak(speech);

// document.querySelector("#talk").addEventListener("click", () => {
//     speech.text = document.querySelector("textarea").value;
// });
