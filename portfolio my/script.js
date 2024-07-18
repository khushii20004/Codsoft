document.addEventListener("DOMContentLoaded", function () {
    // Mobile menu toggle
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector("header nav ul");
    menuToggle.addEventListener("click", function () {
        nav.classList.toggle("active");
    });

    // Progress bar animation
    const progressBars = document.querySelectorAll('.progress-bar span');
    progressBars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        bar.style.width = width;
    });
});
