document.getElementById('btn-withdraw').addEventListener('click', function() {
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdraw = withdrawField.value;
    const newWithdrawFloat = parseFloat(newWithdraw);

    const previousWithdraw = document.getElementById('withdraw-add');
    const previousWithdrawString = previousWithdraw.innerText;
    const previousWithdrawFloat = parseFloat(previousWithdrawString);

    const currentWithdraw = newWithdrawFloat + previousWithdrawFloat;

    previousWithdraw.innerText = currentWithdraw;

    const previousTotalBalance = document.getElementById('balance-total');
    const previousTotalBalanceString = previousTotalBalance.innerText;
    const previousTotalBalanceFloat = parseFloat(previousTotalBalanceString);

    const currentTotalBalance = previousTotalBalanceFloat - newWithdrawFloat;

    previousTotalBalance.innerText = currentTotalBalance;

    withdrawField.value = '';
})