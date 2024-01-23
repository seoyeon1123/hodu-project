document.addEventListener('DOMContentLoaded', function () {
    const subscribeButton = document.getElementById('subscribe-button');
    const emailInput = document.getElementById('email-text');
    const modalPage = document.querySelector('.modal-page');
    const modalSec = document.querySelector('.modal-sec');
    const modalThanksButton = document.querySelector('.thanks');

    subscribeButton.addEventListener('click', function () {
        const email = emailInput.value.trim();
        if (isValidEmail(email)) {
            emailInput.value = '';
            modalPage.style.display = 'block';
            modalSec.style.display = 'block';
        } else {
            alert('올바른 이메일 주소를 입력하라냥 ! ');
        }
    });


    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
