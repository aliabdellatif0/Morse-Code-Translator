import {englishToMorse, morseToEnglish, swapLanguage, fromLanguage} from "./translator.js"
const swapButton = document.getElementById('swap-button');

swapButton.addEventListener("click", () => {
    swapLanguage();
});

const translatorInput = document.getElementById('translator-input');
const translatorOutput = document.getElementById('translator-output');
translatorInput.addEventListener("input", startTranslation);

function startTranslation(e){
    console.log(e.target.value);
    let sourceText = e.target.value;
    let translation = "";
    if(fromLanguage == "ENGLISH"){
        translation = englishToMorse(sourceText);
    }
    else{
        translation = morseToEnglish(sourceText.toLowerCase());
    }
    translatorOutput.value = translation;
}