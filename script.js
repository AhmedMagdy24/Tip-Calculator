
const calcBtn = document.getElementById('btn')

calcBtn.addEventListener('click', totalValue)


function totalValue(){
    const billAmount = parseFloat(document.getElementById('bill_value').value)
    const tipAmountInput = parseFloat(document.getElementById('tip_value').value)
    const displayBill = document.getElementById('total-tip')
    const displayTip = document.getElementById('total-bill')

    const tipCalc = billAmount * (tipAmountInput / 100)
    const totalCalc = billAmount + tipAmountInput

    displayBill.innerHTML = tipCalc
    displayTip.innerHTML = totalCalc
    
}

