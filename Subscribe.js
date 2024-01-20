document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById("subscribe_button");

    button.addEventListener("click", function() {
        const emailInput = document.querySelector('.subscribe input[type="email"]');
        if (emailInput) {
            emailInput.value = '';
        } else {
            console.error("Email input not found!");
        }
    });
});