import { alphabet } from "./data.js"
import { capAlphabet } from "./data.js"
import { morseCode } from "./data.js"

// i define all languages in an array
// then initialize the from language, which is the initial base language
// and the to language, which is the target of our base language
const languages = ["ENGLISH", "MORSE"];
export var fromLanguage = languages[0];
export var toLanguage = languages[1];

// this is the function that triggers when the swap-button is clicked
// we change our from/toLanguage, our descriptions MORSE/ENGLISH
// and our textarea-values
export const swapLanguage = () => {
    let tempLang = fromLanguage;
    fromLanguage = toLanguage;
    toLanguage = tempLang;
    updateDescriptions();
    swapTextareaValues();
}

const inputDesc = document.getElementById('input-desc');
const outputDesc = document.getElementById('output-desc');

function updateDescriptions(){
    inputDesc.innerHTML = fromLanguage;
    outputDesc.innerHTML = toLanguage;
}

const translatorInput = document.getElementById('translator-input');
const translatorOutput = document.getElementById('translator-output');
function swapTextareaValues(){
    let tempValue = translatorInput.value;
    translatorInput.value = translatorOutput.value;
    translatorOutput.value = tempValue;
}

export const translator = (letter) => {

    let position = alphabet.indexOf(letter)
    let morseTranslation = morseCode[position]
    
    return morseTranslation
}

 export const translatorReverse = (morseLetter) => {
    let morseLetterIndex = morseCode.indexOf(morseLetter);
    if (morseLetterIndex == -1) { return ""; }
    let alphabetLetter = alphabet[morseLetterIndex];
    return alphabetLetter;
 }


 // renaming the functions to readable instantly recognizable names makes
 // it much easier for future developers to understand whats going on
export const morseToEnglish = (morseCode) => {
    let translation = "";
    let morseLetters = morseCode.split(" ");
    for (let morseLetter of morseLetters){
        translation += translatorReverse(morseLetter);
    }
    return translation;
}

// this is actually a not needed function
// just like i did in the function above "morseToEnglish"
// you can just the JS-function .split to create and array from a string
// you just have to provide the function with a delimiter, in our case its space " "
// check the comment on the function below
export const transformInputToArray = (str) => {
    let stringToIterate = str;
    let arr = [];
    for(let i=0; i< stringToIterate.length; i++){
        arr[i] = stringToIterate.charAt(i);
    
    }
    return arr
}


export const englishToMorse = (value) => {
    let morse = ""
    let array = transformInputToArray(value) // you can swap this out with value.split(" ")
    for(let i=0; i<array.length; i++){
        morse += `${translator(array[i])} `
    }

    return morse
}
