document.addEventListener("DOMContentLoaded", function () {
    const buyButton = document.querySelector(".btn-success");

    buyButton.addEventListener("click", function () {
        alert("¡Entradas compradas con éxito!");
    });

    const navbarLinks = document.querySelectorAll(".nav-link");
    navbarLinks.forEach(link => {
        link.addEventListener("mouseover", () => {
            link.style.textDecoration = "underline";
        });
        link.addEventListener("mouseout", () => {
            link.style.textDecoration = "none";
        });
    });
});
