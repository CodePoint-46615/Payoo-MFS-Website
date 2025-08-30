// login button functionality
document.getElementById('btn-login').addEventListener('click', (event) => {
    event.preventDefault();
    const mobileNumber = 12345678910;
    const pin = 1234;

    const userGivenMobileNumberValue = document.getElementById('user-mobile').value;
    const userGivenMobileNumber = parseInt(userGivenMobileNumberValue);

    const userGivenPinNumberValue = document.getElementById('user-pin').value;
    const userGivenPinNumber = parseInt(userGivenPinNumberValue);

    if (mobileNumber === userGivenMobileNumber && pin === userGivenPinNumber) {
        // creating a fake session 
        localStorage.setItem('isLoggedIn', 'true');
        window.location.href = '../view/home.html';
    }
    else {
        alert('Invalid Credentials. Try Again');
    }
})