//Inicializar o objeto SpeechSynthesisUtterance
var speech = new SpeechSynthesisUtterance();

//Definindo o idioma
speech.lang = "en";

// array de vozes
var voices = [];

if('speechSynthesis' in window){

    let synthesis = window.speechSynthesis;

    // Regex para filtrar o idioma inglês, por exemplo en, en-US, en-GB
    let langRegex = /^en(-[a-z]{2})?$/i;

    // Obter lista de vozes inglês
    voices = synthesis.getVoices().filter(voice => langRegex.test(voice.lang));

    //Defina inicialmente a primeira voz;
    speech.voice = voices[0];

    //Define a lista de seleção de voz. 
    let voiceSelect = document.querySelector("#voices");

    voices.forEach(function(voice, i){
        voiceSelect.options[i] = new Option(voice.name.concat(" ").concat(voice.lang), i);
    });

}
else{
    console.error('Text-to-speech não suportado.');
}

document.querySelector("#rate").addEventListener("input", () => {
    // obtendo o valor da velocidade
    const rate = document.querySelector("#rate").value;
  
    // definindo velocidade
    speech.rate = rate;
  
    // atualizar rotulo de velocidade
    document.querySelector("#rate-label").innerHTML = rate;
});

document.querySelector("#volume").addEventListener("input", () => {
    // obtendo o valor do volume
    const volume = document.querySelector("#volume").value;
  
    // definindo volume
    speech.volume = volume;
  
    // atualizar rotulo do volume
    document.querySelector("#volume-label").innerHTML = volume;
});

document.querySelector("#pitch").addEventListener("input", () => {
    // obtendo valor do tom
    const pitch = document.querySelector("#pitch").value;
  
    // definindo tom
    speech.pitch = pitch;
  
    // atualizar rotulo do tom
    document.querySelector("#pitch-label").innerHTML = pitch;
});

// função de mudança de voz
document.querySelector('#voices').addEventListener("change", ()=>{
    //console.log(document.querySelector("#voices").value);
    speech.voice = voices[document.querySelector("#voices").value];
});

// função de iniciar audio
document.querySelector("#start").addEventListener("click", () => {
    // obtem o texto em inglês
    speech.text = document.querySelector("textarea").value;
  
    // inicia o audio
    window.speechSynthesis.speak(speech);
});

//função de parar audio
document.querySelector("#pause").addEventListener("click", () => {
    window.speechSynthesis.pause();
});

//função de retomar
document.querySelector("#resume").addEventListener("click", () => {
    window.speechSynthesis.resume();
});
