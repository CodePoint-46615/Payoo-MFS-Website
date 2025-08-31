// reuseable toggle function --> used for pay-bill & History
function handleToogle(id){
    const allFormSections = document.getElementsByClassName('form'); 
    for(const form of allFormSections){
        form.style.display = 'none';   
    }
    document.getElementById(id).style.display = 'block'; 
}

// toogling feature 
// toogle add money
document.getElementById('add-money-view').addEventListener('click', () => {
    document.getElementById('add-money').style.display = 'block';

    document.getElementById('cash-out').style.display = 'none';
    document.getElementById('transfer-money').style.display = 'none';
    document.getElementById('get-bonus').style.display = 'none';
    document.getElementById('pay-bill').style.display = 'none';
    document.getElementById('history').style.display = 'none';
})

// toogle cashout
document.getElementById('cash-out-view').addEventListener('click', () => {
    document.getElementById('cash-out').style.display = 'block';

    document.getElementById('add-money').style.display = 'none';
    document.getElementById('transfer-money').style.display = 'none';
    document.getElementById('get-bonus').style.display = 'none';
    document.getElementById('pay-bill').style.display = 'none';
    document.getElementById('history').style.display = 'none';
})

// toogle transfer money
document.getElementById('transfer-money-view').addEventListener('click', () => {
    document.getElementById('transfer-money').style.display = 'block';

    document.getElementById('cash-out').style.display = 'none';
    document.getElementById('add-money').style.display = 'none';
    document.getElementById('get-bonus').style.display = 'none';
    document.getElementById('pay-bill').style.display = 'none';
    document.getElementById('history').style.display = 'none';
})

// toogle get bonus
document.getElementById('get-bonus-view').addEventListener('click', () => {
    document.getElementById('get-bonus').style.display = 'block';

    document.getElementById('transfer-money').style.display = 'none';
    document.getElementById('cash-out').style.display = 'none';
    document.getElementById('add-money').style.display = 'none';
    document.getElementById('pay-bill').style.display = 'none';
    document.getElementById('history').style.display = 'none';
})

// toogle pay bill
document.getElementById('pay-bill-view').addEventListener('click', () => {
    handleToogle('pay-bill'); 
})

// toogle history
document.getElementById('transaction-view').addEventListener('click', () => {
    handleToogle('history'); 

})