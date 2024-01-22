
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('subscribe-button').addEventListener('click', function () {
        document.querySelector('.modal-page').style.display = 'block';
        document.querySelector('.modal-sec').style.display = 'block';
    });

    document.querySelector('.thanks').addEventListener('click', function () {
        document.querySelector('.modal-page').style.display = 'none';
        document.querySelector('.modal-sec').style.display = 'none';
    });
});