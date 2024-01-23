document.addEventListener('DOMContentLoaded', function () {
    const modalPage = document.querySelector('.modal-page');
    const modalSec = document.querySelector('.modal-sec');
    const modalThanksButton = document.querySelector('.thanks');

    modalThanksButton.addEventListener('click', function () {
        modalPage.style.display = 'none';
        modalSec.style.display = 'none';
    });
});