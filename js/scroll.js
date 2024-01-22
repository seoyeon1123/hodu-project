// JavaScript to handle scrolling to the top
document.addEventListener('DOMContentLoaded', function () {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    window.onscroll = function () {
        // Show the button when user scrolls down 20px from the top
        if (document.documentElement.scrollTop > 20) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    };

    scrollToTopBtn.onclick = function () {
        // Scroll to the top of the document
        document.documentElement.scrollTop = 0;
    };
});
