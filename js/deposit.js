
// console.log("deposit connected");

document.getElementById('btn-deposit').addEventListener('click', function () {
    // console.log('clicked');
    const depositInputAmount = getInputElementById('deposit-field');
    const previousDepositAmount = getTextElementById('deposit-amount');

    const newDepositAmount = previousDepositAmount + depositInputAmount;
    // console.log(newDepositAmount);

    setTextElementById('deposit-amount', newDepositAmount);

    const previousInitialAmount = getTextElementById('initial-amount');

    const newInitialAmount = previousInitialAmount + depositInputAmount;

    setTextElementById('initial-amount', newInitialAmount)
})