
document.getElementById('btn-back').addEventListener('click', function () {
    window.location.href = 'bank.html';
})

let display = document.getElementById('answer-field');

document.getElementById('buttons').addEventListener('click', function (event) {
    /*   console.log('clicked')
      console.log(event.target.innerText); */

    switch (event.target.innerText) {

        case 'CLR':
            display.innerText = '';
            break;

        case 'Delete':
            display.innerText = display.innerText.slice(0, -1);
        case '=':

            try {
                display.innerText = eval(display.innerText);
            }
            catch {
                display.innerText = 'Error';
            }

            break;

        default:
            display.innerText += event.target.innerText;
    }
})