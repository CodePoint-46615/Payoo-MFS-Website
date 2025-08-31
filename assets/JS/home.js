
/**
 * **************************************************************************************
 *                      reuseable function --> used in pay-bill section 
 * **************************************************************************************
 */

// get value from input
function getInputValueNumber(id) {
    const inputField = document.getElementById(id);
    const inputFieldValue = inputField.value;
    const inputFieldValueNumber = parseInt(inputFieldValue);
    return inputFieldValueNumber;
}

function getInputValue(id) {
    const inputField = document.getElementById(id);
    const inputFieldValue = inputField.value;
    return inputFieldValue;
}

// get value from innerText
function getInnerTextValueInNumber(id) {
    const getInnerTextField = document.getElementById(id);
    const getInnerTextFieldValue = getInnerTextField.innerText;
    const getInnerTextFieldValueInNumber = parseInt(getInnerTextFieldValue);

    return getInnerTextFieldValueInNumber;
}

function getInnerTextValue(id) {
    const getInnerTextField = document.getElementById(id);
    const getInnerTextFieldValue = getInnerTextField.innerText;

    return getInnerTextFieldValue;
}

// Set innerTextValue

function setInnerTextValue(id, innerTextUpdatedValue) {
    const targetElement = document.getElementById(id);
    targetElement.innerText = innerTextUpdatedValue;
    return targetElement.innerText;
}

/**
 * ******************************************************************************************
 *                              Transaction History Data Holder
 * ******************************************************************************************
 */

const transactionHistory = [];

/**
 * ****************************************************************************************
 *                                     Add Event Listener
 * ****************************************************************************************
 */

// Add event listener for add-money
document.getElementById('btn-add-money').addEventListener('click', (event) => {
    event.preventDefault();

    const pinNumber = 1234;

    const bankName = document.getElementById('bank-name').value;
    const accountNumber = document.getElementById('bank-account-number').value;
    const addNewAmount = parseInt(document.getElementById('amount').value);
    const pin = parseInt(document.getElementById('user-pin').value);
    const availableBalance = parseInt(document.getElementById('available-balance').innerText);

    if (accountNumber.length === 11 && pin === pinNumber) {
        const newAvailableBalance = availableBalance + addNewAmount;
        document.getElementById('available-balance').innerText = newAvailableBalance;
        alert('Successly added money. Check the balance');
    }
    else {
        alert('Invalid account number or pin. Try again.');
    }

    const data = {
        name: 'Add Money',
        subname: bankName,
        date: new Date().toLocaleTimeString()
    }

    transactionHistory.push(data);
    console.log(transactionHistory);

})


// Add event listener for cashout
document.getElementById("btn-cash-out").addEventListener('click', (event) => {
    event.preventDefault();

    const withdrawPinNumber = 1234;

    const bankName = document.getElementById('bank-name').value;
    const agentNumber = document.getElementById('agent-number').value;
    const withdrawAmount = parseInt(document.getElementById('withdraw-amount').value);
    const withdrawPin = parseInt(document.getElementById('withdraw-pin').value);
    const availableBalance = parseInt(document.getElementById('available-balance').innerText);


    if (agentNumber.length === 11 && withdrawPin === withdrawPinNumber && availableBalance > withdrawAmount) {
        const newAvailableBalance = availableBalance - withdrawAmount;
        console.log(newAvailableBalance);
        document.getElementById('available-balance').innerText = newAvailableBalance;
        alert('Successly withdraw money. Check the balance');
    }
    else {
        alert('Invalid credential. Try again.');
    }

    const data = {
        name: 'Cash Out',
        subname: bankName,
        date: new Date().toLocaleTimeString()
    }

    transactionHistory.push(data);
    console.log(transactionHistory);
})

