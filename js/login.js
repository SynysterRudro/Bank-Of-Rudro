
// console.log("Login js connected");

document.getElementById('btn-login').addEventListener('click', function () {
    console.log('button clicked');

    const emailValue = getInputElementTextById('email-field');
    const passwordValue = getInputElementTextById('password-field');
    // console.log(emailValue, passwordValue);

    if (emailValue == 'rudrosingh82@gmail.com' && passwordValue == '123') {
        // console.log('login confirmed');
        window.location.href = 'bank.html';
    }
    else {
        alert('unknown user,make sure to give right email and password');
    }
})