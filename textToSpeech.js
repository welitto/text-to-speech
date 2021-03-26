//Inicializar o objeto SpeechSynthesisUtterance
let speech = new SpeechSynthesisUtterance();

//Definindo o idioma
speech.lang = "en";

// array de vozes
let voices = [];

if('speechSynthesis' in window){

    let synthesis = window.speechSynthesis;

    // Regex para filtrar o idioma inglês, por exemplo en, en-US, en-GB
    let langRegex = /^en(-[a-z]{2})?$/i;

    // Obter lista de vozes inglês
    let voices = synthesis.getVoices().filter(voice => langRegex.test(voice.lang));

    //Defina inicialmente a primeira voz;
    speech.voice = voices[0];

    //Defina a lista de seleção de voz. 
    let voiceSelect = document.querySelector("#voices");

    voices.forEach(function(voice, i){
        voiceSelect.options[i] = new Option(voice.name.concat(" ").concat(voice.lang), i);
    });

}
else{
    console.error('Text-to-speech não suportado.');
}

// função de mudança de voz
document.querySelector('#voices').addEventListener("change", ()=>{
    //console.log(document.querySelector("#voices").value);
    speech.voice = voices[document.querySelector("#voices").value];
});

document.querySelector("#start").addEventListener("click", () => {
    // obtem o texto em inglês
    speech.text = document.querySelector("textarea").value;
  
    // inicia o audio
    window.speechSynthesis.speak(speech);
  });

// speech.text = "Hello";

// window.speechSynthesis.speak(speech);

// document.querySelector("#talk").addEventListener("click", () => {
//     speech.text = document.querySelector("textarea").value;
// });