// Add event listener for transfer-money
document.getElementById('btn-transfer-money').addEventListener('click', (event) => {
    event.preventDefault();

    const transferPin = 1234;
    const agentAccountNumber = document.getElementById('transfer-agent-number').value;
    const transferAmount = parseInt(document.getElementById('transfer-amount').value);
    const transferPinNumber = parseInt(document.getElementById('transfer-pin').value);
    const availableBalance = parseInt(document.getElementById('available-balance').innerText);

    if (agentAccountNumber.length !== 11) {
        alert('Invalid Agent');
        return;
    }
    else if (availableBalance < transferAmount) {
        alert('Insufficient Balance');
        return;
    }
    else if (transferPinNumber !== transferPin) {
        alert("Invalid Pin Number");
        return;
    }

    const newBalance = availableBalance - transferAmount;
    document.getElementById('available-balance').innerText = newBalance;
    alert('Successfully Money Transfered. Check the balance.');

    const data = {
        name: 'Transfer Money',
        date: new Date().toLocaleTimeString()
    }

    transactionHistory.push(data);
    console.log(transactionHistory);
})

// Add event to get-bonus 
document.getElementById('btn-get-bonus').addEventListener('click', (event) => {
    event.preventDefault();

    const validCoupon = 'payoo25';
    const userInputCoupon = document.getElementById('bonus-coupon').value;
    const availableBalance = parseInt(document.getElementById('available-balance').innerText);

    if (availableBalance === 0) {
        alert('Zero Balance. First, add money.');
    }
    else if (userInputCoupon === validCoupon) {
        const bonusBalance = availableBalance * (20 / 100); //20% bonus
        const newBalance = availableBalance + bonusBalance;
        document.getElementById('available-balance').innerText = newBalance;
        alert('Successfully added your bonus. Check the balance.');
    }
    else {
        alert('Invalid Coupon. Try Again.');
    }

    const data = {
        name: 'Get Bonus',
        date: new Date().toLocaleTimeString()
    }

    transactionHistory.push(data);
    console.log(transactionHistory);
})

// Add event listener on pay-bill
document.getElementById('btn-pay-now').addEventListener('click', (event) => {
    event.preventDefault();

    const payPinValue = 1234;
    const billName = getInputValue('bill-name');
    const billerAccountNumber = getInputValue('biller-account-number');
    const payAmout = getInputValueNumber('paying-amount');
    const payPIN = getInputValueNumber('pay-pin');
    const availableBalance = getInnerTextValueInNumber('available-balance');

    if (billerAccountNumber.length !== 11) {
        alert('Invalid Biller Account. Try Again');
        return;
    }
    else if (payAmout > availableBalance) {
        alert('Insufficient Balance');
        return;
    }
    else if (payPIN !== payPinValue) {
        alert('Invalid Pin');
        return;
    }

    const newBalance = availableBalance - payAmout;

    if (typeof (newBalance) != 'number') {
        alert('Something went wrong. Try Again');
    }
    else {
        setInnerTextValue('available-balance', newBalance);
        alert('Successfully payment done. Check the balance.');
    }

    const data = {
        name: billName,
        date: new Date().toLocaleTimeString()
    }

    transactionHistory.push(data);
    console.log(transactionHistory);
})

// add event listener on log out button 
document.getElementById('btn-log-out').addEventListener('click', () => {
    localStorage.removeItem('isLoggedIn');
    window.location.href = '../view/index.html';
})



/**
 * **********************************************************************
*                         Trasaction History
 * **********************************************************************
 */

document.getElementById('transaction-view').addEventListener('click', () => {
    const parent = document.getElementById('history');
    parent.innerHTML = ``; 

    for (const transactionData of transactionHistory) {
        const placeForNewChild = document.createElement('div');
        placeForNewChild.innerHTML =
        `
            <div class="flex items-center justify-between bg-white mx-5 my-5  p-2 rounded-xl">
                
                <div class="flex items-center gap-3 mx-3 pb-5">
                    <img src="../assets/wallet1.png" alt="" class="p-2 rounded-full bg-[#0808080d]">
                    <div>
                        <p class="text-[#080808b3] text-[16px] font-medium">${transactionData.name}</p>
                        <p class="text-[#080808b3] text-[12px] font-medium">${transactionData.subname}<span> ${transactionData.date}</span></p>
                    </div>
                </div>

                <i class="fa-solid fa-ellipsis-vertical mx-5"></i>
            </div>
            
        `
        parent.appendChild(placeForNewChild); 
    }
})