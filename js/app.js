//calculated function
function calculate() {
  const totalIncome = getInputValue('income-input');
  const foodCost = getInputValue('food-input');
  const rentCost = getInputValue('rent-input')
  const clothCost = getInputValue('clothe-input');
  if (totalIncome > 0 && foodCost > 0 && rentCost > 0 && clothCost > 0) { //error handeling
    const totalCost = foodCost + rentCost + clothCost;
    if (totalCost > totalIncome) { //error handeling
      alert('Hey Dude How Your Expenses is more then Your Income??');
    } else {
      document.getElementById('total-expenses').innerText = totalCost;
      document.getElementById('balance').innerText = totalIncome - totalCost;
    }
  } else {
    alert('Please Sir Input A Valid Number.')
  }
}
//save function
function save() {
  const totalIncome = getInputValue('income-input');
  
  if (totalIncome < 0) { //error handeling
    alert('Sir Look At Your Income Field.')
  } else {
    const totalSave = getInputValue('save-input');
    if (totalSave < 0) { //error handeling
      alert('Vaiya Taka Na Hoy Negative Kamailen Tai bole Savings O??');
    } else {
      const totalBalanceText = document.getElementById('balance');
      const totalBalance = totalBalanceText.innerText;
      const savingBalance = document.getElementById('saving-balance');
      savingBalance.innerText = `${(totalIncome * totalSave) / 100}`;
      const remainingBalance = document.getElementById('remain-balance')
      remainingBalance.innerText = `${(totalBalance - savingBalance.innerText)}`;
      if (totalBalance < savingBalance.innerText) { //error handeling
        alert('Apni j taka income koren ete khorochei cole jay.Savings to eto korte parben na.')
        savingBalance.innerText = 0;
        remainingBalance.innerText = 0;
      } else {
        savingBalance.innerText = `${(totalIncome * totalSave) / 100}`;
        remainingBalance.innerText = `${(totalBalance - savingBalance.innerText)}`;
      }
    }
  }
}
//common get input function
function getInputValue(value) {
  const productInput = document.getElementById(value);
  const productInputValue = parseFloat(productInput.value);
  return productInputValue;
}