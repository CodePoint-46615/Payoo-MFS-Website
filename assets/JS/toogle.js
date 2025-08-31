// reuseable toggle function --> used for pay-bill & History
function handleToogle(id){
    const allFormSections = document.getElementsByClassName('form'); 
    for(const form of allFormSections){
        form.style.display = 'none';   
    }
    document.getElementById(id).style.display = 'block'; 
}

function buttonToogle(id){
    const formButtons = document.getElementsByClassName('form-btn'); 

    for(const btn of formButtons){
       btn.classList.remove("border-2" , "border-[#0874f2]" , "bg-slate-200");
    }

    document.getElementById(id).classList.add('border-2' , 'border-[#0874f2]', 'bg-slate-200'); 
}

// toogling feature 
// toogle add money
document.getElementById('add-money-view').addEventListener('click', () => {

    // forms
    document.getElementById('add-money').style.display = 'block';

    document.getElementById('cash-out').style.display = 'none';
    document.getElementById('transfer-money').style.display = 'none';
    document.getElementById('get-bonus').style.display = 'none';
    document.getElementById('pay-bill').style.display = 'none';
    document.getElementById('history').style.display = 'none';

    //view div or button
    buttonToogle('add-money-view'); 
})

// toogle cashout
document.getElementById('cash-out-view').addEventListener('click', () => {

    // forms
    document.getElementById('cash-out').style.display = 'block';

    document.getElementById('add-money').style.display = 'none';
    document.getElementById('transfer-money').style.display = 'none';
    document.getElementById('get-bonus').style.display = 'none';
    document.getElementById('pay-bill').style.display = 'none';
    document.getElementById('history').style.display = 'none';

    //view div or button
    buttonToogle('cash-out-view'); 
})

// toogle transfer money
document.getElementById('transfer-money-view').addEventListener('click', () => {

    //form
    document.getElementById('transfer-money').style.display = 'block';

    document.getElementById('cash-out').style.display = 'none';
    document.getElementById('add-money').style.display = 'none';
    document.getElementById('get-bonus').style.display = 'none';
    document.getElementById('pay-bill').style.display = 'none';
    document.getElementById('history').style.display = 'none';

    //view div or button
    buttonToogle('transfer-money-view'); 
})

// toogle get bonus
document.getElementById('get-bonus-view').addEventListener('click', () => {
    document.getElementById('get-bonus').style.display = 'block';

    document.getElementById('transfer-money').style.display = 'none';
    document.getElementById('cash-out').style.display = 'none';
    document.getElementById('add-money').style.display = 'none';
    document.getElementById('pay-bill').style.display = 'none';
    document.getElementById('history').style.display = 'none';

    //view div or button
    buttonToogle('get-bonus-view'); 
})

// toogle pay bill
document.getElementById('pay-bill-view').addEventListener('click', () => {
    handleToogle('pay-bill'); 

    //view div or button
    buttonToogle('pay-bill-view'); 
})

// toogle history
document.getElementById('transaction-view').addEventListener('click', () => {
    handleToogle('history'); 

    //view div or button
    buttonToogle('transaction-view'); 

})