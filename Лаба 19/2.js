let buttonClicks = 0;
let textInput = document.getElementById('text-input');
let colorButton = document.getElementById('colorButton');

colorButton.addEventListener('click', function() {
    buttonClicks++;
    if (buttonClicks === 1) {
        textInput.value = 'текстовое поле';
    } else {
        textInput.style.color = (textInput.style.color === 'blue') ? 'red' : 'blue';
    }
});