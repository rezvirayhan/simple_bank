document.getElementById('deposit-button').addEventListener('click', function(){
    const depositInput = document.getElementById('deposit-input');
const nweDepositeAmountText = depositInput.value;
const depositTotal = document.getElementById('diposit-total')
const nweDepositeAmount =  parseFloat(nweDepositeAmountText);
const prevDepositeText = depositTotal.innerText;
const prevDepositeAmount =  parseFloat(prevDepositeText);
const newDepositeTotal = prevDepositeAmount + nweDepositeAmount;

depositTotal.innerText = newDepositeTotal;

// UPDATE BLANCE
const balanceTotal = document.getElementById('blance-total');
const balanceTotalText = balanceTotal.innerText;
const prevBlacneTotal = parseFloat(balanceTotalText);
const newBlanceTotal = prevBlacneTotal + nweDepositeAmount;
balanceTotal.innerText = newBlanceTotal;
  
    // clayerInput
    depositInput.value = '';
})
// Withdarw Start
document.getElementById('withdraw-button').addEventListener('click', function(){
    const withdrawInput = document.getElementById('withdraw-input');
    const WithdarwAmmountText = withdrawInput.value;
    const newWithdarwAmount = parseFloat(WithdarwAmmountText);
    //  WithdarwTotal
    const WithdarwTotal = document.getElementById('withdraw-total');
    const prevwithdaawText = WithdarwTotal.innerText;
    const prevwithdrawTotal = parseFloat(prevwithdaawText);
    const newWithdarawTotal = prevwithdrawTotal + newWithdarwAmount;
    WithdarwTotal.innerText = newWithdarawTotal;

    // UpdateBlance

    const blanceTotal = document.getElementById('blance-total');
    const prevBlacneText = blanceTotal.innerText;
    const prevBlacneTotal = parseFloat(prevBlacneText);
    const newBlanceTotal = prevBlacneText - newWithdarwAmount;

    blanceTotal.innerText = newBlanceTotal;
    
    // clayerInput
    withdrawInput.value = '';
})