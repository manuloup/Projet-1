const modal = document.getElementById("modal");
const openButtons = document.querySelectorAll(".contact-buttons button");
const closeButton = document.querySelector(".close-modal");
const form = modal.querySelector("form");

openButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        e.preventDefault();
        modal.style.display = "flex";
    });
});

closeButton.addEventListener("click", () => {
    modal.style.display = "none";
});

modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
    modal.style.display = "none";
});
