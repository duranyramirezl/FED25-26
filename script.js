// --- Age Gate ---
const form = document.querySelector(".age-gate");
if (form) {
    form.onsubmit = function () {
        const year = parseInt(document.querySelector('[name="year"]').value, 10);
        if (year > 2007) {
            alert("You cannot view this content at this time.");
            return false;
        } else {
            window.location = "main.html";
            return false;
        }
    };
}

// --- Burger Menu ---
const burger = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
const exitBtn = document.querySelector('.menu-close');

if (burger && nav && exitBtn) {
    burger.addEventListener('click', () => nav.classList.add('show'));
    exitBtn.addEventListener('click', () => nav.classList.remove('show'));
}

