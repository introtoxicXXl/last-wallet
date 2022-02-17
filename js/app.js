function calculate() {
  const totalIncome = getInputValue('income-input');
  const foodCost = getInputValue('food-input');
  const rentCost = getInputValue('rent-input')
  const clothCost = getInputValue('clothe-input');
  if (totalIncome > 0 && foodCost > 0 && rentCost > 0 && clothCost > 0) {
    const totalCost = foodCost + rentCost + clothCost;
    if (totalCost > totalIncome) {
      alert()
    } else {
      document.getElementById('total-expenses').innerText = totalCost;
      document.getElementById('balance').innerText = totalIncome - totalCost;
    }
  } else {
    alert()
  }
}


function save() {
  const totalIncome = getInputValue('income-input');
  if (totalIncome < 0) {
    alert()
  } else {
    const totalSave = getInputValue('save-input');
    if (totalSave < 0) {
      alert();
    } else {
      const totalBalanceText = document.getElementById('balance');
      const totalBalance = totalBalanceText.innerText;
      const savingBalance = document.getElementById('saving-balance');
      savingBalance.innerText = `${(totalIncome * totalSave) / 100}`;
      const remainingBalance = document.getElementById('remain-balance')
      remainingBalance.innerText = `${(totalBalance - savingBalance.innerText)}`;
      if (totalBalance < savingBalance.innerText) {
        alert()
        savingBalance.innerText = 0;
        remainingBalance.innerText = 0;
      } else {
        savingBalance.innerText = `${(totalIncome * totalSave) / 100}`;
        remainingBalance.innerText = `${(totalBalance - savingBalance.innerText)}`;
      }
    }
  }




}

function getInputValue(value) {
  const productInput = document.getElementById(value);
  const productInputValue = parseFloat(productInput.value);
  return productInputValue;
}
