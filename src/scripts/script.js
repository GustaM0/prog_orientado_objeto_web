// === Navbar / modal script ===
const header = document.querySelector(".primary-header");
const watcher = document.createElement("div");

watcher.setAttribute("data-scroll-watcher", "");
header.before(watcher);

const observer = new IntersectionObserver(
    (entries) => {
        header.classList.toggle("sticking", !entries[0].isIntersecting);
    },
    { rootMargin: "50px 0px 0px 0px" }
);

observer.observe(watcher);

// === Animação do container ===
const isVisible = (element) => {
    const elementRect = element.getBoundingClientRect();
    return (
        elementRect.top < window.innerHeight &&
        elementRect.bottom >= 0
    );
};
const handleScroll = () => {
    const containers = document.querySelectorAll(".content-container");
    containers.forEach((container) => {
        if (isVisible(container)) {
            container.classList.add("visible");
        } else {
            container.classList.remove("visible");
        }
    });
};
window.addEventListener("scroll", handleScroll);
window.addEventListener("load", handleScroll);

// === Animação topo ===
const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' 
    });
};

const inicioLink = document.querySelector('a[href="#"]');

inicioLink.addEventListener('click', (event) => {
    event.preventDefault(); 
    scrollToTop(); 
});

// === Modais ===
// Modal script (Tópicos)
const modalTopic = document.getElementById("modal-topic");
const openTopicModal = document.getElementById("open-modal-topic");
const closeModalTopic = document.getElementById("close-modal-topic");
openTopicModal.addEventListener("click", () => {// Abrir modal de tópicos
    modalTopic.style.display = "block";
});
closeModalTopic.addEventListener("click", () => {// Fechar modal de tópicos
    modalTopic.style.display = "none";
});
// Redirecionamento dos modais:
// 
// const scrollToSection = (sectionId) => {
//     const section = document.getElementById(sectionId);
//     const y = section.getBoundingClientRect().top + window.scrollY - 100;
//     window.scrollTo({top: y, behavior: 'smooth'});
// };
// document.getElementById("topico-1").addEventListener("click", () => {
//     scrollToSection("sts_historia");
//     document.getElementById("modal-topic").style.display = "none";
// });

// document.getElementById("topico-2").addEventListener("click", () => {
//     scrollToSection("sts_contexto");
//     document.getElementById("modal-topic").style.display = "none"; 
// });

// document.getElementById("topico-3").addEventListener("click", () => {
//     scrollToSection("sts_lancamento");
//     document.getElementById("modal-topic").style.display = "none"; 
// });

// document.getElementById("topico-4").addEventListener("click", () => {
//     scrollToSection("sts_evolucao");
//     document.getElementById("modal-topic").style.display = "none"; 
// });

// document.getElementById("topico-5").addEventListener("click", () => {
//     scrollToSection("sts_plataforma");
//     document.getElementById("modal-topic").style.display = "none"; 
// });

// document.getElementById("topico-6").addEventListener("click", () => {
//     scrollToSection("sts_choje");
//     document.getElementById("modal-topic").style.display = "none"; 
// });

// Função para rolar suavemente para a seção
const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    const y = section.getBoundingClientRect().top + window.scrollY - 100; 
    window.scrollTo({ top: y, behavior: 'smooth' });
};

document.querySelectorAll('.bloco-modal').forEach(bloco => {
    bloco.addEventListener('click', function() {
        const sectionId = this.getAttribute('data-section');
        scrollToSection(sectionId);
        document.getElementById("modal-topic").style.display = "none"; // Fecha o modal
    });
});

// Modal script (Grupo)
const modalGroup = document.getElementById("modal-group");
const openGroupModal = document.getElementById("open-modal-group");
const closeModalGroup = document.getElementById("close-modal-group");
openGroupModal.addEventListener("click", () => {// Abrir modal de grupo
    modalGroup.style.display = "block";
});
closeModalGroup.addEventListener("click", () => {// Fechar modal de grupo
    modalGroup.style.display = "none";
});


// *Fechar modais ao clicar fora do conteúdo*
window.addEventListener("click", (event) => {
    if (event.target === modalTopic) {
        modalTopic.style.display = "none";
    }
    if (event.target === modalGroup) {
        modalGroup.style.display = "none";
    }
});

// Abrir modal - Escolha de tema
document.getElementById("open-pages-nav-btn").addEventListener("click", function() {// Abrir o modal
    console.log(`clicou`)
    document.getElementById("pages-nav").classList.add("show");
});
document.getElementById("close-pages-nav").addEventListener("click", function() {// Fechar o modal
    document.getElementById("pages-nav").classList.remove("show");
});
