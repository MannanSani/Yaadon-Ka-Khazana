window.onload = function () {
    alert("خوش آمدید! ہماری ویب سائٹ پر خوش آمدید!");

    const toggleButton = document.getElementById("nav-toggle");
    const navLinks = document.getElementById("nav-links");

    if (toggleButton && navLinks) {
        toggleButton.addEventListener("click", function () {
            navLinks.classList.toggle("active");
        });
    }
};
