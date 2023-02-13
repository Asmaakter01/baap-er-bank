document.getElementById('btn-deposit').addEventListener('click', function() {
    const depositField = document.getElementById('deposit-field');
    const newDeposit = depositField.value;
    const newDepositFloat = parseFloat(newDeposit);

    const depositAdd = document.getElementById('deposit-add');
    const previousDeposit = depositAdd.innerText;
    const previousDepositFloat = parseFloat(previousDeposit);

    const currentDeposit = newDepositFloat + previousDepositFloat;

    depositAdd.innerText = currentDeposit;

    const previousTotalBalance = document.getElementById('balance-total');
    const previousTotalBalanceString = previousTotalBalance.innerText;
    const previousTotalBalanceFloat = parseFloat(previousTotalBalanceString);

    const currentTotalBalance = previousTotalBalanceFloat + newDepositFloat;
    previousTotalBalance.innerText = currentTotalBalance;

    depositField.value = '';
})