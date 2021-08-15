// handle deposite button
document.getElementById('deposit-button').addEventListener('click',function(){
    // get the amount deposited
    
    const depositValue = parseFloat(document.getElementById('deposit-input').value);
    const oldDeposited = parseFloat(document.getElementById('deposit-total').innerText);
    // update the deposit box
    const Total = depositValue + oldDeposited;
    document.getElementById('deposit-total').innerText = Total;
    // update total box
    const totalBalance = document.getElementById('balance-total');
    totalBalance.innerText = parseFloat(totalBalance.innerText) + depositValue;


    document.getElementById('deposit-input').value = '';
    
});

document.getElementById('withdraw-button').addEventListener('click',function(){
    // withdraw money

    const withdrawValue = parseFloat(document.getElementById('withdraw-input').value);
    const OldWithDrawnValue = parseFloat(document.getElementById('balace-withdrawn').innerText);
    const newWithDrawnValue = withdrawValue + OldWithDrawnValue;
    
    document.getElementById('balace-withdrawn').innerText = newWithDrawnValue;

    const totalBalance = parseFloat(document.getElementById('balance-total').innerText);
    const newTotalBalance = totalBalance-newWithDrawnValue;

    document.getElementById('balance-total').innerText = newTotalBalance;

    document.getElementById('withdraw-input').value = '';

});
