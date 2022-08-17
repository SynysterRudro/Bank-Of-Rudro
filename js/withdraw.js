
document.getElementById('btn-withdraw').addEventListener('click', function () {
    // console.log('btn clicked');

    const withdrawAmount = getInputElementById('withdraw-field');
    const previousWithdrawAmount = getTextElementById('withdraw-amount');

    const newWithdrawAmount = previousWithdrawAmount + withdrawAmount;

    setTextElementById('withdraw-amount', newWithdrawAmount);

    const previousInitialAmount = getTextElementById('initial-amount');

    const newInitialAmount = previousInitialAmount - withdrawAmount;

    setTextElementById('initial-amount', newInitialAmount);
})