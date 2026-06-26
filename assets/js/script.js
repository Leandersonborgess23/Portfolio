/* ==========================================
   NAVBAR (GLASS + SCROLL STATE)
========================================== */

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 80) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


/* ==========================================
   EFEITO DE DIGITAÇÃO
========================================== */

const textos = [
    "Desenvolvedor Full Stack",
    "Programador Python",
    "Entusiasta de Inteligência Artificial",
    "Automação e IoT",
    "Estudante de Ciência e Tecnologia"
];

let indiceTexto = 0;
let indiceChar = 0;
let apagando = false;

const elemento = document.getElementById("typing-text");

function digitar() {

    const textoAtual = textos[indiceTexto];

    if (!apagando) {

        elemento.textContent = textoAtual.substring(0, indiceChar + 1);
        indiceChar++;

        if (indiceChar === textoAtual.length) {
            apagando = true;
            setTimeout(digitar, 1500);
            return;
        }

    } else {

        elemento.textContent = textoAtual.substring(0, indiceChar - 1);
        indiceChar--;

        if (indiceChar === 0) {

            apagando = false;
            indiceTexto++;

            if (indiceTexto >= textos.length) {
                indiceTexto = 0;
            }
        }
    }

    setTimeout(digitar, apagando ? 40 : 90);
}

digitar();


/* ==========================================
   SCROLL REVEAL (MODERNO - INTERSECTION OBSERVER)
========================================== */

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.15
});

document.querySelectorAll("section").forEach(section => {
    section.classList.add("fade-up");
    observer.observe(section);
});


/* ==========================================
   SCROLL SUAVE
========================================== */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const destino = document.querySelector(this.getAttribute("href"));

        if (destino) {
            destino.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});


/* ==========================================
   HOVER 3D NOS CARDS
========================================== */

document.querySelectorAll(".card").forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateX = (y - rect.height / 2) / 20;
        const rotateY = (x - rect.width / 2) / 20;

        card.style.transform = `rotateX(${ -rotateX }deg) rotateY(${ rotateY }deg)`;

    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "rotateX(0) rotateY(0)";
    });

});