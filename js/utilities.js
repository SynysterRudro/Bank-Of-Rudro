// console.log('utilities js connected');

// this is for the login part 
function getInputElementTextById(textId) {

    const inputElement = document.getElementById(textId);
    const inputValue = inputElement.value;
    inputElement.value = '';
    return inputValue;
}

// now starts for deposit and withdraw parts 

function getInputElementById(textId) {
    const inputElement = document.getElementById(textId);
    const inputValue = parseFloat(inputElement.value);
    inputElement.value = '';
    return inputValue;

}

function getTextElementById(textId) {
    const textElement = document.getElementById(textId);
    const textValue = parseFloat(textElement.innerText);

    return textValue;
}

function setTextElementById(textId, newVariable) {
    const textElement = document.getElementById(textId);

    textElement.innerText = newVariable;
}