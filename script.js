// ===============================
// ROLAGEM SUAVE DO MENU
// ===============================

document.querySelectorAll('nav a').forEach(link => {

    link.addEventListener('click', function (event) {

        event.preventDefault();

        const destino = document.querySelector(this.getAttribute('href'));
        
        destino.scrollIntoView({
            behavior: "smooth"
        });

    });

});


// ===============================
// VALIDAÇÃO DO FORMULÁRIO
// ===============================

const formulario = document.querySelector("form");

formulario.addEventListener("submit", function (event) {

    event.preventDefault();

    let nome = document.getElementById("nome").value.trim();
    let email = document.getElementById("email").value.trim();
    let telefone = document.getElementById("telefone").value.trim();
    let mensagem = document.getElementById("mensagem").value.trim();

    if (nome === "") {
        alert("Digite seu nome.");
        return;
    }

    if (email === "") {
        alert("Digite seu e-mail.");
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        alert("Digite um e-mail válido.");
        return;
    }

    if (telefone === "") {
        alert("Digite seu telefone.");
        return;
    }

    if (mensagem === "") {
        alert("Digite sua mensagem.");
        return;
    }

    alert("Mensagem enviada com sucesso!\nEm breve entraremos em contato.");

    formulario.reset();

});


// ===============================
// BOTÃO VOLTAR AO TOPO
// ===============================

const botaoTopo = document.createElement("button");

botaoTopo.innerHTML = "↑";

document.body.appendChild(botaoTopo);

botaoTopo.style.position = "fixed";
botaoTopo.style.bottom = "20px";
botaoTopo.style.right = "20px";
botaoTopo.style.width = "50px";
botaoTopo.style.height = "50px";
botaoTopo.style.borderRadius = "50%";
botaoTopo.style.border = "none";
botaoTopo.style.backgroundColor = "#1E88E5";
botaoTopo.style.color = "#fff";
botaoTopo.style.fontSize = "22px";
botaoTopo.style.cursor = "pointer";
botaoTopo.style.display = "none";
botaoTopo.style.boxShadow = "0 4px 10px rgba(0,0,0,.3)";

window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {

        botaoTopo.style.display = "block";

    }

    else {

        botaoTopo.style.display = "none";

    }

});

botaoTopo.addEventListener("click", function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


// ===============================
// EFEITO NOS CARDS
// ===============================

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", function () {

        card.style.transform = "scale(1.05)";

    });

    card.addEventListener("mouseleave", function () {

        card.style.transform = "scale(1)";

    });

});


// ===============================
// DESTAQUE DO MENU
// ===============================

const secoes = document.querySelectorAll("section");

const links = document.querySelectorAll("nav a");

window.addEventListener("scroll", function () {

    let atual = "";

    secoes.forEach(secao => {

        const topo = secao.offsetTop - 150;

        if (window.scrollY >= topo) {

            atual = secao.getAttribute("id");

        }

    });

    links.forEach(link => {

        link.classList.remove("ativo");

        if (link.getAttribute("href") === "#" + atual) {

            link.classList.add("ativo");

        }

    });

});


// ===============================
// ANIMAÇÃO DO TÍTULO
// ===============================

const titulo = document.querySelector(".banner h1");

let mostrar = false;

window.addEventListener("scroll", function () {

    if (!mostrar && window.scrollY < 100) {

        titulo.style.opacity = "1";

        titulo.style.transform = "translateY(0)";

        mostrar = true;

    }

});


// ===============================
// MENSAGEM DE BOAS-VINDAS
// ===============================

window.addEventListener("load", function () {

    console.log("Bem-vindo ao Pet Shop Amigo do Cão!");

});