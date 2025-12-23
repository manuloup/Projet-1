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

window.addEventListener("DOMContentLoaded", () => {
    modal.style.display = "none";
});


const slider = document.querySelector('.projects-container');

slider.innerHTML += slider.innerHTML;

let speed = 0.5;

function autoScroll() {
    slider.scrollLeft += speed;

    if (slider.scrollLeft >= slider.scrollWidth / 2) {
        slider.scrollLeft = 0;
    }

    requestAnimationFrame(autoScroll);
}

autoScroll();

const teamCards = document.querySelectorAll(".team-card");

teamCards.forEach(card => {
    card.addEventListener("click", (e) => {
        e.stopPropagation();

        const isOpen = card.classList.contains("active");

        // ferme toutes les cards
        teamCards.forEach(c => c.classList.remove("active"));

        // si elle n'était pas ouverte, on l'ouvre
        if (!isOpen) {
            card.classList.add("active");
        }
    });
});

/* ============================
   FOND ANIMÉ — PYRAMIDES 3D CKM
============================ */

const canvas = document.getElementById("bg-canvas");

if (canvas) {
    const ctx = canvas.getContext("2d");

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    class Pyramid {
        constructor() {
            this.reset();
        }

        reset() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = 120 + Math.random() * 200;
            this.speed = 0.2 + Math.random() * 0.4;
            this.angle = Math.random() * Math.PI * 2;
            this.rotationSpeed = 0.002 + Math.random() * 0.004;
            this.alpha = 0.35 + Math.random() * 0.65;  // plus lumineux
            ctx.lineWidth = 3;
            ctx.shadowColor = `rgba(143, 0, 255, ${this.alpha})`;
            ctx.shadowBlur = 55;
            // plus épais

        }

        update() {
            this.angle += this.rotationSpeed;
            this.y -= this.speed;

            if (this.y + this.size < 0) {
                this.reset();
                this.y = canvas.height + this.size;
            }
        }

        draw() {
            const h = this.size;
            const w = this.size * 0.9;

            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate(this.angle);

            ctx.strokeStyle = `rgba(143, 0, 255, ${this.alpha})`;
            ctx.lineWidth = 2;

            ctx.beginPath();
            ctx.moveTo(0, -h / 2);
            ctx.lineTo(-w / 2, h / 2);
            ctx.lineTo(w / 2, h / 2);
            ctx.closePath();
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(0, -h / 2);
            ctx.lineTo(0, h / 4);
            ctx.stroke();

            ctx.restore();
        }
    }

    const pyramids = [];
    const total = 18;

    for (let i = 0; i < total; i++) {
        pyramids.push(new Pyramid());
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        pyramids.forEach(p => {
            p.update();
            p.draw();
        });

        requestAnimationFrame(animate);
    }

    animate();
}


