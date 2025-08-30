// Add event listener for add money
document.getElementById('btn-add-money').addEventListener('click', (event)=>{
    event.preventDefault(); 

    const pinNumber = 1234; 

    // const bankName =  document.getElementById('bank-name').value;
    const accountNumber = document.getElementById('bank-account-number').value; 
    const addNewAmount = parseInt(document.getElementById('amount').value);
    const pin = parseInt(document.getElementById('user-pin').value);  
    const availableBalance = parseInt(document.getElementById('available-balance').innerText);    

    if(accountNumber.length === 11 && pin === pinNumber){
        const newAvailableBalance = availableBalance + addNewAmount; 
        console.log(newAvailableBalance); 
        document.getElementById('available-balance').innerText = newAvailableBalance; 
        alert('Successly added money. Check the balance');
    }
    else{
        alert('Invalid account number or pin. Try again.'); 
    }
      
})

// toogling feature 

// toogle add money
document.getElementById('add-money-view').addEventListener('click', ()=>{
    document.getElementById('add-money').style.display = 'block';

    document.getElementById('cash-out').style.display = 'none'; 
    document.getElementById('transfer-money').style.display = 'none'; 
    document.getElementById('get-bonus').style.display = 'none'; 
    document.getElementById('pay-bill').style.display = 'none'; 
    document.getElementById('history').style.display = 'none'; 
})

// toogle cashout
document.getElementById('cash-out-view').addEventListener('click', ()=>{
    document.getElementById('cash-out').style.display = 'block'; 

    document.getElementById('add-money').style.display = 'none';
    document.getElementById('transfer-money').style.display = 'none'; 
    document.getElementById('get-bonus').style.display = 'none'; 
    document.getElementById('pay-bill').style.display = 'none'; 
    document.getElementById('history').style.display = 'none'; 
})

// toogle transfer money
document.getElementById('transfer-money-view').addEventListener('click', ()=>{
    document.getElementById('transfer-money').style.display = 'block'; 

    document.getElementById('cash-out').style.display = 'none'; 
    document.getElementById('add-money').style.display = 'none';
    document.getElementById('get-bonus').style.display = 'none'; 
    document.getElementById('pay-bill').style.display = 'none'; 
    document.getElementById('history').style.display = 'none'; 
})

// toogle get bonus
document.getElementById('get-bonus-view').addEventListener('click', ()=>{
    document.getElementById('get-bonus').style.display = 'block';

    document.getElementById('transfer-money').style.display = 'none'; 
    document.getElementById('cash-out').style.display = 'none'; 
    document.getElementById('add-money').style.display = 'none';
    document.getElementById('pay-bill').style.display = 'none'; 
    document.getElementById('history').style.display = 'none'; 
})

// toogle pay bill
document.getElementById('pay-bill-view').addEventListener('click', ()=>{
    document.getElementById('pay-bill').style.display = 'block'; 

    document.getElementById('get-bonus').style.display = 'none';
    document.getElementById('transfer-money').style.display = 'none'; 
    document.getElementById('cash-out').style.display = 'none'; 
    document.getElementById('add-money').style.display = 'none';
    document.getElementById('history').style.display = 'none'; 
})

// toogle history
document.getElementById('transaction-view').addEventListener('click', ()=>{
    document.getElementById('history').style.display = 'block';

    document.getElementById('pay-bill').style.display = 'none'; 
    document.getElementById('get-bonus').style.display = 'none';
    document.getElementById('transfer-money').style.display = 'none'; 
    document.getElementById('cash-out').style.display = 'none'; 
    document.getElementById('add-money').style.display = 'none';
     
})
