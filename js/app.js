document.getElementById('calculate').addEventListener('click', function () {
  const totalIncome = document.getElementById('income-input').value;
  const foodCost = document.getElementById('food-input').value;
  const rentCost = document.getElementById('rent-input').value;
  const clothCost = document.getElementById('cloth-input').value;
  if (totalIncome > 0 && foodCost > 0 && rentCost > 0 && clothCost > 0) {
    const totalCost = parseInt(foodCost) + parseInt(rentCost) + parseInt(clothCost);
    if (totalCost > totalIncome) {
      alert()
    } else {
      const totalExpensesText = document.getElementById('total-expenses');
      const totalExpenses = totalExpensesText.innerText;
      totalExpensesText.innerText = totalCost;
      const totalBalanceText = document.getElementById('balance');
      const totalBalance = totalBalanceText.innerText;
      totalBalanceText.innerText = parseInt(totalIncome) - totalCost;
    }
  } else {
    alert()
  }
})

document.getElementById('save').addEventListener('click', function () {
  const totalSaveValue = document.getElementById('save-input');
  const totalSave = parseFloat(totalSaveValue.value)
  if (totalSave < 0 && typeof totalSaveValue.value == 'string') {
    alert()
  } else {
    const totalIncomeValue = document.getElementById('income-input');
    const totaIncome = parseFloat(totalIncomeValue.value);
    const savingAmountText = document.getElementById('total-save');
    const savingAmount = savingAmountText.innerText;
    const totalBalanceText = document.getElementById('balance');
    const totalBalance = totalBalanceText.innerText;
    const totalRemainingText = document.getElementById('remain-amount');
    const remainingBalance = totalRemainingText.innerText;
    savingAmountText.innerText = (totaIncome * totalSave) / 100;
    totalRemainingText.innerText = parseFloat(totalBalanceText.innerText) - parseFloat(savingAmountText.innerText);
  }

})