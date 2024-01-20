
    document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('subscribe_button').addEventListener('click', function () {
        document.querySelector('.modal_page').style.display = 'block';
        document.querySelector('.modal_sec').style.display = 'block';
    });

    document.querySelector('.thanks').addEventListener('click', function () {
    document.querySelector('.modal_page').style.display = 'none';
    document.querySelector('.modal_sec').style.display = 'none';
});
});